package main

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

var (
	linkPattern      = regexp.MustCompile(`(?i)<a\b|<Link\b|href=|\[[^\]]+\]\([^)]+\)`)
	tatianaLinkLabel = regexp.MustCompile(`(?i)\[[^\]]*TatianaSF[^\]]*\]\([^)]+\)`)
)

func main() {
	roots := []string{"app", "components", "content", "docs", "README.md", "AGENTS.md"}
	extensions := map[string]bool{
		".css":  true,
		".md":   true,
		".mdx":  true,
		".tsx":  true,
		".jsx":  true,
		".ts":   true,
		".js":   true,
		".html": true,
	}

	var filesScanned int
	var filesWithLinks int
	var linkTokens int
	var tatianaLabelViolations []string
	var underlineRuleFound bool
	var textDecorationNone []string

	for _, root := range roots {
		info, err := os.Stat(root)
		if err != nil {
			continue
		}

		if !info.IsDir() {
			scanFile(root, extensions, &filesScanned, &filesWithLinks, &linkTokens, &tatianaLabelViolations, &underlineRuleFound, &textDecorationNone)
			continue
		}

		err = filepath.WalkDir(root, func(path string, entry os.DirEntry, err error) error {
			if err != nil {
				return err
			}

			if entry.IsDir() {
				name := entry.Name()
				if strings.HasPrefix(name, ".") || name == "node_modules" || name == "out" {
					return filepath.SkipDir
				}
				return nil
			}

			scanFile(path, extensions, &filesScanned, &filesWithLinks, &linkTokens, &tatianaLabelViolations, &underlineRuleFound, &textDecorationNone)
			return nil
		})
		if err != nil {
			fmt.Fprintf(os.Stderr, "scan error: %v\n", err)
			os.Exit(1)
		}
	}

	fmt.Printf("files_scanned=%d\n", filesScanned)
	fmt.Printf("files_with_link_tokens=%d\n", filesWithLinks)
	fmt.Printf("link_tokens=%d\n", linkTokens)
	fmt.Printf("underline_rule_found=%t\n", underlineRuleFound)

	if len(tatianaLabelViolations) > 0 {
		fmt.Println("tatianasf_markdown_link_label_violations:")
		for _, item := range tatianaLabelViolations {
			fmt.Println(item)
		}
		os.Exit(1)
	}

	if len(textDecorationNone) > 0 {
		fmt.Println("text_decoration_none_found:")
		for _, item := range textDecorationNone {
			fmt.Println(item)
		}
		os.Exit(1)
	}

	if !underlineRuleFound {
		fmt.Println("missing global underline rule in app/globals.css")
		os.Exit(1)
	}
}

func scanFile(path string, extensions map[string]bool, filesScanned *int, filesWithLinks *int, linkTokens *int, tatianaLabelViolations *[]string, underlineRuleFound *bool, textDecorationNone *[]string) {
	if !extensions[strings.ToLower(filepath.Ext(path))] {
		return
	}

	data, err := os.ReadFile(path)
	if err != nil {
		fmt.Fprintf(os.Stderr, "read error %s: %v\n", path, err)
		os.Exit(1)
	}

	(*filesScanned)++
	text := string(data)
	matches := linkPattern.FindAllStringIndex(text, -1)
	if len(matches) > 0 {
		(*filesWithLinks)++
		*linkTokens += len(matches)
	}

	if path == filepath.FromSlash("app/globals.css") &&
		strings.Contains(text, "a {") &&
		strings.Contains(text, "text-decoration-line: underline") {
		*underlineRuleFound = true
	}

	if strings.Contains(text, "text-decoration: none") || strings.Contains(text, "text-decoration-line: none") {
		*textDecorationNone = append(*textDecorationNone, path)
	}

	for _, match := range tatianaLinkLabel.FindAllString(text, -1) {
		*tatianaLabelViolations = append(*tatianaLabelViolations, fmt.Sprintf("%s: %s", path, match))
	}
}

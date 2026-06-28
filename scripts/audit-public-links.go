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
	var duplicateBlockRuleFound bool
	var textDecorationNone []string

	for _, root := range roots {
		info, err := os.Stat(root)
		if err != nil {
			continue
		}

		if !info.IsDir() {
			scanFile(root, extensions, &filesScanned, &filesWithLinks, &linkTokens, &tatianaLabelViolations, &underlineRuleFound, &duplicateBlockRuleFound, &textDecorationNone)
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

			scanFile(path, extensions, &filesScanned, &filesWithLinks, &linkTokens, &tatianaLabelViolations, &underlineRuleFound, &duplicateBlockRuleFound, &textDecorationNone)
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
	fmt.Printf("duplicate_block_rule_found=%t\n", duplicateBlockRuleFound)

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

	if !duplicateBlockRuleFound {
		fmt.Println("missing duplicate-destination card underline rule in app/globals.css")
		os.Exit(1)
	}
}

func scanFile(path string, extensions map[string]bool, filesScanned *int, filesWithLinks *int, linkTokens *int, tatianaLabelViolations *[]string, underlineRuleFound *bool, duplicateBlockRuleFound *bool, textDecorationNone *[]string) {
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

	if path == filepath.FromSlash("app/globals.css") &&
		strings.Contains(text, ".card[href]") &&
		strings.Contains(text, ".step-row[href]") &&
		strings.Contains(text, ".action-tile[href]") &&
		strings.Contains(text, ".card[href] h3") &&
		strings.Contains(text, ".step-row[href] h3") &&
		strings.Contains(text, ".action-tile[href] strong") {
		*duplicateBlockRuleFound = true
	}

	for lineNumber, line := range strings.Split(text, "\n") {
		if strings.Contains(line, "text-decoration: none") || strings.Contains(line, "text-decoration-line: none") {
			if path == filepath.FromSlash("app/globals.css") && duplicateBlockNoneAllowed(text, lineNumber) {
				continue
			}

			*textDecorationNone = append(*textDecorationNone, fmt.Sprintf("%s:%d", path, lineNumber+1))
		}
	}

	for _, match := range tatianaLinkLabel.FindAllString(text, -1) {
		*tatianaLabelViolations = append(*tatianaLabelViolations, fmt.Sprintf("%s: %s", path, match))
	}
}

func duplicateBlockNoneAllowed(text string, lineNumber int) bool {
	lines := strings.Split(text, "\n")
	start := lineNumber
	for start >= 0 && !strings.Contains(lines[start], "{") {
		start--
	}
	if start < 0 {
		return false
	}

	selector := strings.Join(lines[start:lineNumber+1], " ")
	for previous := start - 1; previous >= 0 && strings.TrimSpace(lines[previous]) != ""; previous-- {
		selector = lines[previous] + " " + selector
	}

	return strings.Contains(selector, ".card[href]") &&
		strings.Contains(selector, ".step-row[href]") &&
		strings.Contains(selector, ".action-tile[href]")
}

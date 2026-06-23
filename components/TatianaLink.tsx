export const TATIANA_SEARCH_URL = "https://www.google.com/search?q=TatianaSF";

export function TatianaLink({ className }: { className?: string }) {
  return (
    <a
      className={className}
      href={TATIANA_SEARCH_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      TatianaSF
    </a>
  );
}

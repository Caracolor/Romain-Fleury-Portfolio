// Minimal markdown renderer shared by CaseStudyChat and GlobalChatWidget:
// handles **bold** inline, and turns a block of consecutive "- "/"* " lines
// into a real <ul>. Deliberately not a full markdown parser — just enough
// for how Claude tends to format these answers.
export function MarkdownText({
  text,
  fontSize,
  lineHeight,
  color,
}: {
  text: string;
  fontSize: number;
  lineHeight: string;
  color: string;
}) {
  const baseStyle = {
    fontFamily: "inherit",
    fontSize,
    lineHeight,
    color,
    margin: 0,
  };

  const renderInline = (line: string): React.ReactNode[] => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const blocks = text.split(/\n\n+/);

  return (
    <>
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isAllList = lines.every((l) => /^[-*] /.test(l.trim()) || l.trim() === "");
        const hasSomeList = lines.some((l) => /^[-*] /.test(l.trim()));

        if (isAllList && hasSomeList) {
          return (
            <ul
              key={bi}
              style={{
                ...baseStyle,
                paddingLeft: 18,
                marginTop: bi === 0 ? 0 : 10,
                marginBottom: 0,
              }}
            >
              {lines
                .filter((l) => /^[-*] /.test(l.trim()))
                .map((l, li) => (
                  <li key={li} style={{ marginBottom: 4 }}>
                    {renderInline(l.trim().replace(/^[-*] /, ""))}
                  </li>
                ))}
            </ul>
          );
        }

        // Mixed block (text + maybe list items)
        return (
          <p
            key={bi}
            style={{
              ...baseStyle,
              marginTop: bi === 0 ? 0 : 10,
            }}
          >
            {lines.map((line, li) => {
              const isListItem = /^[-*] /.test(line.trim());
              const content = renderInline(
                isListItem ? line.trim().replace(/^[-*] /, "• ") : line
              );
              return (
                <span key={li}>
                  {li > 0 && <br />}
                  {content}
                </span>
              );
            })}
          </p>
        );
      })}
    </>
  );
}

"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
// @ts-ignore
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export const ComponentHighlighter = ({ value, language }: any) => {
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {value}
    </SyntaxHighlighter>
  );
};

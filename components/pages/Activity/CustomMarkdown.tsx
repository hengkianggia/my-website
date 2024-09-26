import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import { componentsMDX } from "@/lib/mdx";

interface CustomMarkdownProps {
  content: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={componentsMDX as Partial<Components>}
      remarkPlugins={[remarkGfm]}
      className={"space-y-3"}
    >
      {content}
    </ReactMarkdown>
  );
};

export default CustomMarkdown;

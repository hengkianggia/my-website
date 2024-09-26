import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import { componentsMDX } from "@/lib/mdx";

interface CustomMarkdownProps {
  content: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({ content }) => {
  const components = {
    h1: ({ node, ...props }: { node: any; [key: string]: any }) => (
      <h1 className="text-2xl font-semibold" {...props} />
    ),
    h2: ({ node, ...props }: { node: any; [key: string]: any }) => (
      <h2 className="text-xl font-semibold" {...props} />
    ),
    p: ({ node, ...props }: { node: any; [key: string]: any }) => (
      <p className="text-justify" {...props} />
    ),
    ul: ({ node, ...props }: { node: any; [key: string]: any }) => (
      <ul className="ml-4 space-y-2" {...props} />
    ),
    li: ({ node, ...props }: { node: any; [key: string]: any }) => (
      <li className="" {...props} />
    ),
    code: ({
      node,
      inline,
      className,
      children,
      ...props
    }: {
      node: any;
      inline: boolean;
      className: string;
      children: React.ReactNode;
      [key: string]: any;
    }) => {
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <pre className="p-4">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

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

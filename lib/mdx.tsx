import clsx from "clsx";
import NextLink from "next/link";
import React from "react";
import { cn } from "./utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

export const componentsMDX = {
  h1: (props: any) => (
    <h2
      className="relative font-semibold border-t-2 border-rose-200/5 pt-9 text-2xl sm:text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h3
      className="relative font-semibold border-t-2 border-rose-200/5 pt-9 text-2xl sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h4 className="text-xl font-semibold  text-rose-200/95" {...props} />
  ),
  h4: (props: any) => (
    <h5 className="text-lg font-semibold  text-rose-200/95" {...props} />
  ),
  p: ({ node, ...props }: { node: any; [key: string]: any }) => (
    <p className="text-justify" {...props} />
  ),
  hr: (props: any) => (
    <hr className="border-t-2 border-rose-200/5" {...props} />
  ),
  a: ({ href = "", ...props }) => {
    return (
      <NextLink
        href={href}
        className={cn(
          "text-rose-200 underline decoration-rose-200/20 underline-offset-2 transition-all hover:text-rose-100 hover:decoration-rose-100/40",
          "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
        )}
        {...props}
      />
    );
  },
  ul: (props: any) => (
    <ul
      style={{
        margin: "25px 0",
        marginLeft: "20px",
        listStyle: "inside",
      }}
      {...props}
    />
  ),
  // li: (props: any) => <li className="list-disc" {...props} />,
  ol: (props: any) => (
    <ol className="list-decimal space-y-3 pl-10" {...props} />
  ),
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  // Since markdown blockquotes don't have native support for citations, we
  // reserve `<em>` to style citations.
  blockquote: (props: any) => (
    <blockquote
      className={clsx(
        "relative border-l-2 border-rose-200/5 pl-4 pt-8 before:absolute before:top-5 before:-ml-1 before:-mt-6 before:text-6xl before:text-rose-200/20 before:content-['“'] [&_em]:mt-3 [&_em]:block [&_em]:not-italic [&_em]:leading-none [&_em]:before:pr-1 [&_em]:before:content-['—']",
        "bg-gradient-to-br from-rose-200 to-rose-200/30 bg-clip-text text-transparent"
      )}
      {...props}
    />
  ),
  del: (props: any) => (
    <del className="text-rose-200/50 line-through" {...props} />
  ),
  img: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: any;
  }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={800}
      className="max-w-full h-auto rounded-md shadow-md cursor-pointer"
      {...props}
    />
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
      <SyntaxHighlighter
        {...props}
        customStyle={{
          padding: "20px 0px",
          borderRadius: "5px",
          marginTop: "50px",
        }}
        language={match[1]}
        style={coldarkDark}
        showLineNumbers
        wrapLines={true}
        className={className}
      >
        {String(children)}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

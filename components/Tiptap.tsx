"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    autofocus: true,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-invert w-full border border-white p-2",
      },
    },
  });

  return (
    <div className="w-full">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;

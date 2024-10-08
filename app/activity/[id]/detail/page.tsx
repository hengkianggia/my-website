import React from "react";
import HeaderDetail from "@/components/HeaderDetail";
import CustomMarkdown from "@/components/pages/Activity/CustomMarkdown";
import activity from "@/lib/data/listActivity.json";

interface CustomMarkdownProps {
  id: number;
  title: string;
  date: string;
  desc: string;
  content: {
    title: string;
    code: string;
  };
}

const DetailActivity = ({ params }: { params: { id: number } }) => {
  let markdownContent: CustomMarkdownProps = {
    id: 0,
    title: "",
    date: "",
    desc: "",
    content: {
      title: "",
      code: "",
    },
  };

  const id = params.id;
  activity.forEach((element) => {
    if (element.id == id) {
      markdownContent = element;
    }
  });

  if (!markdownContent) {
    return <div>Activity not found</div>;
  }

  const markCode = `
# Judul Utama

> Dengan perubahan ini, setiap kali pengguna mengklik tombol "Copy" pada blok kode, teks kode akan disalin ke clipboard dan tombol akan berubah warna menjadi hijau selama 2 detik.
 
> lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

- Item 1
- Item 2
- Item 3

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

Italicized text is the *cat's meow*.
> Dorothy followed her through many of the beautiful rooms in her castle.

I just love **bold text**.

I love supporting **[EFF](https://eff.org)**. This is the *[Markdown Guide](https://www.markdownguide.org)*.


![Philadelphia's Magic Gardens. This place was so cool!](https://naruto-official.com/common/ogp/NTOS_OG-main.png "Philadelphia's Magic Gardens")


\`\`\`javascript
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Images = ({
  className,
  image,
}: {
  className?: string;
  image: StaticImageData;
}) => {
  return (
    <>
      <Image src={image} alt="desc" fill className={cn("w-full", className)} />
    </>
  );
};

export default Images;
\`\`\`
  `;

  return (
    <div className="w-full">
      <HeaderDetail date={markdownContent.date} title={markdownContent.title} />
      <div className="relative w-full overflow-hidden">
        <CustomMarkdown content={markCode} />
      </div>
    </div>
  );
};
export default DetailActivity;

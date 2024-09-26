import React from "react";
import HeaderDetail from "@/components/HeaderDetail";
import CustomMarkdown from "@/components/pages/Activity/CustomMarkdown";

const DetailActivity = () => {
  const markdownContent = `
# Judul Utama

> Dengan perubahan ini, setiap kali pengguna mengklik tombol "Copy" pada blok kode, teks kode akan disalin ke clipboard dan tombol akan berubah warna menjadi hijau selama 2 detik. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

- Item 1
- Item 2
- Item 3

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
      <HeaderDetail date="Aug 2023" title="Eventeer" />

      <div className="relative w-full overflow-hidden">
        <CustomMarkdown content={markdownContent} />
      </div>
    </div>
  );
};

export default DetailActivity;

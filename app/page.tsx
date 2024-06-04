import ImageGallery from "@/components/pages/home/ImageGallery";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <section className="w-full">
          <h1 className="text-xl mb-10">hey, i&#39;m hengki🖐️</h1>
          <p>
            I&#39;m a frontend developer. Currently, I&#39;m still studying in
            my final semester at Brawijaya University. I really like the
            technology environment and have been studying this field for about 3
            years. I really enjoyed it🎉 i&#39;ts very exciting.
          </p>
        </section>

        <ImageGallery />

        <section className="w-full">
          <p>
            I create educational content for developers, teaching them about web
            development, JavaScript and TypeScript, React and Next.js, and more.
            This comes in all forms: blog posts, videos, tweets, conference
            talks, and workshops. You can watch some of my favorites below.
          </p>
        </section>

      </div>
    </>
  );
}

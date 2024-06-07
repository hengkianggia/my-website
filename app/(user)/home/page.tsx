import Title from "@/components/Title";
import ImageGallery from "@/components/pages/home/ImageGallery";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full gap-8">
        <Title
          desc="I&#39;m a frontend developer. Currently, I&#39;m still studying in
            my final semester at Brawijaya University. I really like the
            technology environment and have been studying this field for about 3
            years. I really enjoyed it🎉 i&#39;ts very exciting."
          title="hey, i&#39;m hengki🖐️"
        />

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

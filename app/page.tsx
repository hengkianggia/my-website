import Title from "@/components/Title";
import ImageGallery from "@/components/pages/home/ImageGallery";
import { compareDateWithNow } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

const skills = [
  { title: "Next.js", experience: "2022-03-22", icon: "logos:nextjs-icon" },
  { title: "React", experience: "2021-05-15", icon: "logos:react" },
  { title: "JavaScript", experience: "2021-01-10", icon: "logos:javascript" },
  {
    title: "TypeScript",
    experience: "2024-01-30",
    icon: "logos:typescript-icon",
  },
  { title: "Node.js", experience: "2023-09-18", icon: "logos:nodejs-icon" },
  {
    title: "Express.js",
    experience: "2024-03-05",
    icon: "simple-icons:express",
  },
  { title: "MongoDB", experience: "2023-10-14", icon: "logos:mongodb-icon" },
  { title: "Zod", experience: "2024-01-20", icon: "logos:zod" },
  { title: "Flutter", experience: "2023-12-07", icon: "logos:flutter" },
  { title: "Git", experience: "2022-03-01", icon: "logos:git-icon" },
  {
    title: "TailwindCSS",
    experience: "2021-08-03",
    icon: "logos:tailwindcss-icon",
  },
  {
    title: "Bootstrap",
    experience: "2022-04-03",
    icon: "logos:bootstrap",
  },
  { title: "Redux", experience: "2022-04-25", icon: "logos:redux" },
  { title: "Axios", experience: "2023-07-25", icon: "logos:axios" },
  {
    title: "Jest",
    experience: "2023-12-10",
    icon: "vscode-icons:file-type-jest",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full gap-8">
        <Title
          desc="I'm a frontend developer. Currently, I'm still studying in
            my final semester at Brawijaya University. I really like the
            technology environment and have been studying this field for about 3
            years. I really enjoyed it🎉 i'ts very exciting."
          title="hey, i'm hengki🖐️"
        />

        <ImageGallery />

        <section className="w-full">
          <h1 className="mb-4 text-xl max-md:mb-4">My coding skills 🎉</h1>
          <div className="w-full grid grid-cols-3 gap-2">
            {skills.map((skill) => {
              return (
                <div
                  key={skill.title}
                  className="flex flex-col items-center gap-2 px-4 py-5"
                >
                  <div className="flex gap-4 items-center">
                    <Icon
                      icon={skill.icon}
                      className={
                        skill.title == "Axios" ? `text-xl` : `text-4xl`
                      }
                    />
                    {skill.title == "Axios" ? (
                      ""
                    ) : (
                      <h1 className="text-xl">{skill.title}</h1>
                    )}
                  </div>
                  <p>{compareDateWithNow(skill.experience)} experience</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

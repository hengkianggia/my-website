import Title from "@/components/Title";
import ImageGallery from "@/components/pages/home/ImageGallery";
import { compareDateWithNow } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import skills from "@/lib/data/skills.json";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
          <div className="w-full flex items-center justify-center flex-wrap gap-2">
            {skills.map((skill) => {
              return (
                <>
                  <HoverCard>
                    <HoverCardTrigger className="no-underline cursor-pointer">
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
                    
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <h1 className="text-xl">{skill.title}</h1>
                      <p>{compareDateWithNow(skill.experience)} experience</p>
                    </HoverCardContent>
                  </HoverCard>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

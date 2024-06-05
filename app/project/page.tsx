import Title from "@/components/Title";
import ListProject from "@/components/pages/project/ListProject";
import project from "@/lib/data/listProject.json";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <Title
        title="my project"
        desc="I&#39;m a frontend developer. Currently, I&#39;m still studying in my
          final semester at Brawijaya University. I really like the technology
          environment and have been studying this field for about 3 years. I
          really enjoyed it🎉 i&#39;ts very exciting."
      />

      <div className="grid grid-cols-2 gap-3">
        {project.map((item) => (
          <ListProject
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.desc}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;

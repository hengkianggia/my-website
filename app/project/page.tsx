import Title from "@/components/Title";
import ListProject from "@/components/pages/project/ListProject";
import project from "@/lib/data/listProject.json";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <Title
        title="my project"
        desc="With my experience from learning until now. these are some examples of projects that I can show from other projects."
      />

      <div className="grid grid-cols-2 gap-3 max-md:gap-6 max-md:grid-cols-1">
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

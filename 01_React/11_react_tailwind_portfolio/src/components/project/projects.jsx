import { Briefcase } from "lucide-react";
import Section from "../section";
import Project from "./project";

const Projects = () => {
  const projectList = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta cum nulla possimus quibusdam adipisci obcaecati quis minima vel earum.",
      techUsed: ["React", "Tailwind"],
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta cum nulla possimus quibusdam adipisci obcaecati quis minima vel earum.",
      techUsed: ["React", "Tailwind"],
    },
  ];

  return (
    <>
      <Section icon={<Briefcase className="w-5" />} sectionTitle="Projects">
        {projectList.map((item) => <Project key={item} title={item.title} description={item.description} techUsed={item.techUsed} />)}
      </Section>
    </>
  );
};

export default Projects;

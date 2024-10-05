import { User } from "lucide-react";
import Section from "./section";

const AboutMe = () => {
  return (
    <>
    <div className="mt-8">
    <Section icon={<User className="w-5" />} sectionTitle="About Me">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque possimus eligendi enim reiciendis aliquam nihil molestias! Optio maiores accusantium praesentium.</p>
    </Section> 
    </div>
    </>
  );
};

export default AboutMe

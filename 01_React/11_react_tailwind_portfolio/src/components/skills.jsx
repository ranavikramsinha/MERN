import { Code } from 'lucide-react';
import Section from "./section";
import Pill from './pill';

const Skills = () => {

    const skillTitles = ["Javascript", "React", "Tailwind", "Git", "GitHub", "HTML", "CSS"];
    
    return (
        <>
        <Section icon={<Code className="w-5" />} sectionTitle="Skills">
            <span className="flex flex-wrap gap-2">{skillTitles.map(title => <Pill key={title} title={title} />)}</span>
        </Section>
        </>
    )
}

export default Skills
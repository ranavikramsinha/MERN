import { Award } from 'lucide-react';
import Section from "./section";
import List from './list';

const Extra = () => {

    const extracurricular = ["Cooking", "Singing", "Photography"];

    return (
        <>
        <Section icon={<Award className="w-5" />} sectionTitle="Extracurricular Activities">
            <List items={extracurricular}></List>
        </Section>
        </>
    )
}

export default Extra
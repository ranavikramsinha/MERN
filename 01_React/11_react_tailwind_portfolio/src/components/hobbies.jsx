import { Heart } from 'lucide-react';
import Section from "./section";
import List from "./list";

const Hobbies = () => {

    const hobbies = ["Cooking", "Singing", "Photography"];

    return (
        <>
        <Section icon={<Heart className="w-5" />} sectionTitle="Hobbies & Interests">
            <List items={hobbies}></List>
        </Section>
        </>
    )
}

export default Hobbies
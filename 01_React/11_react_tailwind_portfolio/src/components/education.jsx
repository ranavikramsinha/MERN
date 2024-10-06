import { BookOpen } from 'lucide-react';
import Section from "./section";
import EducationList from './educationList';

const Education = () => {

    const educationList = [
        {
            title: "Bachelor of Computer Applications",
            college: "DN College",
            year: "2021 - 2024",
        },
    ]

    return (
        <>
        <Section icon={<BookOpen className="w-5" />} sectionTitle="Education">
            {educationList.map((item) => <EducationList key={item} title={item.title} college={item.college} year={item.year} />)}
        </Section>
        </>
    )
}

export default Education
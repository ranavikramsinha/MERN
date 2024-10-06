import { Globe } from 'lucide-react';
import Section from "./section";
import { Github } from 'lucide-react';
import SocialMedia from "./socialMedia";
import { Twitter } from 'lucide-react';

const Contact = () => {

    const socialLinks = [
        {
            url: "https://github.com/ranavikramsinha",
            icon: <Github />,
            title: "Github",
        },
        {
            url: "https://x.com/ranavikramsinha",
            icon: <Twitter />,
            title: "Twitter",
        },
    ]

    return (
        <>
        <div className='pb-1'>
        <Section icon={<Globe className="w-5" />} sectionTitle="Contact & Social Media">
            <div className="text-gray-700 mb-5">
                <div>Email: ranavikramsinha57@.gmail.com</div>
                <div>Phone: 1234567890</div>
            </div>
            {socialLinks.map((item) => <SocialMedia key={item} url={item.url} icon={item.icon} title={item.title} />)}
        </Section>
        </div>
        </>
    )
}

export default Contact
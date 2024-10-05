import { User } from "lucide-react";

const Section = ({icon, sectionTitle, children}) => {
  return (
    <>
      <div className="ml-5 mb-12">
        <div className="flex my-3 items-center mb-5">
            {icon}
        <div className="font-bold text-xl mx-1">{sectionTitle}</div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Section;

import TechPill from "./techPill"

const Project = ({title, description, techUsed}) => {
    return (
        <>
        <div className="bg-blue-50 max-w-4xl mx-auto rounded-xl shadow-lg p-6 mb-3">
            <div className="font-bold text-lg mb-2">{title}</div>
            <div className="text-gray-700 font-semibold text-sm mb-4">{description}</div>
            <div><span className="flex flex-wrap gap-2">{techUsed.map((item) => <TechPill key={item} title={item} />)}</span></div>
        </div>
        </>
    )
}

export default Project
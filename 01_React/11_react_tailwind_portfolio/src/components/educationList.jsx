const EducationList = ({title, college, year}) => {

    return (
        <>
        <div className="text-base font-bold">{title}</div>
        <div className="text-md font-normal text-gray-700 mb-3">{college}, {year}</div>
        </>
    )

}

export default EducationList
const List = ({items}) => {
    return (
        <>
        <ul className="list-disc list-inside font-semibold text-gray-700">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
        </>
    )
}

export default List
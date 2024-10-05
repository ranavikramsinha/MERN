const List = ({items}) => {
    return (
        <>
        <ul className="list-disc list-inside font-semibold">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
        </>
    )
}

export default List
const List = ({lists}) => {

  if(!lists || lists.length === 0) {
    return (
      <h2>No Users are here.</h2>
    )
  }

  return (
    <>
      {!lists || lists.length === 0 ? <h2>No Users are here.</h2> : <h2>List of Users are here.</h2>}
      {lists && lists.length > 0 && <ol className="list-decimal list-inside">

        {/* <li>Aryan</li>
        <li>Rana</li>
        <li>Rudraksh</li> */}

        {/* {[<li>Aryan</li>, <li>Rana</li>, <li>Rudraksh</li>]} */}
        
        {/* Using map (preferable) */}
        {lists.map((item) => (<li key={item}>{item}</li>))}

      </ol>}
    </>
  );
};

export default List;

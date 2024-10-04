const List = ({lists}) => {

  return (
    <>
      <ol className="list-decimal list-inside">

        {/* <li>Aryan</li>
        <li>Rana</li>
        <li>Rudraksh</li> */}

        {/* {[<li>Aryan</li>, <li>Rana</li>, <li>Rudraksh</li>]} */}
        
        {/* Using map (preferable) */}
        {lists.map((item) => (<li key={item}>{item}</li>))}

      </ol>
    </>
  );
};

export default List;



function PostsList() {
    console.log("PostsList component");
    const items = ["An item", "A second item", "A third item", "A fourth item", "And a fifth one"];
    return (
        <ul className="list-group">
            {items.map((item, index) => { return <li key={index} className="list-group-item" >{index}: {item}</li> })}
        </ul>
    );
}

export default PostsList;
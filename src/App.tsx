import { useState } from "react"
import PostsList from "./PostsList"

function App() {
  const [displayAlert, setDisplayAlert] = useState(false);
  const items = ["Item 1", "Item 2", "Item 3"]

  const onItemSelected = (index: number) => {
    console.log("App - selected index ", index)
    if (index == items.length - 1) {
      setDisplayAlert(true);
    }
  }

  return (
    <>
      <div style={{
        backgroundColor: "lightgray",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px"
      }}>
        <h1>Title</h1>
        <PostsList title="My Items" items={items} onItemSelected={onItemSelected} >
        </PostsList>
      </div >
      {displayAlert &&
        <div className="alert alert-primary alert-dismissible" role="alert">
          A simple primary alert—check it out!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => { setDisplayAlert(false) }}>
          </button>
        </div>}

    </>

  )
}

function App2() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "yellow",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        backgroundColor: "red",
        width: "100px",
        height: "100%",
        margin: "10px"
      }}>
      </div>
      <div style={{
        backgroundColor: "blue",
        width: "0",
        height: "100%",
        margin: "10px",
        flex: 1
      }}>
      </div>
      <div style={{
        backgroundColor: "green",
        width: "0",
        height: "100%",
        margin: "10px",
        flex: 2

      }}>
      </div>
    </div>
  )
}
export default App2

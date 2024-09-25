import { useState } from "react"


const App = () => {

 const [username,setUsername] = useState("ha")



  const info = () =>{
    console.log("Hellow")

  }

  const takeInfo = () =>{
    console.log("hii")
  }
  return (
    <div>
<h1>{info()}</h1>
<button onClick={takeInfo()} > hey </button>
<h1>{username}</h1>
      <button onClick={()=> setUsername("pop")}>Help</button>
    </div>
  )
}

export default App
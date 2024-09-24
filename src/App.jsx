

const App = () => {
  let users =[
    {
      name: "john doe",
      age: 35
    },
    {
      name: "siddhant",
      age: 45

    }
  ]
  let hah = users.map((u,i)=> <h1 key={i}>{u.name}</h1> )
 
  return (
    <div>

        {hah}
        
    </div>
  )
}

export default App
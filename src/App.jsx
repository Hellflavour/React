import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";


const App = () => {
  let data ="data from server";
  let subject = ["Math"," ","English"]
  let profile = {
    name: "John doe",
    age: 25,
    email: "johndoe@doe.com",
  }
  return (
    <div>
     <Home/>
     <Nav/>
     <About/>
     <h1>{data}</h1>
     <h1>{subject}</h1>
     <h1>{profile.name}</h1>
     <h1>{profile.age}</h1>
     <h1>{profile.email}</h1>

    </div>
  );
};

export default App
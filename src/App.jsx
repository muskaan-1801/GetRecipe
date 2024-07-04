//import Input from "./components/Input";
import { useState , useEffect} from "react";
import Card from "./components/Card";
import "./App.css"

const App = () =>{

  const APP_ID = 'dc34792b';
  const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21';

  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("sushi");
  const [recipes,setRecipes] = useState([]);
  useEffect(() =>{
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then((res)=>res.json())
    .then((data)=>setRecipes(data.hits));
  },[query]) //dependency array

  const submitHandler = ()=>{
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <div className="search-form">
        <input type="text" placeholder="Enter Your Name"
        className="search-bar" 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}/>
        <button type="button"
        className="search-button" 
        onClick={submitHandler}>
          Submit
        </button>
      </div>

      <div className="recipes">
        {recipes.map((item) => {
          console.log(item); 
          return <Card recipe={item}/>; 
        })}
      </div>
      
    </div>
  )

}

export default App;
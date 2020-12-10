import axios from 'axios'
import {useState, useEffect} from 'react'
import './App.css';
export const UserList =()=>{
const [listOfUser, setListOfUser] = useState([])
useEffect(()=>(
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res =>setListOfUser(res.data)
    )))
return (
    <div className="App-header">
    {listOfUser.map (el => (
      
       <h1 id >{el.name}</h1>
      
      
    ))} 
</div>
)
}

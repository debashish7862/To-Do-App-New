
import{useState}from 'react' 
export default function User2() {


const[user,setUser]=useState([])

const getUser=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>{
    console.log(data)
    setUser(data)})
}









  return (
 <div>
    <button onClick={getUser}>GET USERS</button>
    <div>
        {
            user.map((ele)=>{
            return <div>
            <p>{ele.name}</p>
            </div>
            })
        }
    </div>

 </div>
  )
}


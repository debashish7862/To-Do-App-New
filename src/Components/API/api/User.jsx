import{useState} from 'react'

export default function User(props) {


const[user,setUser]=useState([])
















const getUsers=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        setUser(data)
    })
}


const deleteUsers=()=>{
    setUser([])

}














  return (
    <div style={{padding:"30px"}}>
   <h2>User Information</h2>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dignissimos nemo debitis aliquam rerum asperiores nisi nam autem placeat. Qui provident tempore delectus illo voluptate accusantium distinctio eveniet est, optio modi accusamus tempora quidem laboriosam repudiandae necessitatibus animi obcaecati fugit, ipsum, voluptatem neque at. Illum suscipit eum aliquam minima amet consectetur ullam hic debitis sit repellat officiis accusantium laborum, asperiores impedit a omnis.</p>
   <button onClick ={getUsers}>Get Users</button>
   <button onClick={deleteUsers}>Delet Users</button>
  {
    user.length>0 &&  <div>
    <table cellPadding={10} style={{width:"100"}}>
        <thead>
            <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
            </tr>

        </thead>
        <tbody>
            {
                user.map((ele)=>{
                    return <tr>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.address.city}</td>
                    </tr>
                })
            }


        </tbody>
    </table>
   </div>
  }
   </div>
  )
}


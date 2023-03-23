import {useEffect,useState} from 'react'

export default function Useeffects() {


    const[state,setState]=useState("Geekster")

     useEffect(()=>{
        console.log("load");
       
       <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/hrfuw6izobbgonnwjdzq" alt="" />
     },[])


    









  return (
   <div>
    <h2>Use Effects{state}</h2>
    <button onClick={()=>{setState("Debashish")}}>Click me</button>
   </div>
  )
}

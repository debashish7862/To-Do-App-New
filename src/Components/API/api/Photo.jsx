import{useState} from 'react'


export default function Photo() {


    const[photos,setPhotos]=useState([])





const getPhotos=()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data) // array
        setPhotos(data)
    })
}





const deletePhotos=()=>{
    setPhotos([])
}












    //UI
  return (
    <div>
        
        <button onClick={getPhotos}>GET PHOTOS</button>
        <button onClick={deletePhotos}>Delete Photos</button>
       {
        photos.length>0 && <div>
            {
            photos.map((ele)=>{
                return <div>
                   <img src={ele.thumbnailUrl} alt="img" />
                   <p>{ele.title}</p>
                   <p>{ele.id}</p>


                    </div>

            })





            }


            </div>
       }

    </div>
        
  )
}



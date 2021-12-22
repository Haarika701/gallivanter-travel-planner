import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import ThingsToDoView from "./ThingsToDoView"
export default function ThingsToRender({city}){
let {destinations} = useParams()
    const[allThings,setAllThings] = useState([])
    
  useEffect(() => {
     fetch(`/places/${destinations}`)
     .then(res => res.json())
     .then((data) => {  
         setAllThings(data)
         console.log(data)
     })
  },[])

  
    return (
        
        <div className="things-render">
        <ThingsToDoView allThings={allThings}/>
        </div>
    )
}
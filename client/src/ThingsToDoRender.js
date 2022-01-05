import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import ThingsToDoView from "./ThingsToDoView"
import CategoryThings from "./CategoryThings"
import React from "react";
export default function ThingsToRender({user}){
let {destinations} = useParams()
    const[allThings,setAllThings] = useState([])
    const [sortBy, setSortBy] = useState("All");
  useEffect(() => {
     fetch(`/places/${destinations}`)
     .then(res => res.json())
     .then((data) => {  
         setAllThings(data)
         console.log(data)
     })
  },[])
  const categoriesToDisplay = allThings.filter(
    (things) => things.category === sortBy || sortBy === "All"
  );
  
    return (
        
        <div className="things-render">
        <CategoryThings sortBy={sortBy} onChangeSortBy={setSortBy}/>
        <ThingsToDoView allThings={categoriesToDisplay} user = {user} />
       
        </div>
    )
}
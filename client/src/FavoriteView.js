import {useEffect,useState} from "react"
import FavoriteContainer from "./FavoriteContainer"
import React from "react";

export default function FavoriteView(){

   const [viewFavorites,setViewFavorites] = useState([])

    useEffect(() =>{
        fetch("/favoritethings")
        .then((res) => res.json())
        .then((data) => {
            setViewFavorites(data)
            console.log(data)
        })
    },[])
  
    return (
        <div>
            View your favorites here!!
            <FavoriteContainer viewFavorites = {viewFavorites}/>
              
        </div>
    )
}
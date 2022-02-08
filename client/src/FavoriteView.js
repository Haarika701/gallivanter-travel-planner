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
        <div className="favorite-view">
            <h2>Your Favorite Places For Your Next Trip!</h2>
            <FavoriteContainer viewFavorites = {viewFavorites}/>
        </div>
    )
}
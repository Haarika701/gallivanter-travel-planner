import FavoriteCard from "./FavoriteCard"
import React from "react";
export default function FavoriteContainer({viewFavorites}){

    const displayFavorite = viewFavorites.map((favorite) => {return <FavoriteCard key = {favorite.id} favorite={favorite} />})
    return(
        <div>
       {displayFavorite}
        </div>
    )
}
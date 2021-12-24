import FavoriteCard from "./FavoriteCard"
export default function FavoriteContainer({viewFavorites}){

    const displayFavorite = viewFavorites.map((favorite) => {return <FavoriteCard key = {favorite.id} favorite={favorite} />})
    return(
        <div>
       {displayFavorite}
        </div>
    )
}
import {Card} from "@mui/material"
export default function FavoriteCard({favorite}){
    return (
        <div>
    <Card sx={{ maxWidth: 350 }} >
         <img src = {favorite.things_to_do.image} width="200px" height="200px"/>
        <h3>Name:{favorite.things_to_do.name}</h3>
        <h3>Description:{favorite.things_to_do.description}</h3>
        <h3>Category:{favorite.things_to_do.category}</h3>
        <h3>Expense:{favorite.things_to_do.expense}</h3>
        <h3>Rating:{favorite.things_to_do.rating}</h3>
    </Card>
        </div>
    )
}
import ThingsToDoCard from "./ThingsToDoCard"
import {Router,Route} from "react-router-dom"

export default function ThingsToDoView({allThings,user }){

    const displayThings = allThings.map((things => {return <ThingsToDoCard key = {things.id} things = {things} user = {user}/>}))
    return (
        <div>
             
           {displayThings}
        </div>
    )
}
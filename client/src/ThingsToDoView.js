import ThingsToDoCard from "./ThingsToDoCard"
import React from "react";
export default function ThingsToDoView({allThings,user}){

    const displayThings = allThings.map((things => {return <ThingsToDoCard key = {things.id} things = {things} user = {user} />}))
    return (
        <div className="things-view">
             
           {displayThings}
        </div>
    )
}
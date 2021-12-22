import { Button, Card } from "@mui/material"
import { useState } from "react"
export default function ThingsToDoCard({things:{description,category,expense,rating,image,name}}){

  const[showButton,setShowButton] = useState(true)

  function handleClick(){
    setShowButton((showButton) => !showButton)
  }

  return(
        <div>
         <Card sx={{ maxWidth: 338 }} >
          <img src = {image} alt = "things" width="338px" height="338px"/>
          <h3>{name}</h3>
          <p>{description}</p>
          <h4>Category:{category}</h4><br/>
          <h4>Expense:{expense}</h4>
          <h4>Ratings(out of 5) {rating}</h4>
          {
            showButton ? <Button onClick = {handleClick}>♡</Button> : <Button onClick={handleClick}>❤️</Button>
          }
         
          
          </Card>
        </div>
    )
}


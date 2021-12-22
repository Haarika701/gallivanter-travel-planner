import { Button, Card,Typography,CardContent } from "@mui/material"
import { useState } from "react"
export default function ThingsToDoCard({things:{description,category,expense,rating,image,name}}){

  const[showButton,setShowButton] = useState(true)

  function handleClick(){
    setShowButton((showButton) => !showButton)
  }

  return(
        <div className="things-card">
         <Card sx={{ maxWidth: 350 }} >
          <img src = {image} alt = "things" width="350px" height="250px"/>
          <CardContent>
          <Typography gutterBottom variant="h4">
          {name}
          </Typography>
          <Typography variant="body3" color="text.secondary">
          {description}
          </Typography> <br/>
         <br/>
          <Typography gutterBottom variant="body3">
          Category:{category}
          </Typography><br/>
          <Typography gutterBottom variant="body3">
          Expense:{expense}
          </Typography><br/>
          <Typography gutterBottom variant="body3">
          Ratings(out of 5) {rating}
          </Typography>
          </CardContent>
          {
            showButton ? <Button onClick = {handleClick}>♡</Button> : <Button onClick={handleClick}>❤️</Button>
          }
          </Card>
        </div>
    )
}


export default function ThingsToDoCard({things:{description,category,expense,rating,image,name}}){
    return (
        <div>
          <h3>{name}</h3>
          <img src = {image} alt = "things" width="200px"/>
          
          <p>{description}</p>
          <h4>Category:{category}</h4>
          <h4>Expense:{expense}</h4>
          <h4>Ratings(out of 5){rating}</h4>
        </div>
    )
}


import { useState } from "react"

 function DestinationCard({destinations:{city,state,country}}){
    
    // const [showThings,setShowThings] = useState([])
    
    return (
        <div>
        <h3>
            {city}
        </h3>
        <h5>
           {state},{country}
        </h5>
         <br/>
        </div>
    )
}

export default DestinationCard
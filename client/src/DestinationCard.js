
 function DestinationCard({destinations:{city,state,country}}){
    
    
    return (
        <div>
        <h3>
            City:{city}
        </h3>
        <h3>
            State:{state}
        </h3>
  
        <h3>
            Country:{country}
        </h3>
         
         <br/>
        </div>
    )
}

export default DestinationCard
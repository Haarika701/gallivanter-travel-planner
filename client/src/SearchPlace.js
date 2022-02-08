import React from "react";
export default function SearchPlace({search,setSearch}){
    return (
        
         <div className = "search">
              <form className="searchbar" >
              <input  
              type="text"
              placeholder="Search..."
              value={search}
              role="searchbox" 
              onChange={(e) => setSearch(e.target.value)}
            />
       
               </form>
        </div>
    )
}


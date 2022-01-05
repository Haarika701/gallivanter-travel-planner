import React from "react";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
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

{/* <input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required="" name="q" class="fhEMT _G B- z _J Cj R0" placeholder="Where to?" title="Search" role="searchbox" aria-label="Search" aria-controls="typeahead_results" aria-autocomplete="list" value=""></input> */}
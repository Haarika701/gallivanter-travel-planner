import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function CategoryThings({ sortBy,
    onChangeSortBy}){

    function handleChangeSortBy(event) {
        onChangeSortBy(event.target.value);
    }
    return (
        <div className="category">
           <label> Category</label> 
            <select
                name="category"
                placeholder="Sort By"
                onChange={handleChangeSortBy}
                value={sortBy}
              >
               <ArrowDropDownIcon></ArrowDropDownIcon>
                <option value="All">All</option>
                <option value="Attraction">Attraction</option>
                <option value="Activity">Activity</option>
               
              </select>
        </div>
    )
}
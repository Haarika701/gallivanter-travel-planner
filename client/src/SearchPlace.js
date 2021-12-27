export default function SearchPlace({search,setSearch}){
    return (
        
            <div className = "search">
         <form className="searchbar" >
          <div className="ui input">
            <label>Search City</label>
            <input
              type="text"
              placeholder="search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
        </div>
    )
}
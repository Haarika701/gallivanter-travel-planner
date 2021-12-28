export default function CategoryThings({ sortBy,
    onChangeSortBy}){

    function handleChangeSortBy(event) {
        onChangeSortBy(event.target.value);
    }
    return (
        <div>
            <label>Category</label>
            <select
                name="category"
                onChange={handleChangeSortBy}
                value={sortBy}
              >
                <option value="All">All</option>
                <option value="Attraction">Attraction</option>
                <option value="Activity">Activity</option>
               
              </select>
        </div>
    )
}
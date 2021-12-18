


export default function Header({user, setUser}){

    function handleLogout(){
        console.log("Logging out")
        fetch("/logout",{
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(setUser(null))
    }
return(
    <div>
            <h2>Gallivanter : A Travel Planner</h2>
            {user ?   <button onClick = {handleLogout}>Logout!</button> : null}
         
           
    </div>
)
}
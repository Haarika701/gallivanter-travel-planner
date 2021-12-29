// import { useState } from "react"
export default function UserAccount({user,city,username,image,id}){

    
// const [updateName,setUpdatedName] = useState(username)
// const[updateCity,setUpdateCity] = useState(city)
// const [updateImg,setUpdateImg] = useState(image)
    function handleDelete(){
        fetch("/users",{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
 
            },
            
        }).then((res)=> (res.json()))
            .then(() => {
                console.log("deleted")
            })
         }

        //  function handleEdit(){
        //     fetch(`/users/${id}`,{
        //         method:"PATCH",
        //         headers:{
        //             "Content-Type":"application/json",
        //         },
        //         body: JSON.stringify({username:updateName,city:updateCity,image:updateImg})
        //     })
        //     .then((resp) =>resp.json())
        //     .then((data) => console.log(data))
        //  }
    

    return (
        <div>
        <img src={user.image} alt="image"/>
        <h3> Username {user.username}</h3> 
        <h3> City </h3>
       {/* <input {user.city}/> */}
        <h3>Email {user.email}</h3>
        <button onClick={handleDelete}>Delete Account</button>
        {/* <button onClick={handleEdit}>Edit Info</button> */}
        </div>
    )
}
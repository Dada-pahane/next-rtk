"use client"

import { useDispatch, useSelector } from "react-redux"
import { RemoveUser } from "../redux/slice";

export default function DisplayUser() {


    //connst 
    const AllusersData = useSelector((data) => data.usersData.users)
   
   const dispatch=useDispatch();


 
    return (
        <div style={{ height: "200px", padding: "10px", border: "1px solid skyblue", overflowY: "auto", marginTop: "50px" }}>
            <h3>User List</h3>
            {
                AllusersData.map((item) => (

    
                    <div key={item.id} style={{backgroundColor:"skyblue",height:"25px",width:"250px",textAlign:"left",fontSize:"22px",fontFamily:"math",padding:"5px",marginTop:"10px",borderRadius:"5px"}}>
                           
                           <span>  {item.name} </span> 
                           <span style={{marginLeft:"50px"}}> 
                            <button  onClick={()=> dispatch(RemoveUser(item.id))} >Remove</button></span>

                    </div>
                ))
            }
        </div>
    )
}
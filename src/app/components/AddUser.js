'use client'
import { useState } from "react"
import { AddUsers } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";



export default function AddUser()
{


    //Local Variables
const[name,SetName]=useState("");

const dispatch=useDispatch();





//functions
const userDispatch=()=>{
    dispatch(AddUsers(name));
}

    return (
        <div className="add-user" style={{height:"200px",padding:"10px",border:"1px solid orange"}}>
            <h3>Add User </h3>
            <input 
            value={name}
            onChange={(e)=>SetName(e.target.value)}
             style={{height:"35px",width:"250px",display:"block"}} type="text" placeholder="Enter User " />
            <button 
            onClick={userDispatch}
            style={{height:"35px",width:"250px",display:"block",backgroundColor:"lightblue",marginTop:"20px"}} >Add User</button>

            <Link href={"/removeuser"}>Remove Usre</Link>
            <br></br>
            <Link href={"/todilist"}>goto to page</Link>
            <br></br>
            <Link href={"/apiusers"}>goto to User List  page</Link>
        </div>
    )


}
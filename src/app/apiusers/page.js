"use client"

import { useDispatch, useSelector } from "react-redux"
import { fetchApiUserFromApi } from "../redux/slice";
import { useEffect } from "react";

export default function UserListPage() {

    const dispatch = useDispatch();

    const AllUserData = useSelector((data) => (data.usersData.ApiUsers));


    useEffect(()=>{

        //Lod user Api Data
        dispatch(fetchApiUserFromApi())
    },[])

    return (
        <div>
           
           
            <h5>All  User List From api</h5>
            {

                AllUserData.length > 0 ?

                    AllUserData.map((item) => (
                        <h6 key={item.id}>{item.name}</h6>
                     
                    ))

                    : null

            }
        </div>
    )
}
"use client"

import { useDispatch, useSelector } from "react-redux"
import { RemoveUser } from "../redux/slice";

export default function RemoveUserFromList() {

    const users = useSelector((data) => data.usersData.users);
    console.log(users)

    const dispatch = useDispatch();


    return (
        <div>
            <h1> Remove User Page</h1>

            {
                users.map((item) => (
                    <div>
                        <span>
                            {item.name}
                        </span>
                        <br></br>
                        <button style={{ color: "blue" }} onClick={() => dispatch(RemoveUser(item.id))}> Remove Use</button>

                    </div>
                ))
            }
        </div>
    )
}
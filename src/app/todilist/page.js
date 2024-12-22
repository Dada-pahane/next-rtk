"use client"

import { useEffect, useState } from "react"
import { addToDos } from "../redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ToDoListPage() {

    const [todo, SetTodo] = useState("");

    const dispach = useDispatch();

    const toDoData = useSelector((data) => (data.todosData.todos))

    return (
        <div>
            <h1> To Do List Page</h1>

            <input value={todo} type="text" onChange={(e) => SetTodo(e.target.value)} placeholder="add new to do task" />

            <br></br> <br></br>
            <button onClick={() => dispach(addToDos(todo))}>Add ToDo</button>
            <h5>To Do List</h5>
            {
                toDoData.map((item) => (
                    <h6 key={item.id}>{item.name}</h6>
                ))
            }

        </div>
    )
}
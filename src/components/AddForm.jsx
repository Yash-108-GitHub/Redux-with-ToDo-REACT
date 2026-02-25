import {useState} from "react";
import {useDispatch } from "react-redux";
import {addTodo} from "../features/todo/todoSlice";


export default function AddForm(){
    const [task, setTask] = useState("");
    const dispatch = useDispatch(); //storing useDispatch in variable

    const submitHandler = (evt) =>{
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task)); //using above variable to use reducer which add task by useDispatch.
        setTask("");
    };

    return(
        <>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => setTask(e.target.value)}></input>
                                  {/* event object (e) */}
                <button>Add Task</button>
            </form>
        </>
    );
}
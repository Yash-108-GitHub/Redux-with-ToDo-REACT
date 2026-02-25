import {useSelector} from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import {marksAsDone} from "../features/todo/todoSlice";


export default function Todo(){
    const todos = useSelector ((state) =>state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const handledeleteTodo = (id)=>{
        dispatch(deleteTodo(id));
    };

    const handleMarkDone = (id) =>{
        dispatch(marksAsDone(id));
    };

    return(
        <>
            <AddForm/>

            <h3>Todos</h3>
            <ul>
                {
                    todos.map((todo) =>(
                        <li key={todo.id} style={{textDecoration: todo.isDone? "line-through" : "none"}}>
                            {todo.task}
                            <button type="submit" onClick={ () => handledeleteTodo(todo.id)}>delete</button>
                            <button type="submit" onClick={() => handleMarkDone(todo.id)}>Mark as Done</button>
                        </li>
                        //✅ With a key: Identify each element uniquely of list.
                    ))
                }
            </ul>
        </>
    );
}
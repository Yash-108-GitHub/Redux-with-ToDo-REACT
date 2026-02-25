import { createSlice, nanoid } from '@reduxjs/toolkit';

//initial state of the state variabel
const initialState = {
    todos: [{id: "abc", task: "demo-task", isDone: false}],
};

//creating slice by using createSlice
export const todoSlice = createSlice({ //we are exporting this because we have to use this in other files that our moto
    //options
    name:'todo', //giving name to the splice
    initialState, //defined above
    reducers:{ //state, action
        //multiple fn

        addTodo:(state , action) =>{
            //state -> current state object haveing walk, run , code task.
            //action comes from dispature.
            const newTodo = {
                id: nanoid, //generates random id
                task: action.payload,
                isDone: false
            };
            state.todos.push(newTodo);//accessing todos state variable and pushing newTodo into it.
        },

        deleteTodo: (state , action) =>{
            //state -> current state object haveing walk, run , code task.
            //action comes from dispature
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        marksAsDone: (state , action) =>{
           //state -> current state object haveing walk, run , code task.
           //action comes from dispature
            state.todos = state.todos.map((todo) =>{
                if(todo.id === action.payload){
                    //todo.id ->It’s simply the unique identifier (ID) of each todo item stored in your Redux state.
                    //action.payload → The data you sent with the action
                    return { ...todo, isDone: true };
                       //todo.isDone = true returns a boolean (true), not the todo object.
                       //so hence we used spreading.
                }
                return todo;
            });
        },

    }
});

export const {addTodo, deleteTodo, marksAsDone} = todoSlice.actions;
 //toolkit auto generates actions for above reducer functions.
export default todoSlice.reducer;//to export the individual reducers.

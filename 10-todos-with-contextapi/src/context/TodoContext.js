import { createContext, useContext } from "react";
// created the context
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false,
        },
    ],
    // addTodo function for inserting todo
    addTodo: (todo) => {},
    //updateTodo function for updating the todo
    updateTodo: (id, todo) => {},
    // deleteTodo function for deleting the todo
    deleteTodo: (id) => {},
    // scratching off the todo when the todo is completed.
    toggleComplete: (id) => {},
});
// exporting useTodo so that we can import it in other components and make use of it
export const useTodo = () => {
    return useContext(TodoContext);
}
// The provider which can be injected in the parent ie App.js where the value is passed.
export const TodoProvider = TodoContext.Provider


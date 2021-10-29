import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    books: [
        {
            id: 1,
            title: "book1",
            author: "mangeshi",
            genre: "patil",
        },
        {
            id: 2,
            title: "book2",
            author: "mayur",
            genre: "patil",
        },
        {
            id: 3,
            title: "book3",
            author: "vivek",
            genre: "patil",
        },
    ],
};

// create context
export const GlobalContext = createContext(initialState);
// console.log(GlobalContext)

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeBook=(id)=>{
        dispatch({
            type:'REMOVE_BOOK',
            payload:id
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                books: state.books,
                removeBook
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

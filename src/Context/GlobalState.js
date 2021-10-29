import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { v4 as uuid } from "uuid";

//initial state
const initialState = {
    books: [
        {
            id: uuid(),
            title: "book1",
            author: "mangeshi",
            genre: "patil",
        },
        {
            id: uuid(),
            title: "book2",
            author: "mayur",
            genre: "patil",
        },
        {
            id: uuid(),
            title: "book3",
            author: "vivek",
            genre: "patil",
        },
    ],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const removeBook = (id) => {
        dispatch({
            type: "REMOVE_BOOK",
            payload: id,
        });
    };

    const AddBook = (books) => {
        dispatch({
            type: "ADD_BOOK",
            payload: books,
        });
    };

    const editBook = (books) => {
        dispatch({
            type: "EDIT_BOOK",
            payload: books,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                books: state.books,
                removeBook,
                AddBook,
                editBook,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

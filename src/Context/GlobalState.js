import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { v4 as uuid } from "uuid";

//initial state
const initialState = {
    books: [
        {
            id: uuid(),
            title: "The Monk Who Sold His Ferrari",
            author: "Robin Sharma",
            genre: "Fiction",
        },
        {
            id: uuid(),
            title: "The Theory Of Everything",
            author: "Stephen W Hawking",
            genre: "Engineering and Technology",
        },
        {
            id: uuid(),
            title: "Rich Dad Poor Dad",
            author: "Robert T Kiyosaki",
            genre: "Personal Finanace",
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

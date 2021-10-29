const AppReducer = (state, action) => {
    switch (action.type) {
        case "REMOVE_BOOK":
            return {
                books: state.books.filter((book) => {
                    return book.id !== action.payload;
                }),
            };

        case "ADD_BOOK":
            return {
                books: [action.payload, ...state.books],
            };

        case "EDIT_BOOK":
            const updatedBook = action.payload;

            const updateBook = state.books.map((book) => {
                if (book.id === updatedBook.id) {
                    return updatedBook;
                }
                return book;
            });

            return {
                books: updateBook,
            };

        default:
            return state;
    }
};

export default AppReducer;

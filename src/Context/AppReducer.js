const AppReducer=(state, action) => {
    switch (action.type) {
        case 'REMOVE_BOOK' :
            return {
                books: state.books.filter((book) => {
                    return book.id !== action.payload;
                }),
            };

        default:
            return state;
    }
};

export default AppReducer
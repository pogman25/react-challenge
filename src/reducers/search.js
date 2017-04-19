
export const search = (state='', action) => {
    switch (action.type) {
        case 'SEARCH_PEOPLE':
            return action.payload;
        default:
            return state;
    }
};

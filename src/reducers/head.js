const init = {
    sort: '',
    by: false
};

export const sort = (state=init, action) => {
    switch (action.type) {
        case 'SORT':
            return {sort:action.payload.sort, by:!action.payload.by};
        default:
            return state;
    }
};

export const sortByPicture = (state='', action) => {
    switch (action.type) {
        case 'SORT_BY_PICTURE':
            return action.payload;
        default:
            return state;
    }
};

export const search = (state='', action) => {
    switch (action.type) {
        case 'SEARCH_PEOPLE':
            return action.payload;
        default:
            return state;
    }
};
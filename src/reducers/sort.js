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
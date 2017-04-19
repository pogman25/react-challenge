
export const single = (state=0, action) => {
    switch (action.type) {
        case 'SET_ID':
            return action.payload;
        default:
            return state;
    }
};

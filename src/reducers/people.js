const initialState = {
    people: [],
    fetching: false,
    error: ''
};


export const people = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PEOPLE_REQUEST':
            return { ...state, fetching: true };
        case 'GET_PEOPLE_SUCCESS':
            return { ...state, people: action.payload, fetching:false };
        case 'GET_PEOPLE_ERROR':
            return { ...state, fetching: false, error: action.payload };
        default:
            return state;
    }
};
import { combineReducers } from 'redux';
import { sort, sortByPicture, search } from './head';
import { people, single } from './people';

const reducer = combineReducers({
    people,
    search,
    sort,
    single,
    sortByPicture
});

export default reducer;
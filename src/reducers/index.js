import { combineReducers } from 'redux';
import { sort, sortByPicture } from './sort';
import { search } from './search';
import { people } from './people';
import { single } from './single';

const reducer = combineReducers({
    people,
    search,
    sort,
    single,
    sortByPicture
});

export default reducer;
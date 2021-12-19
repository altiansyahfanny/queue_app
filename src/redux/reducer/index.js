import { combineReducers } from 'redux';
import { globalReducer } from './global'
import { homeReducer } from './home'
import { queueReducer } from './queue'
import { registerReducer, photoReducer } from './auth';

const reducer = combineReducers({
    registerReducer,
    globalReducer,
    photoReducer,
    homeReducer,
    queueReducer
})

export default reducer;
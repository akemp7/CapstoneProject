import { combineReducers } from 'redux';
import summaryListReducer from './summaryListReducer';
import summReducer from './summReducer';

const rootReducer = combineReducers({
    summaryId : summaryListReducer,
    summaryEntry: summReducer
});

export default rootReducer;
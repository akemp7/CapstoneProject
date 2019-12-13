import constants from './../constants';
const { initialState, types } = constants;
import v4 from 'uuid/v4';

const summaryListReducer = (state = initialState.summaryId, action) => {
    let newState;
    switch (action.type) {
        case types.RECEIVE_CONTRIBUTION:
            let newId = v4();
            let summary = action.summary;
            summary.id = newId;

            newState = {...state,
             [newId]: action.summary};
            return newState;
            default:
                return state;
    }
};

export default summaryListReducer;
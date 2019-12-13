import c from './../constants';

 const summReducer = (state = {}, action ) => {
    let newState;
    const {summary, id } = action;

    switch(action.type) {
        case c.CONTRIBUTE_ENTRY:
        newState = Object.assign({}, state, {
            [id] : {
                summary: summary,
                id: id
            }
        });
        return newState;

    }
};

export default summReducer;
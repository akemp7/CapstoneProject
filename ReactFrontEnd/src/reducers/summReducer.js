import c from './../constants';

export default (state = {}, action ) => {
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
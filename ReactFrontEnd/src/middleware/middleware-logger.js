const middlewareLogger = store => next => action => {
    console.log ('Made it here', store.getState());
    next(action);
    console.log('Second State', store.getState());
};

export default middlewareLogger;
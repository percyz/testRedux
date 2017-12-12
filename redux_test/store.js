import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import testReducer from './reducers/test';

import * as defs from './defs';


import { setSomething, setName, specialAction } from './actions/test';


/*
export const store = createStore(combineReducers(
    {
        test: testReducer,
    }
), applyMiddleware(thunk));
*/


export const store = createStore(testReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(":::Data Changed:::");
    console.log(JSON.stringify(store.getState()));
});


store.subscribe(() => {
    console.log(":::Data Changed TWO:::");
    console.log(JSON.stringify(store.getState()));
});


console.log("Working");




console.log(JSON.stringify(store.getState()));


store.dispatch(setSomething("wow"));

store.dispatch(setName("Joe"));

store.dispatch(specialAction("Jim"));


/*
store.dispatch({
    type: 'CLEAR_SOMETHING',
});*/





//console.log(JSON.stringify(store.getState()));
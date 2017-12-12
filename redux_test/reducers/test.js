
import * as defs from '../defs';




const reducerActions = {
    [defs.SET_SOMETHING]: (state, action) => {
        return {...state, something: action.something};
    },
    'CLEAR_SOMETHING': (state, action) => {
        return {...state, something: ''};
    },
    [defs.SET_NAME]: (state, action) => {
        return {...state, name: action.name };
    }
};

const testInital = {
    something: 'hello',
    name: 'Hugh',
    mode: 'Loading...',
    progress: 10,
};

export default function testReducer(state = testInital, action) {

    if (action && reducerActions[action.type] ) {
        return reducerActions[action.type](state, action);
    }

    return state;
}



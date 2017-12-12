
import * as defs from '../defs';

export function setSomething(something) {
    return {
        type: defs.SET_SOMETHING,
        something: something,
    };
}



export function setName(name) {
    return {
        type: defs.SET_NAME,
        name: name,
    };
}



export function specialAction(name) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(setName(name));
        }, 3000);
    }
}
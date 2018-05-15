import {createStore} from 'redux';



const fs = (state = {num: 1}, action) => {
    switch (action.type) {
        case 'ADD':
            state.num++;
            return {...state};
        case 'REDUCE':
            state.num--;
            return {...state};
        default:
            return state;
    }
};

export default createStore(fs);
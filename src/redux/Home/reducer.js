import * as Home from './action-type';
const defaultState = {
    data: '世界'
};
export const homeData = (state = defaultState, action) => {
    switch (action.type) {
        case Home.GETDATA:
            state.data = action.data;
            return {...state};
        case Home.TEST:
            state.data = action.data;
            return {...state};
        default:
            return state;
    }
};
import * as App from './action-type'
const defaultData = {
    data: {}
};
export const appData = (state=defaultData, action) => {
    switch (action.type) {
        case App.GETAPPDATA: 
            state.data = action.data;
            return {...state};
        case App.APPTEST:
            state.data = action.data;
            return {...state};
        default:
            return state;
    }
};
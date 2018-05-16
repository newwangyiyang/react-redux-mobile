import * as App from './action-type'
export const getAppData = (data) => {
    return {
        type: App.GETAPPDATA,
        data
    }
};
export const appTest = (data) => {
    return {
        type: App.APPTEST,
        data
    }
}
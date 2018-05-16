import * as Home from './action-type';
import $http from '../../axios/http';
export const getData = () => {
    return async dispatch => {
        let {data} = await $http.get('https://api.myjson.com/bins/lv61i');
        console.log(data);
        dispatch({
            type: Home.GETDATA,
            data
        });
    }
}

export const test = (data) => {
    return {
        type: Home.TEST,
        data
    }
}

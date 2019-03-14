// src/js/actions/index.js

import { ENTER_ZIP } from '../constants/action-types';

export function enterZIP(zip) {
    return async function(dispatch){
        console.log(zip);
        dispatch(submitting())
        try {
            const response = await fetch(`https://iaspub.epa.gov/enviro/efservice/getEnvirofactsUVDAILY/ZIP/${zip}/JSON`);
            const responseJSON = await response.json();
            console.log(responseJSON[0]);
            dispatch(success({
                uvIndex: responseJSON[0].UV_INDEX,
                uvAlert: responseJSON[0].UV_ALERT
            }));
        } catch (e) {
            console.log(JSON.stringify(e));
            dispatch(error(e.responseText || `Something went wrong`));
        }
    }
};

export function submitting() {
    return { type: "FETCH_DATA_SUBMITTING", payload: true}
};

export function success(payload) {
    return { type: "FETCH_DATA_SUCCESS", payload}
};

export function error(err) {
    return { type: "FETCH_DATA_ERROR", payload: err}
};
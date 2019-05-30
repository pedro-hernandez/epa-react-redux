// src/js/actions/index.js

import { ENTER_ZIP } from '../constants/action-types';

export function enterZIP(zip) {
    return async function(dispatch){
        console.log(zip);
        dispatch(submitting())
        try {
            const response = await fetch(`https://iaspub.epa.gov/enviro/efservice/getEnvirofactsUVDAILY/ZIP/${zip}/JSON`);
            const responseJSON = await response.json();
            dispatch(success({
                uvIndex: responseJSON[0].UV_INDEX,
                uvAlert: responseJSON[0].UV_ALERT
            }));
        } catch (e) {
            dispatch(error(e.responseText || `Oops, something went wrong...`));
        }
    }
};

export function getLocation(zip) {
    return async function(dispatch){
        console.log(zip);
        dispatch(locSubmitting())
        try {
            const response = await fetch(`http://ziptasticapi.com/${zip}`);
            const responseJSON = await response.json();
            dispatch(locSuccess({
                city: responseJSON.city,
                state: responseJSON.state
            }));
        } catch (e) {
            dispatch(locError(e.responseText || `Something went wrong...`));
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

export function locSubmitting() {
    return { type: "FETCH_LOC_DATA_SUBMITTING", payload: true}
};

export function locSuccess(payload) {
    return { type: "FETCH_LOC_DATA_SUCCESS", payload}
};

export function locError(err) {
    return { type: "FETCH_LOC_DATA_ERROR", payload: err}
};
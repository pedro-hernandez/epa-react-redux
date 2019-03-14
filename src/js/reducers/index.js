// src/js/reducers/index.js

import { ENTER_ZIP, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_SUBMITTING } from '../constants/action-types';


const initialState = {
    uvIndex: 0,
    uvAlert: 10,
    submitting: false,
    error: ''
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_SUBMITTING:
            return {
                ...state,
                submitting: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                uvIndex: action.payload.uvIndex,
                uvAlert: action.payload.uvAlert,
                submitting: false,
                error: ''
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                error: action.payload,
                submitting: false
            };
        default:
            return state;
    }
};
export default rootReducer;
// src/js/reducers/index.js

import { ENTER_ZIP, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_SUBMITTING, FETCH_LOC_DATA_ERROR, FETCH_LOC_DATA_SUBMITTING, FETCH_LOC_DATA_SUCCESS } from '../constants/action-types';


const initialState = {
    uvIndex: 0,
    uvAlert: 0,
    city: '',
    usState: '',
    submitting: false,
    locSubmitting: false,
    error: '',
    locError: ''
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
        case FETCH_LOC_DATA_SUBMITTING:
            return {
                ...state,
                locSubmitting: true
            };
        case FETCH_LOC_DATA_SUCCESS:
            return {
                ...state,
                city: action.payload.city,
                usState: action.payload.state,
                locSubmitting: false,
                locError: ''
            }
        case FETCH_LOC_DATA_ERROR:
            return {
                ...state,
                error: action.payload,
                locSubmitting: false
            };
        default:
            return state;
    }
};
export default rootReducer;
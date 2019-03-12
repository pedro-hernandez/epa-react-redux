// src/js/reducers/index.js

import { ENTER_ZIP } from '../constants/action-types';

const initialState = {
    zip: 0,
    uvIndex: 0,
    uvAlert: 0
};

function rootReducer(state = initialState, action) {

    if (action.type === ENTER_ZIP) {
        return Object.assign({}, state, {
            zip: action.payload,
            uvIndex: fetchData(action.payload.UV_INDEX),
            uvAlert: fetchData(action.payload.UV_ALERT),
        })
    }
    return state;
};

async function fetchData(){
    try {
        let response = await fetch(`https://iaspub.epa.gov/enviro/efservice/getEnvirofactsUVDAILY/ZIP/${this.state.zip}/JSON`);
        // let responseJSON = await response.json();
        console.log(response);
    } catch (error) {
        alert(error);
    }
    return response;
}

export default rootReducer;
// src/js/actions/index.js

import { ENTER_ZIP } from '../constants/action-types';

export function enterZIP(payload) {
    return { type: ENTER_ZIP, payload }
};
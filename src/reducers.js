import { combineReducers } from "redux";
import { SET_PLAYER_STATE, SET_STREAM_URL } from "./actions";

const DEFAULT_STATE = {};

const playerState = (state = DEFAULT_STATE, action) => {
    if (action.type === SET_PLAYER_STATE) {
        return Object.assign({}, state, action.payload);
    }
    return state;
};

const streamUrl = (state = "", action) => {
    if (action.type === SET_STREAM_URL) {
        return action.payload;
    }
    return state;
}


export default combineReducers({ playerState, streamUrl });

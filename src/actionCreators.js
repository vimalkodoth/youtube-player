import { SET_PLAYER_STATE, SET_STREAM_URL } from "./actions";

export function setPlayerState(data) {
    return { type: SET_PLAYER_STATE, payload: data };
}

export function setStreamUrl(url) {
    return { type: SET_STREAM_URL, payload: url };
}
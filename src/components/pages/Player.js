import React, { useRef } from "react";
import { css } from "@emotion/core";
import YouTube from 'react-youtube';
import SubmitButton from "../SubmitButton";
import usePlaybackConfiguration from "../hooks/usePlaybackConfiguration";
import useStorePositionTime from "../hooks/useStorePositionTime";
import { useHistory } from "react-router-dom";

const defaultConfigs = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: 0
    }
};

function Player() {
    const playerRef = useRef(null);
    const opts = usePlaybackConfiguration(defaultConfigs);
    const [onPlayerStateChange] = useStorePositionTime(playerRef);
    const history = useHistory();
    const onEdit = () => {
        history.goBack();
    }
    if (!opts) return <div></div>;
    return (
        <div css={Wrapper}>
            <YouTube videoId="RrTlbxFhK_I" opts={opts} ref={playerRef} onStateChange={onPlayerStateChange} />
            <SubmitButton onClick={onEdit}>
                Edit
            </SubmitButton>
            <SubmitButton to={{
                pathname: `/gif`,
                state: {}
            }}>
                Next (GIF)
            </SubmitButton>
        </div>
    );
}

export default Player;

const Wrapper = css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
`;
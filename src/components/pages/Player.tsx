import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/core";
import YouTube, { Options, YouTubeProps } from 'react-youtube';
import SubmitButton from "../SubmitButton";
import usePlaybackConfiguration from "../hooks/usePlaybackConfiguration";
import useStorePositionTime from "../hooks/useStorePositionTime";
import { useHistory } from "react-router-dom";
import useParseStreamUrl from "../hooks/useParseStreamUrl";
import { setPlayerState } from "../../actionCreators";
import { useDispatch } from 'react-redux';

const defaultConfigs: Options = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: 0
    }
};

interface IProps {
    streamUrl: string,
    location: any
}

const Player: React.FC<IProps> = ({ streamUrl, location }: IProps) => {
    const playerRef = useRef<YouTube | null>(null);
    const dispatch = useDispatch();
    const opts = usePlaybackConfiguration(defaultConfigs);
    const [onPlayerStateChange] = useStorePositionTime(playerRef, 2);
    const [streamId, error]: (string | boolean)[] = useParseStreamUrl(location.state.url);
    const history = useHistory();
    const onEdit = () => {
        dispatch(setPlayerState({
            seekPosition: -1,
            currentTime: -1
        }));
        history.goBack();
    }
    if (streamId === '' && error) return <div css={Wrapper}>An error has occured</div>;
    if (!opts || streamId === '') return <div css={Wrapper}></div>;
    return (
        <div css={Wrapper}>
            <YouTube videoId={streamId as string} opts={opts as Options} ref={playerRef} onStateChange={onPlayerStateChange} />
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
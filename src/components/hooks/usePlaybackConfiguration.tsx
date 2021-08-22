import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import YouTube, { YouTubeProps, Options } from "react-youtube";

interface IPlayerState {
    seekPosition: number,
    currentTime: number
}
interface IState {
    playerState: IPlayerState
}

const usePlaybackConfiguration = (playerConfig: any = {}) => {
    const playerState = useSelector((state: IState) => state.playerState);
    const [opts, setOpts] = useState<YouTubeProps | null>(null);
    useEffect(() => {
        const { seekPosition = -1, currentTime = -1 } = playerState;
        if (seekPosition && currentTime) {
            let now = Date.now(),
                diff = now - currentTime;
            setOpts(() => {
                return {
                    ...playerConfig,
                    playerVars: {
                        ...playerConfig.playerVars,
                        start: Math.floor(seekPosition + (diff / 1000))
                    }
                }
            });
        } else {
            setOpts(playerConfig);
        }
    }, []);

    return opts as YouTubeProps;
}

export default usePlaybackConfiguration;
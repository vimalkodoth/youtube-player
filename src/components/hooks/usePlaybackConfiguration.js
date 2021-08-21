import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

function usePlaybackConfiguration(playerConfig = {}) {
    const playerState = useSelector(state => state.playerState);
    const [opts, setOpts] = useState(null);
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

    return opts;
}

export default usePlaybackConfiguration;
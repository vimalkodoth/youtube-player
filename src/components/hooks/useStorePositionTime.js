import { useRef, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setPlayerState } from './../../actionCreators';

function useStorePositionTime(playerRef) {
    const [firstTimePlay, setFirstTimePlay] = useState(false);
    const interval = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!firstTimePlay) return;
        interval.current = setInterval(() => {
            updateTime();
        }, 3000);
        return () => {
            clearInterval(interval.current);
        };
    }, [firstTimePlay]);

    const onPlay = () => {
        setFirstTimePlay(state => {
            if (!state) {
                return true;
            }
            return state;
        });
    }

    const onStop = () => {
        setFirstTimePlay(() => {
            return false;
        });
        clearInterval(interval.current);
    }

    const onPlayerStateChange = (event) => {
        const playerState = event.data;
        switch (playerState) {
            case 1:
                onPlay();
                break;
            case 0:
                onStop();
                break;
            default:
        }
    }

    const updateTime = async () => {
        const currentTime = await playerRef.current.internalPlayer.getCurrentTime();
        dispatch(setPlayerState({
            seekPosition: currentTime,
            currentTime: Date.now()
        }));
    }

    return [onPlayerStateChange]
}

export default useStorePositionTime;
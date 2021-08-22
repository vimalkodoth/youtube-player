import { useRef, useEffect, useState, RefObject } from "react";
import { useDispatch } from 'react-redux';
import { setPlayerState } from '../../actionCreators';


const useStorePositionTime = (playerRef: RefObject<any>, intervalN: number) => {
    const [firstTimePlay, setFirstTimePlay] = useState(false);
    const interval: { current: NodeJS.Timeout | null } = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!firstTimePlay) return;
        interval.current = setInterval(() => {
            updateTime();
        }, intervalN * 1000);
        return () => {
            clearInterval(interval.current as NodeJS.Timeout);
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
        clearInterval(interval.current as NodeJS.Timeout);
    }

    const onPlayerStateChange = (event: any) => {
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
        if (!playerRef.current) return;
        const currentTime = await playerRef.current.internalPlayer.getCurrentTime();
        dispatch(setPlayerState({
            seekPosition: currentTime,
            currentTime: Date.now()
        }));
    }

    return [onPlayerStateChange]
}

export default useStorePositionTime;
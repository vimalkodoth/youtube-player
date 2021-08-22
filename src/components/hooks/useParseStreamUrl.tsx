
import { useEffect, useState } from "react";
const useParseStreamUrl = (streamUrl: string) => {
    const [videoId, setVideoId] = useState('');
    const [error, setError] = useState(false);
    useEffect(() => {
        if (!streamUrl) return;
        let url: URL;
        try {
            url = new URL(streamUrl);
            const id = url.search?.split('=')?.[1];
            setVideoId(id);
        } catch (e) {
            //errorHandler code
            setError(true)
        }
    }, []);

    return [videoId, error];
}

export default useParseStreamUrl;
import React, { useRef, useEffect, useState } from "react";

function AsyncRoute(props: any) {
    const componentRef = useRef();
    const [state, setState] = useState({ loaded: false });

    useEffect(() => {
        props.loadingPromise.then((module: any) => {
            componentRef.current = module.default;
            setState({ loaded: true });
        });
    }, [])

    if (state.loaded) {
        const { current: C }: any = componentRef;
        return <C {...props.props} />;
    }
    return <></>;
}

export default AsyncRoute;

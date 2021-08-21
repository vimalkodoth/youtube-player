import React, { useRef, useEffect, useState } from "react";

function AsyncRoute(props) {
    const componentRef = useRef();
    const [state, setState] = useState({ loaded: false });

    useEffect(() => {
        props.loadingPromise.then((module) => {
            componentRef.current = module.default;
            setState({ loaded: true });
        });
    }, [])

    if (state.loaded) {
        const { current: C } = componentRef;
        return <C {...props.props} />;
    }
    return <></>;
}

export default AsyncRoute;

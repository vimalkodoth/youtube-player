import React from "react";
import ErrorBoundary from "../ErrorBoundary";

function withErrorBoundary(WrappedComponent: any) {
    return function Component(props: any) {
        return (
            <ErrorBoundary>
                <WrappedComponent {...props} />
            </ErrorBoundary>
        );
    };
}

export default withErrorBoundary;

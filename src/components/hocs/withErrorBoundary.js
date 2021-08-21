import React from "react";
import ErrorBoundary from "../ErrorBoundary";

function withErrorBoundary(WrappedComponent) {
    return function Component(props) {
        return (
            <ErrorBoundary>
                <WrappedComponent {...props} />
            </ErrorBoundary>
        );
    };
}

export default withErrorBoundary;

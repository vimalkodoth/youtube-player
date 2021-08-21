import React from "react";
import { css } from "@emotion/core";
import Form from '../Form';

function Home() {
    return (
        <div css={Wrapper}>
            <Form to={
                (url) => {
                    return {
                        pathname: `/player/${url}`,
                        state: {}
                    }
                }
            } />
        </div>
    );
}

export default Home;

const Wrapper = css`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
`;

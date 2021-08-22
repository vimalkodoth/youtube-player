import React from "react";
import { css } from "@emotion/core";
import Form from '../Form';

const Home: React.FC = () => {
    return (
        <div css={Wrapper}>
            <Form to={
                (url: any) => {
                    return {
                        pathname: `/player/${url}`,
                        state: {
                            url
                        }
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

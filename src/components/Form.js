import React from "react";
import { css } from "@emotion/core";
import { useDispatch, useSelector } from 'react-redux';
import { setStreamUrl } from './../actionCreators';
import SubmitButton from "./SubmitButton";

function Form({ to }) {
    const dispatch = useDispatch();
    const streamUrl = useSelector(state => state.streamUrl);
    const onChange = function (e) {
        dispatch(setStreamUrl(e.target.value))
    }
    return (
        <div css={ListStyle}>
            <form>
                <label htmlFor="url">Enter URL:</label><br />
                <input css={Input} type="text" name="url" value={streamUrl} onChange={onChange} />
                <SubmitButton to={to(streamUrl)}>
                    Play
                </SubmitButton>
            </form>
        </div>
    );
}

export default Form;

const ListStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;

const Input = css`
    margin: 0.75rem;
    margin-left:0;
`;
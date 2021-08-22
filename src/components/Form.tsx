import React from "react";
import { css } from "@emotion/core";
import { useDispatch, useSelector } from 'react-redux';
import { setStreamUrl } from '../actionCreators';
import SubmitButton from "./SubmitButton";

interface IProps {
    to: (a: string) => object;
}

interface IState {
    streamUrl: string
}

const Form: React.FC<IProps> = ({ to }: IProps) => {
    const dispatch = useDispatch();
    const streamUrl = useSelector((state: IState) => state.streamUrl);
    const onChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setStreamUrl(e.target.value))
    }
    return (
        <div css={ListStyle}>
            <form>
                <label htmlFor="url">Enter URL</label><br />
                <input css={Input} type="text" name="url" placeholder="https://www.youtube.com/watch?v=zPDPrvonXq4" value={streamUrl} onChange={onChange} />
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
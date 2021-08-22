import React, { MouseEventHandler } from "react";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";

interface Props {
    onClick?: MouseEventHandler,
    to?: object,
    children: string
}

const SubmitButton: React.FC<Props> = ({ to, children, onClick }: Props) => {
    return (
        <React.Fragment>
            {to ?
                <Link to={to}>
                    <input css={Input} type="submit" value={children} />
                </Link>
                : <input css={Input} type="submit" value={children} onClick={onClick} />
            }
        </React.Fragment>
    );
}

export default SubmitButton;

const Input = css`
    margin: 0.75rem;
    margin-left:0;
`;


import React from "react";

interface IProps {
    src: string
}

const Image: React.FC<IProps> = ({ src }: IProps) => {
    return (
        <img src={src} />
    );
}

export default Image;
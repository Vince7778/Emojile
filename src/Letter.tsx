import React from "react";

type LetterProps = {
    color: string;
    size: string;
    children: React.ReactNode;
}

function Letter (props: LetterProps) {
    let className = `Letter Letter-${props.color} Letter-${props.size}`;

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Letter;
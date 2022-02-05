import React from "react";

type LetterProps = {
    color: string;
    children: React.ReactNode;
}

function Letter (props: LetterProps) {
    return (
        <div className={`Letter Letter-${props.color}`}>
            {props.children}
        </div>
    );
}

export default Letter;
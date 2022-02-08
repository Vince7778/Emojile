import React from "react";
import Letter from "./Letter";
import checkGuess from "../checkGuess";
import Emoji from "./Emoji";

type GuessRowProps = {
    emojiName: string;
    correctEmojiName: string;
}

function GuessRow(props: GuessRowProps) {
    const emojiLetters = props.emojiName.split("");
    const guessColors = checkGuess(props.emojiName, props.correctEmojiName);
    const letters = [];
    let allGray = true, allGreen = true;
    for (let i = 0; i < emojiLetters.length; i++) {
        if (guessColors[i] !== "gray") allGray = false;
        if (guessColors[i] !== "green") allGreen = false;
        letters.push(<Letter color={guessColors[i]} key={i} size="small">{emojiLetters[i].toUpperCase()}</Letter>);
        if (emojiLetters[i] === " ") {
            letters.push(<div className="spacer" key={-i}></div>)
        }
    }

    const mainColor = allGray ? "gray" : (allGreen ? "green" : "yellow");
    const mainEmoji = Emoji.getChar(props.emojiName);
    const convEmoji = Emoji.toTwemoji(mainEmoji);

    return (
        <div className="Row">
            <span className="main-guess">
                <Letter color={mainColor} size="large">{convEmoji}</Letter>
            </span>
            <span className="small-guess">
                {letters}
            </span>
        </div>
    );
}

export default GuessRow;
import React, { useState } from 'react';
import GuessContainer from './GuessContainer';
import './App.css';
import Emoji from "./Emoji";
import EmojiKeyboard from './EmojiKeyboard';
import ReactTooltip from 'react-tooltip';
import WinPanel from "./WinPanel";
import getShareText from './getShareText';

function App() {
    const [target, setTarget] = useState<string>(Emoji.randomEmoji());
    const [guesses, setGuesses] = useState<string[]>([]);
    const [won, setWon] = useState<boolean>(false);

    function onType(emojiName: string) {
        setGuesses([...guesses, emojiName]);
        if (emojiName === target) {
            setWon(true);
            ReactTooltip.hide();
        }
    }

    function restart() {
        setWon(false);
        setGuesses([]);
        setTarget(Emoji.randomEmoji());
    }

    function share() {
        const txt = getShareText(guesses, target);
        navigator.clipboard.writeText(txt);
    }

    let footerElem: JSX.Element;
    if (won) {
        footerElem = (<WinPanel guessCount={guesses.length} restart={restart} share={share}/>);
    } else {
        footerElem = (<EmojiKeyboard onType={onType} />);
    }

    return (
        <div className="App">
            <h1>Emojile</h1>
            <GuessContainer guesses={guesses} correctEmojiName={target}/>
            {footerElem}
            <ReactTooltip effect="solid" />
        </div>
    );
}

export default App;

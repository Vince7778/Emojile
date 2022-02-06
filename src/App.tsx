import React, { useState } from 'react';
import GuessContainer from './GuessContainer';
import './App.css';
import Emoji from "./Emoji";
import EmojiKeyboard from './EmojiKeyboard';
import ReactTooltip from 'react-tooltip';

function App() {
    const [target] = useState(Emoji.randomEmoji());
    const [guesses, setGuesses] = useState<string[]>([]);

    function onType(emojiName: string) {
        setGuesses([...guesses, emojiName]);
    }

    return (
        <div className="App">
            <GuessContainer guesses={guesses} correctEmojiName={target}/>
            <EmojiKeyboard onType={onType}></EmojiKeyboard>
            <ReactTooltip effect="solid" />
        </div>
    );
}

export default App;

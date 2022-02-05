import React from 'react';
import GuessContainer from './GuessContainer';
import './App.css';
import Emoji from "./Emoji";

function App() {
    const targetEmoji = Emoji.randomEmoji();
    const guesses: string[] = [];
    for (let i = 0; i < 10; i++) guesses.push(Emoji.randomEmoji());
    guesses.push(targetEmoji);

    return (
        <div className="App">
            <GuessContainer guesses={guesses} correctEmojiName={targetEmoji}/>
        </div>
    );
}

export default App;

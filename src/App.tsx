import React from 'react';
import GuessRow from './GuessRow';
import './App.css';
import Emoji from "./Emoji";

function App() {
    const targetEmoji = Emoji.randomEmoji();

    return (
        <div className="App">
            <GuessRow emojiName="kissing face." correctEmojiName={targetEmoji}/>
            <GuessRow emojiName={Emoji.randomEmoji()} correctEmojiName={targetEmoji}/>
        </div>
    );
}

export default App;

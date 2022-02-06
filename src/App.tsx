import React, { useState } from 'react';
import GuessContainer from './GuessContainer';
import './App.css';
import Emoji from "./Emoji";
import EmojiKeyboard from './EmojiKeyboard';
import ReactTooltip from 'react-tooltip';
import WinPanel from "./WinPanel";
import getShareText from './getShareText';
import { RulesPanel } from './RulesPanel';

function App() {
    const [target, setTarget] = useState<string>(Emoji.randomEmoji());
    const [guesses, setGuesses] = useState<string[]>([]);
    const [footerState, setFooterState] = useState<string>("keyboard");

    function onType(emojiName: string) {
        setGuesses([...guesses, emojiName]);
        if (emojiName === target) {
            setFooterState("winPanel");
            ReactTooltip.hide();
        }
    }

    function restart() {
        setGuesses([]);
        setTarget(Emoji.randomEmoji());
        setFooterState("keyboard");
    }

    function share() {
        const txt = getShareText(guesses, target);
        navigator.clipboard.writeText(txt);
    }

    let footerElem: JSX.Element;
    switch (footerState) {
        case "keyboard":
            footerElem = (<EmojiKeyboard onType={onType} openRules={() => setFooterState("rulesPanel")}/>);
            break;
        case "winPanel":
            footerElem = (<WinPanel guessCount={guesses.length} restart={restart} share={share}/>);
            break;
        case "rulesPanel":
            footerElem = (<RulesPanel close={() => setFooterState("keyboard")}></RulesPanel>)
            break;
        default:
            footerElem = (<></>);
            break;
    }

    return (
        <div className="App">
            <h1>Emojile</h1>
            <GuessContainer guesses={guesses} correctEmojiName={target}/>
            <div className="FooterWrap">
                {footerElem}
            </div>
            <ReactTooltip effect="solid" />
        </div>
    );
}

export default App;

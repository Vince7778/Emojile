import emojiJson from "./emojiOut.json";
import twemoji from "twemoji";

const Emoji = {
    getChar: (name: string): string => {
        const res = emojiJson.find(e => e.name+"." === name);
        if (!res) throw new Error("Emoji doesn't exist! " + name);
        return res.char;
    },
    toTwemoji: (char: string, options?: object) => {
        return (
            <span dangerouslySetInnerHTML={{__html: twemoji.parse(char, options)}} />
        );
    },
    randomEmoji: (): string => {
        const rand = Math.floor(Math.random()*emojiJson.length);
        return emojiJson[rand].name+".";
    }
}

export default Emoji;
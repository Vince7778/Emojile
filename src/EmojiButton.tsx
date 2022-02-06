import Emoji from "./Emoji";

type EmojiButtonProps = {
    emojiName: string;
    click: (emojiName: string) => void;
}

function EmojiButton(props: EmojiButtonProps) {
    const emojiCode = Emoji.getChar(props.emojiName);
    const emojiElem = Emoji.toTwemoji(emojiCode);

    return (
        <div className="EmojiButton" onClick={() => props.click(props.emojiName)}>
            {emojiElem}
        </div>
    )
}

export default EmojiButton;
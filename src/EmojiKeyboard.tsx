import EmojiButton from "./EmojiButton";
import Emoji from "./Emoji";

type EmojiKeyboardProps = {
    filter?: string;
    onType: (emojiName: string) => void;
}

function EmojiKeyboard(props: EmojiKeyboardProps) {
    const nameList = Emoji.getNameList(props.filter);
    const buttons = nameList.map((n, i) => {
        return (
            <EmojiButton emojiName={n} click={s => props.onType(s)} key={i}></EmojiButton>
        )
    });
    return (
        <div className="EmojiKeyboard">
            {buttons}
        </div>
    )
}

export default EmojiKeyboard;
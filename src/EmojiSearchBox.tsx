
type EmojiSearchBoxProps = {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

function EmojiSearchBox(props: EmojiSearchBoxProps) {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search emojis"
                onInput={e => props.setSearchQuery((e.target as HTMLInputElement).value)}
            />
        </div>
    )
}

export default EmojiSearchBox;
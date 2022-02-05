import GuessRow from "./GuessRow"

type GuessContainerProps = {
    guesses: string[],
    correctEmojiName: string
}

function GuessContainer(props: GuessContainerProps) {
    const guessRows = props.guesses.map((g, i) => {
        return (
            <GuessRow key={i} emojiName={g} correctEmojiName={props.correctEmojiName}/>
        );
    })

    return (
        <div>
            {guessRows}
        </div>
    );
}

export default GuessContainer;
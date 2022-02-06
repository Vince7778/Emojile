//import checkGuess from "./checkGuess";

export default function getShareText(guesses: string[], correct: string): string {
    const lines = [`Emojile ${guesses.length}`];
    /*guesses.forEach(g => {
        const chk = checkGuess(g, correct);
        let allGray = true, allGreen = true;
        for (let i = 0; i < chk.length; i++) {
            if (chk[i] !== "gray") allGray = false;
            if (chk[i] !== "green") allGreen = false;
            if (!allGray && !allGreen) break;
        }
        if (allGreen) lines.push("🟩");
        else if (allGray) lines.push("⬛");
        else lines.push("🟨");
    });*/ // commented because this is kinda useless
    return lines.join("\n");
}
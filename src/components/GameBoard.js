import React, { useState } from 'react';
import words from '../data/words.json';
import ScoreBoard from './ScoreBoard';


function MainBoard() {
    const [score, updatedScore] = useState(0); // Track the score
    const [change, newChange] = useState(0); // Track the current word index

    // Get the current word and taboo words dynamically based on `change`
    const currentWord = words[change].word;
    const tabooWords = words[change].tabooWords;

    function handleCorrectGuess() {
        updatedScore(score + 1); // Increment the score
        newChange((prev) => (prev + 1) % words.length); // Move to the next word (wrap around)
    }

    return (
        <div>
            <ScoreBoard score={score} />
            <button onClick={handleCorrectGuess}>Add</button>
            <h1>{currentWord}</h1>
            <ul>
                {tabooWords.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul>
        </div>
    );
}

export default MainBoard;

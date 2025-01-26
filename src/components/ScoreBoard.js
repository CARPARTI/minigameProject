import React, {useState } from "react";
import MainBoard from './GameBoard';

function ScoreBoard({score}){

    return(
        <h1>Team score: {score}</h1>
    );
    
}

export default ScoreBoard;
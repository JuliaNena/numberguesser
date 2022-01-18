let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget =()=>Math.floor(Math.random()*10);

const compareGuesses =(user,computer,target)=>{ 
  if (Math.abs(target-user) <= Math.abs(target-computer)){
    return true;}
    else{
      return false;
    }
  };

  const updateScore = (winner)=>{
    if (winner==='human'){
humanScore++;}
   else if (winner==='computer'){
computerScore++;}
};

const advanceRound =()=>{
  return currentRoundNumber++
};




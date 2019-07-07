let guess = null;
let wordData = ["Homer Simpson","Marge Simpson","Bart Simpson","Lisa Simpson"];
let wordChoice
let currentWord
let wins = 0;
let guessRemaining = 10;
let empty = [];
let checkVar = 0;

// Output Variables

let guessOutput = document.getElementById("current_letter");
let winOutput = document.getElementById("wins");
let remainingOutput = document.getElementById("guess_remaining");
let wordOutput = document.getElementById("current_word");

// Select a word from array and split it into array

wordChoice = wordData[Math.floor(Math.random() * wordData.length)];
console.log(wordChoice);

var characters = wordChoice.split("");
console.log(characters);



// Capturing current key pressed plus remaining guesses output them in html
// for (guessRemaining = 10; guessRemaining < 1; i++){


    document.onkeyup = function(event) {

      guess = event.key;
      console.log(guess);
  
      guessOutput.textContent = guess;

      guessRemaining = guessRemaining-1;
      console.log(guessRemaining);

      remainingOutput.textContent = guessRemaining;
      

      // Check if selected letter is part of characters array

         console.log(empty);
         console.log(guess);
      
        checkVar = characters.indexOf(guess);
        console.log(checkVar);

        empty[checkVar] = guess;
      
        checkVar = characters.indexOf(guess, checkVar+1);

        empty[checkVar] = guess;


        wordOutput.textContent = empty;

      }

        //  for (i = 0; i < characters.length; i++){

          




          // if((characters[i] === guess) && (empty[i] === "_")){
          //   empty[i] = guess;
          //   }
          
          // else if((characters[i] != guess) && (empty[i] != "_"){
          //   empty[i] = empty[i];
          // }
          // else{
          //   empty[i] = "_";
          // }
      
  //       }

  //       wordOutput.textContent = empty;
  // }


// Generating empty output of word choice for page

// for (i = 0; i < characters.length; i++){
//   empty.push("_");
// }

// console.log(empty);
// wordOutput.textContent = empty;
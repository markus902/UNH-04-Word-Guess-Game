let guess = String;
let wordData = ["Homer","Marge","Bart","Lisa"];
let wordChoice
let wins = 0;
let lettersUsed = [];
let guessRemaining = 10;
let checkVar = 0;
let empty = [];

// Output Variables

let guessOutput = document.getElementById("current_letter");
let winOutput = document.getElementById("wins");
let remainingOutput = document.getElementById("guess_remaining");
let wordOutput = document.getElementById("current_word");
let usedOutput = document.getElementById("letters_used");

// Select a word from array and split it into array

wordChoice = wordData[Math.floor(Math.random() * wordData.length)];
console.log(wordChoice);

let characters = wordChoice.split("");
console.log(characters);

// Creating array with empty characters to show length of word
 
  for (i = 0; i < characters.length; i++){
  empty.push("_");
  }

wordOutput.textContent = wordOutput.textContent = empty.join(" ");

// Capturing current key pressed plus remaining guesses output them in html


    document.onkeyup = function(event) {

      guess = event.key;
      console.log(guess);
  
      guessOutput.textContent = guess;

      guessRemaining = guessRemaining-1;
      console.log(guessRemaining);

      remainingOutput.textContent = guessRemaining;
      

      // Check if selected letter is part of characters array

         //console.log(empty);
         
         
        // console.log(characters);
    
        checkVar = characters.indexOf(String(guess));  // why does this return false?????????
        console.log(checkVar);

        empty[checkVar] = guess;
      
      // Check for 2 occurances of guess in characters array

        checkVar = characters.indexOf(guess, checkVar+1);
        empty[checkVar] = guess;

      // Check for 3 occurances of guess in characters array

      checkVar = characters.indexOf(guess, checkVar+2);
      empty[checkVar] = guess;

      console.log(empty);
      
      // Output word with remaining gaps

      wordOutput.textContent = empty.join(" ");
      
      // store letters already guessed in array and output it
    
      lettersUsed.push(guess);
      console.log(lettersUsed);
      
      usedOutput.textContent = lettersUsed;
      
      // check if game was won and count and output wins
    
      if (empty.indexOf("_")){
        
      }
    
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
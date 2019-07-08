let guess = "";
let wordData = ["Homer Simpson","Marge Simpson","Bart Simpson","Lisa Simpson","Maggie Simpson","Santa's Little Helper","Snowball","Abraham Simpson","Apu Nahasapeemapetilon","Barney Gumble","Bleeding Gums Murphy","Chief Clancy Wiggum","Dewey Largo","Eddie","Edna Krabappel","Itchy","Janey Powell","Jasper Beardsley","Kent Brockman","Krusty The Clown","Lenny Leonard","Lou","Martin Prince","Marvin Monroe","Milhouse Van Houten","Moe Szyslak","Mr. Burns","Ned Flanders","Otto Mann","Patty Bouvier","Ralph Wiggum","Reverend Timothy Lovejoy","Scratchy","Selma Bouvier","Seymour Skinner","Sherri","Sideshow Bob","Terri","Todd Flanders","Waylon Smithers","Wendell Borton","Bernice Hibbert","Blue-Haired Lawyer","Carl Carlson","Dolph Starbeam","Dr. Julius Hibbert","Dr. Nick Riviera","Elizabeth Hoover","Hans Moleman","Helen Lovejoy","Herman Hermann","Jacqueline Bouvier","Jimbo Jones","Kearney Zzyzwicz","Lionel Hutz","Maude Flanders","Mayor Joe Quimby","Nelson Muntz","Princess Kashmir","Professor Jonathan Frink","Rainier Wolfcastle","Rod Flanders","Sideshow Mel","Troy McClure","Wise Guy","Agnes Skinner","Akira","Comic Book Guy","Groundskeeper Willie","Jake The Barber","Judge Roy Snyder","Kang","Kodos","Luann Van Houten","Mr. Teeny","Snake Jailbird","Arnie Pye","Bumblebee Man","Drederick Tatum","Kirk Van Houten","Lunchlady Doris","Old Jewish Man","Ruth Powers","Sea Captain","Squeaky-Voiced Teen","Baby Gerald","Cletus Spuckler","Luigi Risotto","Miss Springfield","Superintendent Gary Chalmers","Alice Glick","Database","The Rich Texan","Sarah Wiggum","Üter Zörker","Brandine Spuckler","Disco Stu","Fat Tony","Louie","Mona Simpson","Legs","Gil Gunderson","Manjula Nahasapeemapetilon","Lindsey Naegle","Mrs. Vanderbilt","Artie Ziff","Duffman","Gloria Jailbird","The Yes Guy","Cookie Kwan","Johnny Tightlips","Rabbi Hyman Krustofski","Crazy Cat Lady","Booberella","Capital City Goofball","Leprechaun","Ling Bouvier","Julio","Mrs. Muntz","Chazz Busby","Roger Meyers,Jr.","Shauna Chalmers","Kumiko Albertson","Surly Duff"];
// test version of word data: let wordData =["aaaa","bbbb"];
let wordDataLower = wordData;
let wordChoice
let wins = 0;
let lettersUsed = [];
let guessRemaining = 15;
let checkVar;
let empty = [];
let characters = [];

// Output Variables

let guessOutput = document.getElementById("current_letter");
let winOutput = document.getElementById("wins");
let remainingOutput = document.getElementById("guess_remaining");
let wordOutput = document.getElementById("current_word");
let usedOutput = document.getElementById("letters_used");
let lost = document.getElementById("lost");
let won = document.getElementById("won");

//swiching dataset to all lower case letter

wordDataLower = wordData.map(function toUpper(item) {
  return item.toLowerCase();
});



function start(){

  //delete lost or win message if on screen

  lost.textContent = "";
  won.textContent = "";

  // Select a word from array and split it into array 

  if(empty.indexOf("_") < 0){

  wordChoice = wordDataLower[Math.floor(Math.random() * wordDataLower.length)];
  console.log("wordChoice: " + wordChoice);

  characters = wordChoice.split("");
  console.log("characters array: " + characters);

  // Creating array with empty characters to show length of word, considering spaces

    for (i = 0; i < characters.length; i++){
      if(characters[i] === " "){
        empty.push("-");
      }
      else{
      empty.push("_");
      }
    }

  wordOutput.textContent = wordOutput.textContent = empty.join(" ");

    } 
  }

// Capturing current key pressed plus remaining guesses output them in html

document.onkeyup = function(event) {

  start();

  guess = event.key;
  console.log("guess: " + guess);

  guessOutput.textContent = guess;

  guessRemaining = guessRemaining-1;
  console.log("guessRemaining: " + guessRemaining);

  remainingOutput.textContent = guessRemaining;
  

  // Check if selected letter is part of characters array, considering multiple occurances of one character

  for(i = -1; i < 50; i++){
    checkVar = characters.indexOf(guess, i);  // why does this return false?????????

    empty[checkVar] = guess;
  }

  // Output word with gaps that are still to fill

  wordOutput.textContent = empty.join(" ");
  
  // Store letters that were already guessed in array and output it, not adding letters that are already stored in leetersUsed
  
  if(lettersUsed.indexOf(guess) <= 0){

    lettersUsed.push(guess);
  
    usedOutput.textContent = lettersUsed;
  
  }
  // Check if game was won and count and output wins, reset everything if won

  if(empty.indexOf("_") < 0){

    wins++;  

    won.textContent = "You win!!!!! Press a letter key to play another round!";

    var audio = new Audio('./assets/win.wav');
    audio.play();

    characters = [];
    empty = [];
    lettersUsed = [];
    guessRemaining = 15;
  }
    
  // Check if game was lost, output loose message, reset if lost

  else if(guessRemaining < 1){
    
    lost.textContent = "You loose!!!!! We were looking for " + wordChoice + " Press a letter key to play another round!";

    var audio = new Audio('./assets/lost.wav');
    audio.play();

    characters = [];
    empty = [];
    lettersUsed = [];
    guessRemaining = 15;
  }

  else{
  }

  winOutput.textContent = wins;
  
  // Reset game when player won
  

 
    
}
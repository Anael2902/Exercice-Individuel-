function giveANumber(){
    let givenNumber = prompt("Guess a number?")
     return givenNumber
 }
 let userGuess = parseInt(giveANumber())
 //Etape 2:
 function didIWin(giveANumber) {
     let phrase = ""
     let number =22
     if (giveANumber < number) {
         phrase ="Plus Grand"
     }
     else if (giveANumber > number) {
         phrase ="Plus Petit"
     }
     else if (giveANumber == number) {
         phrase ="Bravo ! Vous avez deviné le nombre"}
     else {
          phrase = "Enter a Valid number"
     }
     return alert(phrase)
 }
 didIWin()
// function gamePlay (){
// return didIWin giveANumber
//  }
//  console.log(gamePlay(didIWin))

//  function gamePlay (playGame){
//  let game = playGame  
// if (playGame == number){
//     phrase = "true"
// }
// else{ (playGame !== number)
//      phrase = "false"
    
// }
// return game
//  }
//  console.log(didIWin) 
 
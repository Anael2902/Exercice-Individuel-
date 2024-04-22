const chooseNumber = () => { 

    let chooseAnumber = parseInt(prompt ("Joueur 1 fais deviner un chiffre entre 0 et 50"))
    number = chooseNumber(chooseAnumber)
    while(!number)
    
    
    if (number <= 1 || number >= 50){
      return number
    }else {
     alert("pas bon !")
    }
    

}
chooseNumber()


function giveANumber(){
    let givenNumber = prompt("Trouves un chiffre entre 0 et 50?")
     return givenNumber
 }

function askNumberToguess() {
return 22
// numberToGuess = parseInt(prompt("give me a number to guess between 0 and 50"))

// return numberToGuess

}

//  let userGuess = parseInt(giveANumber())
 //Etape 2:
 function didIWin(giveANumber, numberToGuess) {
      let phrase = ""
      let number =22
     if (giveANumber < numberToGuess) {
        return false
          //phrase ="Plus Grand"
     }
     else if (giveANumber > numberToGuess) {
        return false
        // phrase ="Plus Petit"
      } 
      else  {  //(giveANumber == numberToGuess)
        return true
      }
       //  phrase ="Bravo ! Vous avez deviné le nombre"}
     //else {
       //   phrase = "Enter a Valid number"
       
}
 
  // alert(phrase)
  // return
    //let phrase1 

 didIWin(userGuess)

 function gamePlay(){

    let  numberToGuess = askNumberToguess()
    let result = false

    while(!result){ // ! sert pour que la boucle ne s'arrête pas tant que false est le résultat
   let userGuess= giveANumber()//42
    result = didIWin(userGuess, numberToGuess)//fals

      if (result){
        alert ("Bravo vous avez trouvés le chiffre")
      }else {
        alert ("Non,ce n'est pas le bon chiffre")
      }
    }
    
}
gamePlay()

//etape 3 
//utiliser cette fonction cidessus pour l'étape 3 
//étape 3 terminé 
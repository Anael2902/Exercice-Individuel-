const getLatinCharacterList = (string) => {
    return string.split('');
}
console.log(getLatinCharacterList("Hello World!"));
// ETAPE 2

//étape 2 
// const translateLatinCharacter = (letter) => {
    //appelle le dictionnaire et renvoit la correspondance en morse
    // return latinToMorse[letter]; //ici j'appelle mon paramètre dans mon tableau au dessus donc crochet
// 
function translateLatinCharacter(letter) {
    // Utilisez un objet JavaScript pour mapper chaque caractère à son équivalent en Morse
    const latinToMorse = {
        'A':'.-',
        'B':'-...',
        'C':'-.-.',
        'D':'-..',
        'E':'.',
        'F':'..-.',
        'G':'--.',
        'H':'....',
        'I':'..',
        'J':'.---',
        'K':'-.-',
        'L':'.-..',
        'M':'--',
        'N':'-.',
        'O':'---',
        'P':'.--.',
        'Q':'--.-',
        'R':'.-.',
        'S':'...',
        'T':'-',
        'U':'..-',
        'V':'...-',
        'W':'.--',
        'X':'-..-',
        'Y':'-.--',
        'Z':'--..'
    }

    // Convertit le caractère en majuscule pour être compatible avec les clés de l'objet
    const upperChar = letter.toUpperCase();

    // Renvoie le code Morse correspondant ou un espace si le caractère n'est pas trouvé
    return latinToMorse[upperChar] || ' ';
}
console.log(translateLatinCharacter("G")); //ici faut mettre en maj et surtout en string pck dans le tableau c'est déclaré en string
//étape 3

function encode (morse) {
    let morsetText =""; 

    for (let i = 0 ; i<morse.length; i++){
        const char = morse[i] // Obtient le caractère actuel
        const morseChar = translateLatinCharacter(char)//conv  en morse 
        morsetText += morseChar + " " // Ajoute la représentation en Morse au morse Morse encodé

    }

     return morsetText.trim()//.trim() supp les espaces à la fin qui st inutiles

}

// const morse = "GOODMORNING"
// const morseEnMorse = encode(morse)
console.log(encode("HELLOWORLD"))

//étape 4



const getMorseCharacterList =(string) =>{

    return string.split(' ')
}
console.log(getMorseCharacterList('.... . .-.. .-.. ---'))

const translateMorseCharacter = (point) => {
    const morseToLatin = {
        '-': "T",
        '--': "M",
        '---': "O",
        '--.': "G",
        '--.-': "Q",
        '--..': "Z",
        '-.': "N",
        '-.-': "K",
        '-.--': "Y",
        '-.-.': "C",
        '-..': "D",
        '-..-': "X",
        '-...': "B",
        '.': "E",
        '.-': "A",
        '.--': "W",
        '.---': "J",
        '.--.': "P",
        '.-.': "R",
        '.-..': "L",
        '..': "I",
        '..-': "U",
        '..-.': "F",
        '...': "S",
        '...-': "V",
        '....': "H"
      }
    //   const upperChar = letter.toUpperCase();

    return morseToLatin[point] || ' '//pour mettre l'espace


}
console.log(translateMorseCharacter("..-."))


  const decode = (morse) => {
    let latinText =""; 
    let morseCharacters = getMorseCharacterList(morse);
    for (let i = 0 ; i<morseCharacters.length; i++){
        const morseChar = morseCharacters[i] // Obtient le caractère actuel
        const latinChar = translateMorseCharacter(morseChar)//conv  en morse 
        latinText += latinChar

       

    }

     return latinText//.trim() supp les espaces à la fin qui st inutiles

}
console.log(decode('.... . .-.. .-.. ---'))

  // Fonction appelée lorsqu'on clique sur le bouton "Encode Morse"
function encodeMorse() {
    const morseInput = document.getElementById("morseInput").value; // Récupère la valeur du textarea
    const encodedText = encode(morseInput); // Appelle la fonction encode avec le texte Morse
    document.getElementById("encodedText").innerText = "Encoded Text: " + encodedText; // Affiche le texte encodé
}
function decodeMorse() {
    const letterInput = document.getElementById("letterInput").value; // Récupère la valeur du textarea
    const encodedText = decode(letterInput); // Appelle la fonction encode avec le texte Morse
    document.getElementById("encodedWord").innerText = "Encoded Text: " + encodedText; // Affiche le texte encodé
}
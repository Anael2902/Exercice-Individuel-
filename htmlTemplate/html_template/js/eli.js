function karaoke (song){
    console.log("🎤 Tonight, I want to sing "+song)

}
karaoke("NOCHURCHINTHEWILD")

function karaoke2 (Song){
return "🎤 Tonight, I want to sing "+Song
}
console.log(karaoke2("NOHOOK"))


console.log(creerFicheApprenante('Maria', '1923'));
console.log(creerFicheApprenante('Iza', '1946'));

function creerFicheApprenante (name,birthYear){
    const fiche = "l'apprenante "+ name + " à " + calculerAge(birthYear) + " ans" + ajouterEmoji (name)
    return fiche ; 
}
function calculerAge(apprenanteBirthYear){
   const year = 2024-apprenanteBirthYear
   return year ; 
}

function ajouterEmoji(apprenanteName){
    if(apprenanteName.length>3){
        return '🍟';
    }else{
        return '🍪'; 
    }
}





console.log(ficheApprenant("Armin","1985"))
console.log(ficheApprenant("Eren","1992"))

function ficheApprenant (Name,BIrthYear){
const Fiche = "l'apprenant "+ Name + " à " + calculerAge1(BIrthYear) + "ans" + ajouterEmoji1(Name)
return Fiche
}

function calculerAge1 (apprenantBirthYear){
    const Year = 2024-apprenantBirthYear
    return Year
}

function ajouterEmoji1 (apprenantName){
    if(apprenantName.length>4){
        return "🦊"
    }else{
        return "🐺"
    }
}




























function askName (){
    let nAme = prompt ("quel est votre prénom");
    let message = "👋 Bonjour\ "+ nAme; 
    document.body.innerHTML += "<h2>" + message + "</h2>"
    
  
}


function askbirthYear (){
    let birthYear = prompt ("Quand es tu né")
    let monthYear = prompt ("quel est le numéro de ton mois")
    let today = new Date();
    let month = today.getMonth()+1
    let year = today.getFullYear()
    let age = year - birthYear
    // let mois = monthYear - month
    if (monthYear>month || monthYear === month && today.getDate()<1){
        age --;// Si le mois de naissance est supérieur au mois actuel ou si nous sommes dans le mois de naissance mais la date actuelle est avant le jour de naissance
    }
   
    console.log(age)
    // console.log(month)

    
    document.body.innerHTML += "<h3>vous avez\ " +  age + " \ans</h3>" 
    
}

askName()
askbirthYear()
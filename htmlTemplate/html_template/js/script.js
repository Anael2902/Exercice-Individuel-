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
    let mois = monthYear - month
    if (monthYear>month){
        age --
    }
    
    
    console.log(age)
    console.log(month)

    
    document.body.innerHTML += "<h3>vous avez\ " +  age + " \ans</h3>" 
    
}

askName()
askbirthYear()
    



//console.log(birthYear)
//technique un peu smart de la part de hilal
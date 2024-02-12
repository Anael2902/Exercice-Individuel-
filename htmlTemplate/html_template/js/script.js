function askName (){
    let nAme = prompt ("quel est votre prénom");
    let message = "👋 Bonjour\ "+ nAme; 
    document.body.innerHTML += "<h2>" + message + "</h2>"
    
  
}


function askbirthYear (){
    let birthYear = prompt ("Quand es tu né")
    et today = new Date();
    let year = today.getFullYear()
    let age = year - birthYear
    console.log(age)
    
    document.body.innerHTML += "<h3>vous avez\ " + age + " \ans</h3>"
    
}

askName()
askbirthYear()
    



//console.log(birthYear)
//technique un peu smart de la part de hilal
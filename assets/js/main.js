function login(){

    let userInput = document.getElementById("user").value;
    let passwordInput = document.getElementById("password").value;

    if(userInput == "Dotdae" && passwordInput == "irenita"){
        alert("Sesión iniciada!")
    }
    else{
        alert("Datos erróneos!")
    }

}

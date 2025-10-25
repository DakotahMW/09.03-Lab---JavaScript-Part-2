function isStrongPassword(password){

    let requiredLength = password.length >= 8;
    let notContainPassword = password.toLowerCase().indexOf("password") === -1;
    let containUpper = false;

    // check if password contain at least one upper case
    let upperPassword = password.toUpperCase();
    let i = 0;
    while(!containUpper && i < password.length){
        if(password[i] === upperPassword[i] && !(0 <= password[i] && password[i] <= 9)){
            containUpper = true;
        }
        i++;
    }
    
    return requiredLength && notContainPassword && containUpper;
}

const loginBtn = document.getElementById("login_button");

loginBtn.addEventListener("click", function(){
    const passwordInput = document.getElementById("passwordinput");
    let password = passwordInput.value;
    
    if(isStrongPassword(password)){
        alert("Password is strong.");
    } else {
        alert("Password is weak.");
    }
});

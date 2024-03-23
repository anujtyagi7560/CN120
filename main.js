let submit=document.getElementById("submit")
submit.addEventListener('click',()=>{
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    if(username.length==0){
        usernameError.innerHTML="please fill this"
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.innerHTML = 'Enter a valid email address'
    }
    if(password.length<6){
        passwordError.innerHTML = 'Password must be at least 6 characters'
    }
    else{
        alert("SUCCESSFULY REGISTERED \n REDIRECTING TO SITE")
        window.location.href="index.html"
    }
})
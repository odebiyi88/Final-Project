
var count = 2;
function validate() {
var un = document.myform.email.value;
var pw = document.myform.password.value;
var valid = false;

var unArray = ["username1@gmail.com", "username2@gmail.com", "username3@gmail.com", "username4@gmail.com"];  // as many as you like - no comma after final entry
var pwArray = ["password1", "password2", "password3", "password4"];  // the corresponding passwords;

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}

if (valid) {
alert ("Login was sucessfully processed.  You will be redirected to the members page now.");
window.location = "http://www.google.com";
return false;
}

var t = " tries";
if (count == 1) {t = " try"}

if (count >= 1) {
alert ("Invalid username and/or password.  You have " + count + t + " left.");
document.myform.email.value = "";
document.myform.password.value = "";
setTimeout("document.myform.email.focus()", 25);
setTimeout("document.myform.email.select()", 25);
count --;
}

else {
alert ("Still incorrect! You have no more tries left!");
document.myform.email.value = "No more tries allowed!";
document.myform.password.value = "";
document.myform.email.disabled = true;
document.myform.password.disabled = true;
return false;
}
let btn = document.getElementById("btn");
    btn.addEventListener('click', event => {
      validate();

}


// function toggleResetPswd(e){
//     e.preventDefault();
//     $('#logreg-forms .form-signin').toggle() // display:block or none
//     $('#logreg-forms .form-reset').toggle() // display:block or none
// }

// function toggleSignUp(e){
//     e.preventDefault();
//     $('#logreg-forms .form-signin').toggle(); // display:block or none
//     $('#logreg-forms .form-signup').toggle(); // display:block or none
// }

// $(()=>{
//     // Login Register Form
//     $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
//     $('#logreg-forms #cancel_reset').click(toggleResetPswd);
//     $('#logreg-forms #btn-signup').click(toggleSignUp);
//     $('#logreg-forms #cancel_signup').click(toggleSignUp);
// })


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const btnClose = document.querySelector(".btn-close");

// launch modal event
//modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn.addEventListener("click", launchModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeModal(){
  modalbg.style.display = "none";
}

// close modal event
close.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

// FORM Elements 
const modalForm = document.querySelector(".modalForm");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last"); 
const mail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const nbTournaments = document.getElementById("quantity");
const location1 = document.getElementById("location1"); 
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const modalValid = document.querySelector(".modalValid");

//check if FORM is valid
function validate(){
  if (firstName.value.length < 2) {
    document.getElementById('errorFirstName').style.display='block'; //display error message
    firstName.focus();
    return false;
  }
  if (lastName.value.length < 2) {
    document.getElementById('errorLastName').style.display='block'; 
    lastName.focus();
    return false;
  }
  if(mail.value=""){
    document.getElementById('errorMail').style.display="block";
    mail.focus();
  }

 modalForm.style.display ="none";
 modalValid.style.display="block";
}
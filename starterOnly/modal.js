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

// FORM Elements 
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

//check if FORM is valid
function validate(){
  if (firstName.value == "") {
    window.alert("Please enter your name.");
    firstName.focus();
    return false;
  }
  if (lastName.value == "") {
    window.alert("Please enter your name.");
    lastName.focus();
    return false;
  }
  alert("Merci ! Votre réservation a été reçue"); //form valid
  return true;

}
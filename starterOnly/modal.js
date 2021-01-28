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
//DOM FORM Elements 
const modalForm = document.querySelector(".modalForm");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last"); 
const mail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const nbTournaments = document.getElementById("quantity");
const modalValid = document.querySelector(".modalValid");
const checked_location = document.querySelectorAll('input[name="location"]:checked');
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");


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




//verify email 
function validateEmail(){
  if (!mail.value.match(mailformat)){ 
  return false;
    }
  return true;
}


//verify if location is checked
function check_location(){
if(checked_location != null){  //Test if something was checked
  alert(checked_location.value); //Alert the value of the checked.
  } else {
  alert('Nothing checked'); //Alert, nothing was checked.
  }
}


//check if FORM is valid
function validate(){
  if (firstName.value.length < 2) {  //vérifie que le prénom a plus de 2 caractères
    document.getElementById('errorFirstName').style.display='block'; //display error message
    firstName.focus();
    return false;
  }else{ 
    document.getElementById('errorFirstName').style.display="none";
  }

  if (lastName.value.length < 2) {  //vérifie que le nom a plus de 2 caractères
    document.getElementById('errorLastName').style.display='block'; 
    lastName.focus();
    return false;
  }else{ 
    document.getElementById('errorLastName').style.display="none";
  }
  
  if(!validateEmail(mail)){  //vérifie que le mail a le bon format
    document.getElementById('errorMail').style.display="block";
    mail.focus();
    return false;
  } else{
    document.getElementById('errorMail').style.display="none";
  }

  if (birthDate.value == "" ){ // vérifie qu'une date est choisi 
    document.getElementById('errorBirthday').style.display='block'; 
    birthDate.focus();
    return false;
  }else{ 
    document.getElementById('errorBirthday').style.display="none";
  }

  if(nbTournaments.value < 0 || nbTournaments.value > 99|| nbTournaments.value == "" ){  // verifier le nb de tournois
    document.getElementById('errorTournament').style.display="block";
    console.log(nbTournaments.value);
    return false;
  }else{ 
    document.getElementById('errorTournament').style.display="none";
  }

  if(!check_location(checked_location)){
    document.getElementById('errorLocation').style.display="block";
    console.log(checked_location.value);
    return false;

  } 
  
  if(checkbox1.checked == false){ //verifier que les conditions d'utilisation sont coché
    document.getElementById('errorCheckbox').style.display="block";
    return false;
  }else{ 
    document.getElementById('errorCheckbox').style.display="none";
  }
  
/*modalForm.style.display ="none";*/
modalValid.style.display="block";
console.log(firstName.value);
console.log(lastName.value);
console.log(mail.value);
console.log(birthDate.value);
console.log(nbTournaments.value);
}

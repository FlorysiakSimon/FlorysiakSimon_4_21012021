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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const btnClose = document.querySelector(".btn-close");
//DOM FORM Elements 
const modalForm = document.querySelector(".modalForm");
const firstName = document.getElementById("first"); // prenom
const lastName = document.getElementById("last"); // nom
const mail = document.getElementById("email");// mail
const birthDate = document.getElementById("birthdate"); // date de naissance
const nbTournaments = document.getElementById("quantity"); // nombres de tournois
const checkbox1 = document.getElementById("checkbox1"); // conditions d'utilisation
const checkbox2 = document.getElementById("checkbox2");
const formValid = document.querySelector(".formValid"); // modal form valid


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//modalBtn.addEventListener("click", launchModal);


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
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validateEmail(){
  if (!mail.value.match(mailformat)){ 
  return false;
    }
  return true;
}


//verify if location is checked
function verifyLocation(){
  var checked_location = document.querySelectorAll('input[name="location"]');
  console.log(checked_location);
  var radio = 0;
  for (var i = 0; i < checked_location.length; i++) {
    if (checked_location[i].checked) {
      radio++; //add +1 if 1 box is checked
        console.log("location : ",checked_location[i].value);
      }
    }
    if (radio==0){ //if no box has been checked
      return false;
        }
    return true;
  }


//check if FORM is valid
function validate(){

  if (firstName.value.length < 2 || !firstName.value.match(/^([a-zA-Z]+)$/)) {  // verify first name input has more than 2 characters 
    document.getElementById('errorFirstName').style.display='block'; //display error message
    firstName.focus(); // focus on input
    return false; 
  }else{
    console.log('prenom :', firstName.value); 
    document.getElementById('errorFirstName').style.display="none";
  }

  if (lastName.value.length < 2 || !lastName.value.match(/^([a-zA-Z]+)$/)) {  //verify last name input has more than 2 characters
    document.getElementById('errorLastName').style.display='block'; //display error message
    lastName.focus(); 
    return false;
  }else{ 
    console.log('nom:' , lastName.value);
    document.getElementById('errorLastName').style.display="none"; 
  }
  
  if(!validateEmail(mail)){  //verify mail format
    document.getElementById('errorMail').style.display="block"; //display error message
    mail.focus();
    return false;
  } else{
    console.log('email:' , mail.value);
    document.getElementById('errorMail').style.display="none";
  }

  if (birthDate.value == "" ){ // verify date 
    document.getElementById('errorBirthday').style.display='block'; //display error message
    birthDate.focus();
    return false;
  }else{ 
    console.log('date-de-naissance:' , birthDate.value);
    document.getElementById('errorBirthday').style.display="none";
  }

  if(nbTournaments.value < 0 || nbTournaments.value > 99 || nbTournaments.value == "" ){  // verify tournaments number
    document.getElementById('errorTournament').style.display="block";
    nbTournaments.focus();
    return false;
  }else{ 
    console.log('nombre de tournois:', nbTournaments.value);
    document.getElementById('errorTournament').style.display="none";
  }
  
  if (verifyLocation()==false){ //verify a location is chosen 
    document.getElementById('errorLocation').style.display='block'; //display error message
    return false;
  }else{ 
    document.getElementById('errorLocation').style.display="none"; 
  }
 
  if(checkbox1.checked == false){ //verify terms and conditions is checked
    document.getElementById('errorCheckbox').style.display="block"; //display error message
    return false;
  }else{ 
    document.getElementById('errorCheckbox').style.display="none";
  }
}

if(window.location.href.indexOf("?first=") > 1){ //verify get method on submit
  formValid.style.display = "block"; //display validation message
}

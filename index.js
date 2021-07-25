
var slideIndex=1;
function plusSlides(n) {
    showSlides();
  }

  function showSlides() {
var i;
var slides = document.getElementsByClassName("slides");
let newSlides=[];
let a,b,c;
a=slides[1]; b=slides[2]; c=slides[0];
newSlides.push(a);newSlides.push(b);newSlides.push(c);

let container=document.getElementById("carousel");
container.replaceChildren(...newSlides);
}

function minusSlides(n) {
showMinus();
}

function showMinus() {
var i;
var slides = document.getElementsByClassName("slides");
let newSlides=[];
let a,b,c;
a=slides[2]; b=slides[0]; c=slides[1]
newSlides.push(a);newSlides.push(b);newSlides.push(c);

let container=document.getElementById("carousel");
container.replaceChildren(...newSlides);
}

function myFunction() {
  var x = document.getElementById("myDropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  x.classList.toggle("change");
}
function subscribe(){
  var email = document.getElementById("email").value;
      if(email.indexOf('@')<=0){
				alert("Please enter correct email address.");
				return false;
			}     
			if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
				alert("Please enter correct email address.");
				return false;
			}
        alert("You have been subscribed successfully.\n You will be notified whenever our new blog will be published.");
        window.location="index.html";
      
}
function newPage(){
  alert("Page is under developement, Thanks for your patience!")
}
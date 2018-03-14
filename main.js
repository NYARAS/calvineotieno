//Listen for form submit
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7uZ9g8atUMLqfEHDdX378LnxZJVDwhtQ",
    authDomain: "contactform-41e5a.firebaseapp.com",
    databaseURL: "https://contactform-41e5a.firebaseio.com",
    projectId: "contactform-41e5a",
    storageBucket: "contactform-41e5a.appspot.com",
    messagingSenderId: "153065056703"
  };
  firebase.initializeApp(config);
//Reference messages colection
var messagesRef = firebase.database().ref('messages')



document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit form
function submitForm(e) {
	// body...
	e.preventDefault();
	//Get values
	var name = getInputVal('name');
	var company = getInputVal('company');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');

//save massage

	saveMessage(name, company, email, phone, message);



//Show alert

document.querySelector('.alert').style.display = 'none';


//Hide alert after 3 seconds
setTimeout(function(){

},3000);


//clear form

document.getElementById('contactForm').reset();

}
//function to get form values
function getInputVal(id){
	return document.getElementById(id).value;

}
//save message to firebase
function saveMessage(name, company, email, phone, message){
	var newMessageRef = messagesRef.push();
newMessageRef.set({

	name:name,
	company:company,
	email:email,
	phone:phone,
	message:message

});

}
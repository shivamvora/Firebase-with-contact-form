// Initialize Firebase (ADD YOUR OWN DATA)
// var config = {
//   // apiKey: "xxxxx",
//   // authDomain: "xxxxx",
//   // databaseURL: "xxxxx",
//   // projectId: "xxxxx",
//   // storageBucket: "xxxxx",
//   // messagingSenderId: "xxxxx"


//   apiKey: "AIzaSyD0Z0NnsmjrkEBpnO8T4wvvBy5xK_j-SWQ",
//     authDomain: "html-42bb2.firebaseapp.com",
//     projectId: "html-42bb2",
//     storageBucket: "html-42bb2.appspot.com",
//     messagingSenderId: "716761355516",
//     appId: "1:716761355516:web:d906b842ac0f192ee6b379",
//     measurementId: "G-PTR3R4Y4PV"


// };
// firebase.initializeApp(config);


var con = {
 apiKey: "AIzaSyB2db-FYgiUFJxS9H25Sg4Z63qQqSG-61o",
    authDomain: "html-contact-form.firebaseapp.com",
    projectId: "html-contact-form",
    storageBucket: "html-contact-form.appspot.com",
    messagingSenderId: "453517683021",
    appId: "1:453517683021:web:442c0c6ff1487d82c86f04"
};
// Initialize Firebase
firebase.initializeApp(con);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
   document.querySelector('.alert').style.display = 'block';

 
  

  // console.log(cuckoo);

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}

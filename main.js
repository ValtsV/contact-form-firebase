var firebaseConfig = {
  apiKey: "AIzaSyDL5nZEkjkL8g6A1cuhk7wH191bKvpcAuk",
  authDomain: "fir-example-aa66f.firebaseapp.com",
  databaseURL: "https://fir-example-aa66f.firebaseio.com",
  projectId: "fir-example-aa66f",
  storageBucket: "fir-example-aa66f.appspot.com",
  messagingSenderId: "1067993360319",
  appId: "1:1067993360319:web:3e462bd6565755a3cee30a",
};
firebase.initializeApp(firebaseConfig);

// reference messages collection

let messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);

// submit form

function submitForm(e) {
  e.preventDefault();

  const name = getInputVal("name");
  const company = getInputVal("company");
  const email = getInputVal("email");
  const phone = getInputVal("phone");
  const message = getInputVal("message");

  //   save message

  saveMessage(name, company, email, phone, message);
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

// save message to firebase

function saveMessage(name, company, email, phone, message) {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company,
    company,
    email: email,
    phone: phone,
    message: message,
  });
}

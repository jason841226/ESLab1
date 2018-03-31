// Initialize Firebase
var config = {
  apiKey: "AIzaSyD2PqrzzHqV3ufERgB9PNlk9D1ciyQ6S1I",
  authDomain: "eslab1-92fd6.firebaseapp.com",
  databaseURL: "https://eslab1-92fd6.firebaseio.com",
  projectId: "eslab1-92fd6",
  storageBucket: "eslab1-92fd6.appspot.com",
  messagingSenderId: "141786087397"
};
firebase.initializeApp(config);
byId("login_button").addEventListener("click", function(){
  firebase.auth().signInWithEmailAndPassword(byId("account").value, byId("password").value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  switch (errorCode) {
    case "auth/invalid-email":
      alert("Invalid email.");
      break;
    case "auth/user-disabled":
      alert("This user is disabled.");
      break;
    case "auth/user-not-found":
      alert("User not found.");
      break;
    case "auth/wrong-password":
      alert("Wrong password.");
      break;
    default:
      alert(errorMessage);
  }
  console.log(error);
  });
  var errflag=0;
  var user = firebase.auth().currentUser;
  if (user != null){
    window.location.replace("https://jason841226.github.io/ESLab1/chat.html");
  }
});

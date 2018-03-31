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
    // ...
  });
  window.location.replace("https://jason841226.github.io/ESLab1/chat.html?username="+account);
});

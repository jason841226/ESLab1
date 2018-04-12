var config = {
  apiKey: "AIzaSyD2PqrzzHqV3ufERgB9PNlk9D1ciyQ6S1I",
  authDomain: "eslab1-92fd6.firebaseapp.com",
  databaseURL: "https://eslab1-92fd6.firebaseio.com",
  projectId: "eslab1-92fd6",
  storageBucket: "eslab1-92fd6.appspot.com",
  messagingSenderId: "141786087397"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    getPage('chat.htm');
  } else {
    getPage('login.htm');
  }
});
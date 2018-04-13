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
byId("sign_up_button").addEventListener("click", function(){
	firebase.auth().createUserWithEmailAndPassword(byId("email").value, byId("password").value).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
		alert(error.message);
	// ...
	});
	//TODO:redirect to "https://jason841226.github.io/ESLab1/index.html"
	window.location.replace("http://localhost:8080/Desktop/");
});

// Google Sign-in
byId("google_sign_in_button").addEventListener("click", function(){
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().useDeviceLanguage();
	firebase.auth().signInWithRedirect(provider);
	//TODO:redirect to "https://jason841226.github.io/ESLab1/index.html"
	window.location.replace("http://localhost:8080/Desktop/");
});

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

var authData = firebase.getAuth();

if (authData) {
  console.log( "Authenticated user with uid:", authData.uid);
}




var rootRef = firebase.database().ref().child('messages')
rootRef.on('child_added',function(snapshot){
	var row = byId("myTable").insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = snapshot.val().message;
	cell2.innerHTML = snapshot.val().time;
})
byId("send_button").addEventListener("click", function(){
	rootRef.push({
		message:byId("message").value,
		time:getTime()
	});
	byId("message").value = ''
});

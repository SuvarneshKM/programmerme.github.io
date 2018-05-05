(function(){
	// Initialize Firebase
const config = {
    apiKey: "AIzaSyDj0nT0tp9TANh7XeKNQH5Xfk4ZjeKU60E",
    authDomain: "programmmer-me.firebaseapp.com",
    databaseURL: "https://programmmer-me.firebaseio.com",
    projectId: "programmmer-me",
    storageBucket: "programmmer-me.appspot.com",
    messagingSenderId: "872315096155"
  };
firebase.initializeApp(config);
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignup = document.getElementById("btnSignup");
const btnLogout = document.getElementById("btnLogout");

//Login Event
btnLogin.addEventListener('click',e => {
	//get email and password
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword(email,pass);
	promise.catch(e => console.log(e.message));
});

//Signup Event
btnSignup.addEventListener('click',e=>{
	//get email and password
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(email,pass);
	promise.catch(e => console.log(e.message));
})

//Logout Event
btnLogout.addEventListener('click',e => {
	firebase.auth().signOut();
});

//Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		console.log(firebaseUser);
		btnLogout.classList.remove('invisible');
	}else{
		console.log("Not logged in");
		btnLogout.classList.add('visible');
	}
});

}())
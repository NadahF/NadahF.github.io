function updateUsername() {
	console.log("here");
	sessionStorage.set['email'] = document.getElementById('email');
	sessionStorage.set['password'] = document.getElementById('password');
	parent.location='home.html';
	return true;
}
function updateUsername() {
	console.log("here");
	sessionStorage.set['email'] = document.getElementByID('email');
	sessionStorage.set['password'] = document.getElementByID('password');
	parent.location='home.html';
	return true;
}
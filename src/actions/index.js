import axios from 'axios';

const ROOT_URL = 'http://localhost:8000';

export function signinUser({ email, password }) {
	console.log("this is the email pw", "Email:", email, "pass:", password);
	//reduxThunk gives access to dispatch function allowing us to dispatch our own actions anytime
	//return function to get direct access to dispatch
	return function(dispatch) {
		//Submit email/password to the server
		//ES6 { email: email, password: password }
		axios.post(`${ROOT_URL}/signin`, { email, password })

	//If request is good...
	// - update state to indicate user is authenticated
	// - Save the JWT token
	// - redirect to the route '/feature'

	//If the request is bad...
	//- Show an error to the user
	}
	
}
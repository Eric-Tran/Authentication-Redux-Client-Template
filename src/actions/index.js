const ROOT_URL = 'http://localhost:8000';

export function signinUser({ email, password }) {
	//reduxThunk gives access to dispatch function allowing us to dispatch our own actions anytime
	//return function to get direct access to dispatch
	return function(dispatch) {
		//Submit email/password to the server

	//If request is good...
	// - update state to indicate user is authenticated
	// - Save the JWT token
	// - redirect to the route '/feature'

	//If the request is bad...
	//- Show an error to the user
	}
	
}
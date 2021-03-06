import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';

//Es6 { form: form } as { form }
const rootReducer = combineReducers({
	form,
	auth: authReducer
});

export default rootReducer;

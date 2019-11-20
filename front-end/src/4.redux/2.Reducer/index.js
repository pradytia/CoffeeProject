import {combineReducers} from 'redux';
import registerFormReducer from './registerFormReducer';
import userReducer from './userReducer';
import loginFormReducer from './loginFormReducer'
import dataCustomerReducers from './dataCustomerReducers';



export default combineReducers({
    registerForm : registerFormReducer,
    user         : userReducer,
    loginForm    : loginFormReducer,
    data         : dataCustomerReducers
})
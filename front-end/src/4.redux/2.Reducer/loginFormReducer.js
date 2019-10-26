import { LOGIN_EMAIL_CHANGED, 
         LOGIN_PASSWORD_CHANGED,
         ON_USER_LOGIN,
         LOGIN_SUCCESS,
         LOGIN_FAILED
        } from '../type/type';

const INITIAL_STATE = {
    email   : '',
    password: '',
    loading : false
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case LOGIN_EMAIL_CHANGED:
            return{...state, email : action.payload}
        case LOGIN_PASSWORD_CHANGED:
            return{...state, password : action.payload}
        case ON_USER_LOGIN :
                return { ...state, loading: true, error: '' }
        case LOGIN_FAILED :
                return { ...state, loading: false, error: action.payload }
        case LOGIN_SUCCESS :
                return INITIAL_STATE
        
            default :
                return state
    }
}
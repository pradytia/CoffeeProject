import {REGISTER_USERNAME_CHANGED,
        REGISTER_EMAIL_CHANGED, 
        REGISTER_PASSWORD_CHANGED,
        REGISTER_CONFIRMPASSWORD_CHANGED,
        REGISTER_FAILED,
        REGISTER_SUCCESS,
        ON_USER_REGISTER} 
        from '../type/type'

const INITIAL_STATE = {
    username : '',
    email : '',
    password : '',
    confirmPassword : '',
    loading : false,
    error : '',
    success : false,
    emailSuccess : ''

}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case REGISTER_USERNAME_CHANGED :
            return {...state, username : action.payload}
        case REGISTER_EMAIL_CHANGED :
            return {...state, email : action.payload}
        case REGISTER_PASSWORD_CHANGED :
            return {...state, password : action.payload}
        case REGISTER_CONFIRMPASSWORD_CHANGED :
            return {...state, confirmPassword : action.payload}
        case REGISTER_FAILED :
            return {...state, error : action.payload}
            case ON_USER_REGISTER :
                return{ ...state, loading : true, error : ''}
        case REGISTER_SUCCESS :
            return {...INITIAL_STATE, success : true, emailSuccess : action.payload}
        default :
            return state
    }
} 
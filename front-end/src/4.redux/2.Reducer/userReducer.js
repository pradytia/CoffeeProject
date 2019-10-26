import { LOGIN_SUCCESS, LOGOUT_USER } from '../type/type';

const INITIAL_STATE = {
    id : 0,
    username : '',
    email : '',
    status : '',
    token : '',
    authChecked : false 
}

export default ( state = INITIAL_STATE , action) => {
    switch(action.type){
        case LOGIN_SUCCESS :
            return {...action.payload, authChecked : true}
        case LOGOUT_USER : 
            return {...INITIAL_STATE, authChecked : true}
        default :
        return state
    }
}

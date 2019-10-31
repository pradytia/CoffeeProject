import { ON_CUSTOMER_ADD_ADDRESS, 
         ADD_DATA_CUSTOMER_SUCCESS, 
         ADD_DATA_CUSTOMER_FAILED } from '../type/type';


const INITIAL_STATE = {
    message : '',
    loading : false
}

export default ( state = INITIAL_STATE , action) => {
    switch(action.type){
        case ON_CUSTOMER_ADD_ADDRESS :
            return {...state, loading : true }
        case ADD_DATA_CUSTOMER_SUCCESS : 
            return INITIAL_STATE
        case ADD_DATA_CUSTOMER_FAILED :
            return {...state, message : action.payload, loading : false }
        default :
        return state
    }
}
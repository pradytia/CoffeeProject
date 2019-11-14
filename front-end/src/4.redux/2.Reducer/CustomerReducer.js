import { CHECKOUT_FAILED, 
         CHECKOUT_SUCCESS, 
         CHECK_DATA_CUSTOMER,
        //  CART_QUANTITY 
        } from '../type/type';


const INITIAL_STATE = {
    error : '',
    message : '',
    cartQty : 0,
    loading : false
}


export default ( state = INITIAL_STATE , action) => {
    switch(action.type){
        case CHECK_DATA_CUSTOMER :
            return {...state, loading : true }
        case CHECKOUT_SUCCESS : 
            return INITIAL_STATE
        case CHECKOUT_FAILED :
            return {...state, message : action.payload, loading : false }
        // case CART_QUANTITY :
        //     return {...INITIAL_STATE, cartQty : action.payload}
        default :
        return state
    }
}
import { CHECKOUT_FAILED,
         CHECKOUT_SUCCESS, 
         CHECK_DATA_CUSTOMER,
         CART_QUANTITY
        } from '../type/type';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
 

export const checkDataCustomer = (id) => {
    return (dispatch) => {
        dispatch({
            type : CHECK_DATA_CUSTOMER
        })

    Axios.get(urlApi + '/user/datacustomer/' + id)
    .then(res => {
        if(res.data.length > 0){
            dispatch({
                type : CHECKOUT_SUCCESS
            })
        }else if(res.data.length === 0){
            dispatch({
                type : CHECKOUT_FAILED,
                payload : 'Silahkan isi alamat terlebih dahulu' 
            })
        }
    }).catch(err => {
        console.log(err)
    })
    }
}


export const cartLength = (length) => {
    return {
        type : CART_QUANTITY,
        payload : length
    }
}



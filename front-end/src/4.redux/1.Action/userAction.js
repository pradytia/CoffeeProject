import { LOGIN_SUCCESS, 
         LOGOUT_USER, 
        //  CART_QUANTITY 
        } from '../type/type';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';


export const confirmLogin = (user) => {
    return {
        type    : LOGIN_SUCCESS,
        payload : user
    }
}
 
export const checkKeepLogin = () => {

    return (dispatch) => {

        const token = localStorage.getItem('token')
        console.log(token)

        var options = {
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        }
        Axios.post(urlApi + '/user/keeplogin',{}, options)
        .then(res => {
            // console.log(res.data)
            localStorage.setItem('token', res.data.token)
            dispatch({
                type :  LOGIN_SUCCESS,
                payload : res.data
            })
            // Axios.get(urlApi + '/user/getcartw/' + res.data.id)
            // .then(res => {
            //     dispatch({ type: CART_QUANTITY, payload: res.data.length })
            // }).catch(err => {
            //   console.log(err)
            // })
        }) 
        .catch(err=> {
            // console.log(err.response.data)
            localStorage.removeItem('token')
            dispatch({
                type : LOGOUT_USER
            })
        })
    }
}

export const logOutUser = () => {
    localStorage.removeItem('token')
    return {
        type : LOGOUT_USER
    }
}

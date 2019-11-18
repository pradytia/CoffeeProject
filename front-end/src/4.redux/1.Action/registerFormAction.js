import {REGISTER_USERNAME_CHANGED,
        REGISTER_EMAIL_CHANGED,
        REGISTER_PASSWORD_CHANGED,
        REGISTER_CONFIRMPASSWORD_CHANGED,
        REGISTER_FAILED,
        REGISTER_SUCCESS,
        ON_USER_REGISTER
        } 
        from '../type/type';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';


export const inputRegisterUsername = (username) => {
    return {
        type : REGISTER_USERNAME_CHANGED,
        payload : username
    }
}

export const inputRegisterEmail = (email) => {
    return {
        type : REGISTER_EMAIL_CHANGED,
        payload : email
    }
}

export const inputRegisterPassword = (password) => {
    return {
        type : REGISTER_PASSWORD_CHANGED,
        payload : password
    }
}

export const inputRegisterConfrimPassword = (confirmPassword) => {
    return {
        type : REGISTER_CONFIRMPASSWORD_CHANGED,
        payload : confirmPassword
    }
}

export const registerUser = (user) => {
    return (dispatch) => {
        dispatch({
            type : ON_USER_REGISTER
        })

        if(user.username !== '' && user.email !=='' && user.password !=='' && user.confirmPassword !==''){
            if(user.password === user.confirmPassword ){
                Axios.post(urlApi + '/user/register', {
                    email : user.email,
                    password : user.password,
                    username : user.username 
                })
                .then(res => {
                    dispatch({
                        type : REGISTER_SUCCESS,
                        payload : res.data.email
                    })
                })
                .catch(err => {
                    console.log(err.response)
                    if(err.response.data.error){
                        dispatch({
                            type    : REGISTER_FAILED,
                            payload : err.response.data.message
                        })
                    }else if(!err.response.data.error){
                        dispatch({
                            type    : REGISTER_SUCCESS,
                            payload : err.response.data.email
                        })
                    }
                })
            }else{
                dispatch({
                    type : REGISTER_FAILED,
                    payload : 'Password dan Confirm Password belum sama'
                })
            }
        }else{
            dispatch({
                type : REGISTER_FAILED,
                payload : 'Mohon isi semua Form diatas'
            })
        }
    }
}
 
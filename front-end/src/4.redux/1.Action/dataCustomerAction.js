import { ADD_DATA_CUSTOMER_FAILED, 
         ADD_DATA_CUSTOMER_SUCCESS,
        ON_CUSTOMER_ADD_ADDRESS } from '../type/type';
        
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import swal from 'sweetalert';


export const addDataCustomer = (custObj) => {
    return(dispatch) => {
        dispatch({
            type    :  ON_CUSTOMER_ADD_ADDRESS
        })
        if(custObj.namaPenerima !=='' && custObj.alamat !=='' && custObj.kodePos !== '' && custObj.noHp !== ''){
            
            Axios.post(urlApi + '/user/datacustomer', custObj)
            .then(res => {
                console.log(res.data)
                dispatch({ type : ADD_DATA_CUSTOMER_SUCCESS })
                swal('Success', 'Data Berhasil Ditambahkan', 'success')
            })
            .catch(err => {
                console.log(err)
            })

        }else{
            dispatch({
                type : ADD_DATA_CUSTOMER_FAILED,
                payload : 'Mohon Lengkapi Form Di atas'
            })
        }
    }
}

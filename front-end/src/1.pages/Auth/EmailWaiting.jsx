import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import  querystring  from 'query-string';

class EmailWaiting extends Component {

    onBtnResendEmailClick = () => {
        
        var params = querystring.parse(this.props.location.search)
        console.log(params)

        Axios.post(urlApi + '/user/resendemail', { email :  params.email })
        .then(res => {
            alert(res.data.message)
        })
        .catch(err => {
            alert(err.response.data.message)
            console.log(err)
        })
    }


    render() {
        return (
            <div className='text-center'>
                <h1>Tolong Periksa Email Anda Untuk Konfirmasi!</h1>
                <h4>Klik Button Dibawah Bila Tidak Menerima Email</h4>
                <input type='button' onClick={this.onBtnResendEmailClick} value='Resend Email' className='btn btn-primary mt-5'/>              
            </div>
        );
    }
}

export default EmailWaiting;
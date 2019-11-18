import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import  querystring  from 'query-string';
import email from './email.png'

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
            <div className='text-center mt-5'>
                <img src={email} style={{width:'30%'}} alt=''/>
                <h4>Silahkan Check Email Anda Untuk Konfirmasi</h4>
                <p className='mt-5' style={{fontStyle:'italic'}}>Klik Button Dibawah Bila Tidak Menerima Email</p>
                <input type='button' onClick={this.onBtnResendEmailClick} value='Resend Email' className='btn btn-primary mt-2'/>              
            </div>
        );
    }
} 

export default EmailWaiting;
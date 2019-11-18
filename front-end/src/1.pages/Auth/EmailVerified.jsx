import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { connect } from 'react-redux';
import { confirmLogin } from '../../4.redux/1.Action';
import  querystring  from 'query-string';
import email from './emailsuccess.png'

class EmailVerified extends Component {

    state = {
        loading : true,
        message : ''
    }


    componentDidMount(){
        this.confirmEmail()
    }


    confirmEmail = () => {
        
        var params = querystring.parse(this.props.location.search)

        //tinggal penambahan express bearer token , lewat header
        // emailnya diganti menjadi token1
        // console.log(params)
        console.log(this.props.location)
       
        var options = {
            headers : {
                'Authorization' : `Bearer ${params.token}`
            }
        }

        Axios.post(urlApi + '/user/confirmemail', {}, options) 
        .then(res => {
            this.setState({ loading : false, message : 'Email berhasil di confirm' }) 
            localStorage.setItem('token', res.data.token)
            this.props.confirmLogin(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.response)
            this.setState({ loading : false , message : 'Email Gagal di Confirm '})
        })
    }

    render() {
        if(this.state.loading){
            return (
                <div className='text-center text-primary pt-5'>
                    <h1>Verifying Email, Please Wait....</h1><br/>
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
        return(
            <div className='text-center text-primary pt-5'>
                <img src={email} style={{width:'30%'}} alt=''/>
                <h3 className='mt-5'>{this.state.message}</h3>
            </div>
        )
    }
}

export default connect(null, { confirmLogin })(EmailVerified);
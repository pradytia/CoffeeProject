import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { connect } from 'react-redux';
import { confirmLogin } from '../../4.redux/1.Action';
import  querystring  from 'query-string';

class EmailVerified extends Component {

    state = {
        loading : true,
        message : ''
    }


    componentDidMount(){
        this.confirmEmail()
    }


    confirmEmail = () => {
        
        var params = querystring.parse(this.props.location)

        //tinggal penambahan express bearer token , lewat header
        // emailnya diganti menjadi token1
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
                <h1>{this.state.message}</h1>
                {/* <img src="https://media1.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif?cid=790b761158a933e63d851be5a571971caea5ab8aa16d0811&rid=giphy.gif"
                 alt='' style={{width:'200px'}}/> */}
            </div>
        )
    }
}

export default connect(null, { confirmLogin })(EmailVerified);
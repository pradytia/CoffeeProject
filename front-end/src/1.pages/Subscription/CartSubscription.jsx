import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { MDBIcon } from 'mdbreact';
import swal from 'sweetalert';

class CartSubscription extends Component {

    state = {
        listCartSubscription : [],
        inputNameChanged     : '',
        inputNumberPhone     : '',
        uploadImageSubs      : '',
        message              : ''
    }

    componentDidMount(){
        this.getListCartSubscription()
    }

    getListCartSubscription = () => {
        Axios.get(urlApi + '/subscription/getcartId/' + this.props.match.params.id)
        .then(res => {
            this.setState({ listCartSubscription : res.data })
        }).catch(err => {
            console.log(err)
        })
    }

    onBtnClickPay = () => {
        if(this.state.inputNameChanged && this.state.inputNumberPhone && this.state.uploadImageSubs){

            var formData =  new FormData();

            var options = {
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            }

            formData.append('uploadtrf', this.state.uploadImageSubs[0])
            // console.log(this.state.uploadImageSubs)

            Axios.post(urlApi + '/subscription/addintotrx/' + this.props.match.params.id, formData, options)
            .then(res => {
                swal('Payment Success','Waiting Confimation', 'success')
                window.location =  `/history/${this.props.match.params.id}`
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }else{
            this.setState({ message : 'Mohon Isi Semua Form di atas'})
        }
    }

    renderListCartSubscription = () => {
        return this.state.listCartSubscription.map((val,idx) => {
            return (
                <div className="row" key={idx}>
                    <div className="col-5">
                        <div className="justify-content-center">
                            <img src={val.image} alt='' style={{width:'80px'}}/>
                        </div>
                    </div>
                    <div className="col-5">
                    <p style={{fontWeight: 'bold'}}>{val.namapaket}</p>
                    <p className='harga mt-3'>Rp. {new Intl.NumberFormat('id-ID').format(val.harga)} </p>
                    </div>
                    <div className="col-2">
                        <MDBIcon icon="trash-alt" 
                                 className='text-center mt-4 pl-3' 
                                //  onClick={()=> this.OnBtndeleteCart(val.id)}
                        />
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 m-5 pr-5">
                        <div className="row">
                            <div className="col card">
                                <div className="card-header text-center" style={{backgroundColor:'white'}}>
                                    <h5>Paket Berlangganan Anda </h5>
                                </div>
                                <div className="card-body">
                                    {this.renderListCartSubscription()}
                                </div>
                                <div className="card-footer text-center" style={{backgroundColor:'white', fontStyle:'italic'}}>
                                    <p>Silahkan Untuk Melakukan Pembayaran >>>></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 pl-5">
                        <div className="row">
                            <div className="col card">
                                <div className="card-body">
                                   <p align='left' style={{fontWeight:'bold', marginTop: 15}}>Nama*</p>
                                        <input 
                                        style={{width:'90%', paddingLeft:10}} 
                                        type='text' 
                                        placeholder='Nama'
                                        onChange={(e)=> this.setState({ inputNameChanged : e.target.value })}
                                        />
                                    <p align='left' style={{fontWeight:'bold', marginTop: 15}}>Nomor Handphone*</p>
                                        <input 
                                        style={{width:'90%', paddingLeft:10}} 
                                        type='number'
                                        placeholder='Nomor Handphone'
                                        onChange={(e)=> this.setState({ inputNumberPhone : e.target.value })}
                                        />
                                    <p align='left' style={{fontWeight:'bold', marginTop: 15}}>Upload Bukti Transfer *</p>
                                     <input 
                                        style={{width:'90%', paddingLeft:10}} 
                                        type='file' 
                                        onChange={(e)=> this.setState({ uploadImageSubs : e.target.files })}
                                        />
                                         <p className='text-danger text-center mt-3'>{this.state.message}</p>
                                     <input 
                                            type='button' 
                                            value='PAY NOW' 
                                            className='btn btn-block btn-success mt-4' 
                                            onClick={this.onBtnClickPay}
                                      />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps)(CartSubscription);
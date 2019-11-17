import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import waiting from './waiting.png';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { connect } from 'react-redux';
import { checkKeepLogin }  from  '../../4.redux/1.Action';
import empty from './emptypayment.png';
import swal from 'sweetalert';

class Payment extends Component {

    state = {
        listTrxItem : [],
        openForm :  false,
        imageUpload : ''
    }

    componentDidMount(){
        this.getListTrxItem()
    }

  

    getListTrxItem = () => {
        Axios.get( urlApi + '/user/gettrxitem/' + this.props.match.params.id)
        .then(res => {
            this.setState({ listTrxItem : res.data })
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    addImageClick = (id) => {
        var formData =  new FormData(); 

        var options = {
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        }
        
        formData.append('uploaduser', this.state.imageUpload[0])
        // console.log(this.state.imageUpload[0])

        Axios.put(urlApi + '/user/uploadimage/' + id, formData, options)
        .then(res => {
            swal('Payment Success','Waiting Confimation', 'success')
            window.location =  `/history/${this.props.match.params.id}`
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })

    }


   renderListTrxItem = () => {
       return this.state.listTrxItem.map((val,idx) => {
           return (
                 <div key={idx}>
                        {
                            val.status === 'waiting payment'
                            ?
                            <>
                            <div className='container mt-5 text-center rounded'
                                style={{width:'600px', height:'200px', padding:'20px', border:'2px solid darkgrey', boxSizing:'border-box'}}
                                >
                            <div>
                                <p style={{color:'gray'}}>Sisa waktu pembayaran anda</p>
                                <span style={{fontSize:'60px'}} key={idx}>
                                <Countdown date={Date.now() + val.timediff}/>
                                </span>
                            </div>
                            <div className='mt-5'>
                                <h4 className='mt-5' style={{color:'grey'}}>Kode Bayar Anda :</h4>
                                <h5 style={{color:'darkorange'}}>{val.kodebayar}</h5>
                            </div>                                
                            </div>
                            <div className='mt-5'>
                                <input type='button' className='btn btn-default mt-5' value='PAY>>' 
                                onClick={()=> this.setState({ openForm : !this.state.openForm })}
                                />
                            </div>
                             <div className="row justify-content-center">       
                                {
                                    this.state.openForm 
                                    ?
                                    <>
                                        <div className="card col-md-6 m-5">
                                    <div className="card-body">
                                        <p align='left' style={{fontWeight:'bold', marginTop: 15, paddingLeft:'35px'}}>Nama*</p>
                                        <input 
                                            style={{width:'90%', paddingLeft:10}} 
                                            type='text' 
                                            placeholder='Nama'
                                            // onChange={(e)=> this.setState({ namaPenerima : e.target.value })}
                                            />
                                        <p align='left' style={{fontWeight:'bold', marginTop: 15, paddingLeft:'35px'}}>Nomor Handphone*</p>
                                        <input 
                                            style={{width:'90%', paddingLeft:10}} 
                                            type='number'
                                            placeholder='Nomor Handphone'
                                            // onChange={(e)=> this.setState({ noHp : e.target.value })}
                                            />
                                        <p align='left' style={{fontWeight:'bold', marginTop: 15, paddingLeft:'35px'}}>Kode Pembayaran *</p>
                                        <input 
                                            style={{width:'90%', paddingLeft:10}} 
                                            type='number' 
                                            placeholder='Kode Pembayaran'
                                            // onChange={(e)=> this.setState({ alamat : e.target.value })}
                                            />
                                            <p align='left' style={{fontWeight:'bold', marginTop: 15, paddingLeft:'35px'}}>Upload Bukti Transfer *</p>
                                        <input 
                                            style={{width:'90%', paddingLeft:10}} 
                                            type='file' 
                                            onChange={(e)=> this.setState({ imageUpload : e.target.files })}
                                            />
                                        <input type='button' value='PAY NOW' className='btn btn-success mt-5' onClick={()=> this.addImageClick(val.id)}/>
                                    </div>
                                    </div>                                      
                                    </>
                                    :
                                    null
                                }
                                 </div>
                             </>                                
                            :
                            null 
                        }
                  </div>
           )
       })
   } 

    render() {
            // console.log(this.state.imageUpload[0])
        return (
            <div className='text-center mt-5'>
                
                {
                      
                            this.state.listTrxItem.length > 0
                            ?
                            <>
                            <img src={waiting} alt='' style={{width:'25%'}}/> 
                            <h5 className='text-center mt-5' style={{fontStyle:'italic'}}>Segera selesaikan pembayaran anda sebelum stock habis</h5>
                                {this.renderListTrxItem()}
                            </>
                            :
                            <>
                            <img src={empty} alt='' style={{width:'25%'}}/> 
                            <h5 className='text-center mt-5' style={{fontStyle:'italic'}}>Anda belum memiliki payment, segera berbelanja !</h5>
                            </>
                }
                <div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}


export default connect(mapStateToProps, { checkKeepLogin })(Payment);
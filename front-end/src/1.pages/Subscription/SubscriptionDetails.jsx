import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { connect } from 'react-redux';
import { checkKeepLogin } from '../../4.redux/1.Action';
import swal from 'sweetalert';


class SubscriptionDetails extends Component {

    state = {
        listPaketSubscription : [],
        listDeskripsiSubscription : [],
        loading : false
    }


    componentDidMount(){
        this.getListPaketSubscription()
        this.getListDeskripsiSubscription()
        // this.props.checkKeepLogin()
    }

    getListPaketSubscription = () => {
        Axios.get(urlApi + '/subscription/paket/' + this.props.match.params.id)
        .then(res => {
            this.setState({ listPaketSubscription : res.data })
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    getListDeskripsiSubscription = () => {
        Axios.get(urlApi + '/subscription/deskripsi')
        .then(res => {
            this.setState({ listDeskripsiSubscription : res.data})
        }).catch(err => {
            console.log(err)
        })
    }

   
    addToSubscriptionCart = () => {
        let subsObj = {
            id_user : this.props.user.id,
            id_paketsubs : this.props.match.params.id,
            quantity  : 1
        }
        Axios.get(urlApi + `/subscription/getcartsubs?iduser=${this.props.user.id}`)
        .then(res => {
            if(res.data.length > 0){
                swal('Anda sudah berlangganan','Hanya bisa memiliki 1 paket langganan', 'info')
            }else{
                Axios.post(urlApi + '/subscription/addcartsubs', subsObj)
                .then(res => {
                    swal('Paket berhasil ditambahkan', 'Silahkan Lakukan Pembayaran', 'success')
                    window.location = `/subscription/cart/${this.props.user.id}`
                }).catch(err => {
                    console.log(err)
                })
            }           
        }).catch(err => {
            console.log(err)
        })
    }

    renderListPaketSubscription = () => {
        return this.state.listPaketSubscription.map(val => {
            return (
                <div className="row" key={val.id}>
                    <div className="col-md-4 pl-5">
                        <div className="card">
                            <img 
                                src={val.path_image}
                                alt='card' 
                                style={{width : '120%'}}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 style={{fontWeight:'700', color:'darkblue', fontSize:'30px', paddingTop:'1%', textAlign:'center'}}>{val.nama_paket}</h3>
                        <p align='center' style={{fontStyle:'italic', color:'black', marginTop: 16, fontWeight:'bold'}}>
                            Mulai dari Rp {new Intl.NumberFormat('id-ID').format(val.harga)}/<sub>bulan</sub>
                        </p>
                        <div className="row mt-4 pl-3">
                            <div className="col-md-12 pl-5">
                                {this.renderListDeskripsiSubscription(val.id)}
                                <h3 className='pl-5 mt-4' style={{color:'orange', fontFamily:'Helvetica'}}
                                    >Rp {new Intl.NumberFormat('id-ID').format(val.harga)}
                                </h3>
                            </div>
                            <div className="row mt-4 pl-5">
                                <div className="col-md-12 pl-5" style={{textDecoration:'none'}}>
                                    {
                                        this.props.user.username
                                        ?
                                        <input 
                                            type='button' 
                                            value='Subscribe' 
                                            style={{color:'white', textDecoration:'none'}}
                                            className='btn btn-warning btn-block'
                                            onClick={this.addToSubscriptionCart}
                                        />
                                        :
                                        <a href='/auth'>
                                          <input 
                                            type='button' 
                                            value='Subscribe' 
                                            style={{color:'white', textDecoration:'none'}}
                                            className='btn btn-warning'
                                            />
                                        </a>
                                   }
                                 </div>
                            </div>
                        </div>
                        </div>
                    </div>
            )
        })
    }

    renderListDeskripsiSubscription = (id) => {
        return this.state.listDeskripsiSubscription.map(val => {
            if(val.id_paket_subscription === id){
                return(
                        <ul key={val.id}>
                            <li style={{color:'#606060'}}>{val.deskripsi}</li>
                        </ul>
                )
            }
            return null
        })
    }

    render() {
        return (
            <div className='container mt-5'>
                {this.renderListPaketSubscription()}
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, {checkKeepLogin})(SubscriptionDetails);
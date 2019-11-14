import React, { Component } from 'react';
import './Subs.css'
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { Link } from 'react-router-dom';

class Subscription extends Component {

    componentDidMount(){
        this.getListPaketSubscription()
        this.getListDeskripsiSubscription()
    }


    state = {
        listPaketSubscription : [],
        listDeskripsiSubscription : []
    }


    getListPaketSubscription = () => {
        Axios.get(urlApi + '/subscription/paket')
        .then(res => {
            this.setState({ listPaketSubscription : res.data })
        }).catch(err => {
            console.log(err)
        })
    }

    getListDeskripsiSubscription = () => {
        Axios.get(urlApi + '/subscription/deskripsi')
        .then(res => {
            this.setState({ listDeskripsiSubscription : res.data })
        }).catch(err => {
            console.log(err)
        })
    }

    renderListPaketSubscription = () => {
        return this.state.listPaketSubscription.map((val,idx) => {
            return(
                    <div className='col-3 subscribe card m-4' key={idx}>
                    <div className="card-body">
                        <Link to={`/subscription-details/${val.id}`}>
                            <img src={val.path_image}
                                alt=''
                                style={{width:'100%'}}/>
                        </Link>
                        <h4 style={{fontWeight:'bold', color:'darkblue'}} className='mt-5 mb-4'>{val.nama_paket}</h4>
                            {this.renderDeskripsiSubscription(val.id)}
                        <h5 style={{fontStyle:'italic', color:'red', fontWeight:'bold'}}>Rp. {new Intl.NumberFormat('id-ID').format(val.harga)}/<sub>bulan</sub></h5>
                    </div>
                </div>
            )
        })
    }

    renderDeskripsiSubscription = (id) => {
        return this.state.listDeskripsiSubscription.map((val,idx) => {
            if(val.id_paket_subscription === id){
                return(
                    <ul key={idx}>
                        <li>{val.deskripsi}</li>
                    </ul>
                )
            }
            return null
        })
    }


    render() {
        return (
            <div className='container'>
                <h3 className='text-center mt-5'>Pilih Paket Berlangganan</h3>
                <div className='row mt-3 justify-content-center'>
                    {this.renderListPaketSubscription()}
                </div>
            </div>
        );
    }
}

export default Subscription;
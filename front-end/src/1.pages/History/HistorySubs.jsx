import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import historyImage from './paymentimg.png';

class HistorySubs extends Component {

    state = {
        listHistorySubs : []
    }

    componentDidMount(){
        this.getListHistorySubs()
    }

    getListHistorySubs = () => {
        Axios.get(urlApi + '/subscription/history/' + this.props.match.params.id)
        .then(res => {
            this.setState({ listHistorySubs : res.data })
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }

    renderListHistorySubs = () => {
        return this.state.listHistorySubs.map((val,idx) => {
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{val.deskripsi}</td>
                    <td>Rp. {new Intl.NumberFormat('id-ID').format(val.totalPrice)}</td>
                    <td>{val.status}</td>
                    <td>{val.tgltrx}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className='text-center'>
                    <img src={historyImage} style={{width :'30%'}} alt=''/>
                    <span style={{fontSize:'30px', fontStyle:'italic', fontWeight:'bold'}}>My  History </span>
                </div>
                <center>
                <MDBTable className='mt-5 pb-5'>
                        <MDBTableHead color="primary-color" textWhite>
                            <tr>
                                <th>No</th>
                                <th>Paket</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th>Tanggal Transaksi</th>
                            </tr>
                        </MDBTableHead >
                        <MDBTableBody>
                            {this.renderListHistorySubs()}
                        </MDBTableBody>
                    </MDBTable>
                </center>
            </div>
        );
    }
}

export default HistorySubs;
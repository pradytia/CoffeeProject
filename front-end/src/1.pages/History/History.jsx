import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import historyImage from './paymentimg.png';

class History extends Component {

    state = {
        listHistoryDetails : [],
        listHistory : [],
        openTable : false
    }

    componentDidMount(){
        this.getListHistory()
        this.getListHistoryDetails()
    }

    getListHistory = () => {
        Axios.get(urlApi + '/user/history/' + this.props.match.params.id)
        .then(res => {
            this.setState({ listHistory : res.data })
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }

    getListHistoryDetails = () => {
        Axios.get(urlApi + '/user/historydetails/' + this.props.match.params.id)
        .then(res => {
            this.setState({ listHistoryDetails : res.data })
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }

    renderListHistory = () => {
        return this.state.listHistory.map((val,idx) => {
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{val.namaPenerima}</td>
                    <td>{val.alamat}</td>
                    <td>Rp. {new Intl.NumberFormat('id-ID').format(val.totalPrice)}</td>
                    <td>{val.status}</td>
                    <td>{val.tgltrx}</td>
                </tr>
            )
        })
    }

    renderListHistoryDetails = () => {
        return this.state.listHistoryDetails.map((val,idx) => {
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{val.nama}</td>
                    <td>Rp. {new Intl.NumberFormat('id-ID').format(val.harga)}</td>
                    <td>{val.quantity}</td>
                    <td>{val.deskripsi}</td>
                    <td><img src={val.pathImg} style={{width:'80px'}} alt=''/></td>
                </tr>
            )
        })
    }


    render() {
        return (
            <div className='container mt-3'>
                <center>
                    <img src={historyImage} style={{width :'25%'}} alt=''/>
                    <span style={{fontSize:'35px', fontStyle:'italic', fontWeight:'bold'}}>My  History </span>
                    <MDBTable className='mt-5 pb-5'>
                        <MDBTableHead color="primary-color" textWhite>
                            <tr>
                                <th>No</th>
                                <th>Nama Penerima</th>
                                <th>Alamat</th>
                                <th>Total Price</th>
                                <th>Status</th> 
                                <th>Tanggal Transaksi</th>
                            </tr>
                        </MDBTableHead >
                        <MDBTableBody>
                            {this.renderListHistory()}
                        </MDBTableBody>
                    </MDBTable>
               
                    <input type='button' value='See more history details' onClick={()=> this.setState({ openTable : !this.state.openTable })}/>

                {
                    this.state.openTable
                    ?
                <MDBTable className='mt-5 pb-5'>
                        <MDBTableHead color="success-color" textWhite>
                            <tr>
                                <th>No</th>
                                <th>Nama Product</th>
                                <th>Harga</th>
                                <th>Quantity</th>
                                <th>Deskripsi</th>
                                <th>Image</th>
                            </tr>
                        </MDBTableHead >
                        <MDBTableBody>
                            {this.renderListHistoryDetails()}
                        </MDBTableBody>
                    </MDBTable>
                    :
                    null
                }
                </center>
                
            </div>
        );
    }
}

export default History;
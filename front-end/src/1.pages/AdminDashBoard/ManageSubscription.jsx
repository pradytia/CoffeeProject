import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class ManageSubscription extends Component {

    state = {
        listHistorySubscription : []
    }

    componentDidMount(){
        this.getListHistorySubs()
    }

    getListHistorySubs = () => {
        Axios.get(urlApi + '/subscription/history')
        .then(res => {
            this.setState({ listHistorySubscription : res.data })
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    
    onBtnClickConfirm = (id) => {
        Axios.put(urlApi + '/subscription/updaterole/' + id)
        .then(res =>{
            this.getListHistorySubs()
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }


    renderListHistorySubs = () => {
        return this.state.listHistorySubscription.map((val,idx) => {
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{val.id_user}</td>
                    <td>{val.deskripsi}</td>
                    <td>Rp. {new Intl.NumberFormat('id-ID').format(val.totalprice)}</td>
                    <td>{val.status}</td>
                    <td>{val.tgltrx}</td>
                    <td><img src={urlApi + `${val.uploadimage}`} style={{width:'120px'}} alt=''/></td>
                    {
                        val.status === 'Success'
                        ?
                        <td><p className='text-success'>Success</p></td>
                        :
                        <td><input type='button' value='Confirm' onClick={() => this.onBtnClickConfirm(val.id)}/></td>
                    }
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='container mt-5'>
                <center>
                <MDBTable className='mt-5 pb-5'>
                        <MDBTableHead color="primary-color" textWhite>
                            <tr>
                                <th>No</th>
                                <th>id user</th>
                                <th>Paket</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th>Tanggal Transaksi</th>
                                <th>Image Transfer</th>
                                <th>Confirm</th>
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

export default ManageSubscription;
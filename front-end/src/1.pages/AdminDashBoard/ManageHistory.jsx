import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class ManageHistory extends Component {

    state = {
        listHistoryUser : []
    }


    componentDidMount(){
        this.getListHistoryUser()
    }


    getListHistoryUser = () => {
        Axios.get(urlApi + '/user/history')
        .then(res => {
            this.setState({ listHistoryUser : res.data })
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }


    onBtnClickConfirm = (id) => {
        Axios.put(urlApi + '/user/updatestatus/' + id)
        .then(res =>{
            this.getListHistoryUser()
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }


    renderListHistoryUser = () => {
        return this.state.listHistoryUser.map((val,idx) => {
            return (
                <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{val.userId}</td>
                <td>{val.status}</td>
                <td>Rp. {new Intl.NumberFormat('id-ID').format(val.totalPrice)}</td>
                <td>{val.tgltrx}</td>
                <td><img src={urlApi + `${val.upload_image}`} style={{width:'120px'}} alt=''/></td>
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
                                <th>Status</th>
                                <th>Total Price</th>
                                <th>Tanggal Transaksi</th>
                                <th>Image Transfer</th>
                                <th>Confirm</th>
                            </tr>
                        </MDBTableHead >
                        <MDBTableBody>
                            {this.renderListHistoryUser()}
                        </MDBTableBody>
                    </MDBTable>
                </center>
            </div>
        );
    }
}

export default ManageHistory;
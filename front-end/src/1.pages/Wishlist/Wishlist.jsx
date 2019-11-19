import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import wish from './wish.png';

class Wishlist extends Component {

    state = {
        listWishlist : []
    }

    componentDidMount(){
        this.getListWishList()
    }

    getListWishList = () => {
        Axios.get(urlApi + `/product/wishlist?id_user=${this.props.user.id}`)
        .then(res => {
            this.setState({ listWishlist : res.data })
            // console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }


    renderWishList = () => {
        return this.state.listWishlist.map((val,idx) => {
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{val.nama}</td>
                    <td>{val.harga}</td>
                    <td>{val.deskripsi}</td>
                    <td><img src={val.pathImg} alt='' style={{width:'120px'}}/></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='container mt-5'>
                <center>
                    <img src={wish} style={{width :'25%'}} alt=''/>
                    <span style={{fontSize:'35px', fontStyle:'italic', fontWeight:'bold'}}>My Wishlist</span>
                    <MDBTable className='mt-5'>
                        <MDBTableHead color="danger-color" textWhite>
                            <tr>
                                <th>No.</th>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Deskripsi</th>
                                <th>Image</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.renderWishList()}
                        </MDBTableBody>
                    </MDBTable>
                </center>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps)(Wishlist);
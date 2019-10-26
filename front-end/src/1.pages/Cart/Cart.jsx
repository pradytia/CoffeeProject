import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkKeepLogin } from '../../4.redux/1.Action'

class Cart extends Component {

    state = {
      cartData : [],
      isOpen  : false
    }

    componentDidMount(){
      this.getDataCart(this.props.user.id)
      // this.props.checkKeepLogin()
    }


    getDataCart = (id) => {
    
      Axios.get(urlApi + `/user/getcart/${id}` )
      .then(res => {
        // console.log(this.props.user.id)
        this.setState({ cartData :  res.data })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    renderCartData = () => {
        return this.state.cartData.map((val,idx)=>{
          return (
            <div className='row' key={idx}>
              <div className="col-6">
            <div className="justify-content-center">
            <img style={{width:'100px'}} src={val.pathImg} className='card-img' alt='Card'/>
            </div>
              </div>
              <div className="col-6">
                <p className="nama mt-3">{val.nama}</p>
                <div className="btn-group">
                        <button type="button" className="btn btn-secondary">-</button>
                        <button type="button" className="btn btn-info">{val.quantity}</button>
                        <button type="button" className="btn btn-secondary">+</button>
                </div>
                <p className='harga mt-3'>Rp. {val.harga}</p>
              </div>
              <div className="col-2"></div>
            <p>
            </p>  
        </div>
          )
        })
    }


  render() {
    return (
      <div className='container'>
          {
            this.state.cartData.length > 0 
            ?
          
          <div className="row">       
              <div className="card col-md-6 m-5">
            
                  <div className="card-header text-center" style={{backgroundColor:'white', fontWeight:'bold'}}>
                      Alamat
                  </div>
                      <div className="card-body">
                          <p style={{fontWeight:'bold', marginTop: 15}}>Nama Penerima *</p>
                          <input style={{width:'90%', paddingLeft:10}} type='input' placeholder='Nama Penerima'/>
                          <p style={{fontWeight:'bold', marginTop: 15}}>Label Alamat *</p>
                          <input style={{width:'90%', paddingLeft:10}} type='input' placeholder='Contoh: Alamat Rumah, Alamat Kantor.'/>
                          <p style={{fontWeight:'bold', marginTop: 15}}>Kode Pos *</p>
                          <input style={{width:'90%', paddingLeft:10}} type='input' placeholder='Kode Pos'/>
                          <p style={{fontWeight:'bold', marginTop: 15}}>Nomor Handphone*</p>
                          <input style={{width:'90%', paddingLeft:10}} type='input' placeholder='Nomor Handphone'/>
                          <p style={{fontWeight:'bold', marginTop: 15}}>Label Alamat *</p>
                          <input style={{width:'90%', paddingLeft:10}} type='input' placeholder='Contoh: Alamat Rumah, Alamat Kantor.'/>
                      </div>
                      <div className="card-footer" style={{backgroundColor:'white'}}>
                          <input type='button' style={{width:'90%'}} className='btn btn-block btn-success' value='Tambahkan'/>
                      </div>
                  
                      </div>


                <div className="col-4 mt-5">
                  <div className="row">
                    <div className="col card">
                    <div className="card-header" style={{backgroundColor:'white', fontWeight:'bold'}}>
                        Ringkasan Belanja
                    </div>
                    <div className="card-body">
                        {this.renderCartData()}
                    </div>
                    <div className="card-footer" style={{backgroundColor:'white'}}>
                        Sub Total <br/>
                        Total Pembayaran
                        <input type='button' 
                        style={{width:'100%', marginTop: 30, backgroundColor:'orange', color:'white'}} 
                        className='btn'
                         value='Lanjutkan Pembayaran'/>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
          :
          <div className="mt-3 alert alert-danger">Your Cart is empty, Let's <Link style={{textDecoration: 'underline', color: 'green'}} to="/">Go Shopping</Link></div>
          }
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { checkKeepLogin }) (Cart);
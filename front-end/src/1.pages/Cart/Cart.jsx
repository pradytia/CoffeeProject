import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkKeepLogin, checkDataCustomer, addDataCustomer } from '../../4.redux/1.Action'

class Cart extends Component {

    state = {
      cartData      : [],
      cart          : [],
      totalprice    : [],
      dataCustomer  : [],
      namaPenerima  : '',
      alamat        : '',
      kodePos       : '',
      noHp          : '',
      isOpen        : false
    } 

    componentDidMount(){
      this.getDataCart()
      this.getCart()
      this.getDataCustomer()
      this.getTotalPrice()
      // this.props.checkKeepLogin()
    }


    getDataCart = () => {
      
      Axios.get(urlApi + '/user/getcartId/' + this.props.match.params.id)
      .then(res => {
        // console.log(this.props.user.id)
        this.setState({ cartData :  res.data })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    getCart = () => {
      
      Axios.get(urlApi + '/user/getcartw/' + this.props.match.params.id)
      .then(res => {
        // console.log(this.props.user.id)
        this.setState({ cart :  res.data })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    
    getDataCustomer = () => {

      Axios.get(urlApi + '/user/datacustomer/' + this.props.match.params.id)
      .then(res => {
          this.setState({ dataCustomer : res.data })
      }).catch(err=>{
        console.log(err)
      })
    }


    getTotalPrice  = () => {
      Axios.get(urlApi + '/user/totalprice')
      .then(res => {
          this.setState({ totalprice : res.data })
          console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }

    onBtnEditQty = (action, idx) => {
      let arrData = this.state.cart

      if(action === 'min'){
          if(arrData[idx].quantity > 1){
              arrData[idx].quantity -= 1
              Axios.put(urlApi + '/user/editcart/' + arrData[idx].id, arrData[idx])
              .then(res => {
                this.getDataCart(this.props.user.id)
                this.getTotalPrice()
              }).catch(err=>{
                console.log(err)
              })
          }
      }else if(action === 'max'){
        arrData[idx].quantity += 1
        Axios.put(urlApi + '/user/editcart/' + arrData[idx].id, arrData[idx])
        .then(res => {
          this.getDataCart(this.props.user.id)
          this.getTotalPrice()
        }).catch(err=>{
          console.log(err)
        })
      }
    }


    onBtnClickAlamat = () => {
      let customerObj = {
            id_user      : this.props.user.id,
            namaPenerima : this.state.namaPenerima,
            alamat       : this.state.alamat,
            kodePos      : this.state.kodePos,
            noHp         : this.state.noHp
      }
        this.props.addDataCustomer(customerObj)
    }

    renderBtnClickPembayaran = () => {
        if(this.props.check.loading){
          return (
            <>
            <div className="spinner-grow text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </>
          )
        }
        return  <input type='button' 
                  style={{width:'100%', marginTop: 30, backgroundColor:'orange', color:'white'}} 
                  className='btn'
                  value='Lanjutkan Pembayaran'
                  onClick={()=>this.props.checkDataCustomer(this.props.user.id)}/>
    }

    renderBtnAddAlamat = () => {

        if(this.props.address.loading){
          return (
            <div className='text-center'>
            <div className="spinner-grow text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          )
        }

      return  <div className="card-footer" style={{backgroundColor:'white'}}>
              <input type='button' onClick={this.onBtnClickAlamat} style={{width:'90%'}} className='btn btn-block btn-success' value='Tambahkan'/>
              </div>
    }

    renderCartData = () => {
        return this.state.cartData.map((val,idx)=>{
          return (
            <>
            
            <div className='row' key={idx}>
              <div className="col-6">
            <div className="justify-content-center">
            <img style={{width:'90px'}} src={val.pathImg} className='card-img' alt='Card'/>
            </div>
              </div>
              <div className="col-6">
                <p className="nama" style={{fontWeight: 'bold'}}>{val.nama}</p>
                <div className="btn-group">
                        <button type="button" style={{width:'20%'}} onClick={()=> this.onBtnEditQty('min', idx)} className="btn btn-secondary">-</button>
                        <button type="button" style={{width:'20%'}} className="btn btn-info">{val.quantity}</button>
                        <button type="button" style={{width:'20%'}} onClick={()=> this.onBtnEditQty('max', idx)} className="btn btn-secondary">+</button>
                </div>
                <p className='harga mt-3'>Rp. {new Intl.NumberFormat('id-ID').format(val.harga * val.quantity)} </p>
              </div>
              <div className="col-2"></div>
            
            <p>
            </p>  
         </div>
         
         </>
          )
  
        })
          
    }

    renderDataCustomer = () => {
       return this.state.dataCustomer.map((val,idx)=>{
         return(
           <>
              <div className="card-body" key={idx}>
                  <p>Nama : {val.namaPenerima}</p>
                  <p>Alamat : {val.alamat}</p>
                  <p>KodePos : {val.kodePos}</p>
                  <p>Nomor Handphone : {val.noHp}</p>

              </div>
           </>
         )
       })
    }

    renderTotalPrice = () => {
       return  this.state.totalprice.map((val,idx)=>{
          return <p key={idx}>Sub Total = Rp. {new Intl.NumberFormat('id-ID').format(val.totalPrice)}</p>
        })
    }

  render() {
    return (
      <div className='container'>
          {
            this.state.cartData.length > 0 
            ?
          
          <div className="row">       
              <div className=" col-md-6 m-5">
            
                  <div className="card-header text-center" style={{backgroundColor:'white', fontWeight:'bold'}}>
                      Alamat
                  </div>

                    {
                      this.state.dataCustomer.length > 0
                      ?
                        this.renderDataCustomer()
                      :
                      <p className='text-center'>Data anda masih kosong</p>
                    }

                       <input type='button' onClick={()=> this.setState({ isOpen : !this.state.isOpen })} style={{width:'90%'}} className='btn btn-block btn-success' value='Tambahkan'/>  

                      {
                        this.state.isOpen
                           ?
                           <>
                          <div className="card-body">
                              <p style={{fontWeight:'bold', marginTop: 15}}>Nama Penerima *</p>
                              <input 
                                  style={{width:'90%', paddingLeft:10}} 
                                  type='input' 
                                  placeholder='Nama Penerima'
                                  onChange={(e)=> this.setState({ namaPenerima : e.target.value })}
                                  />
                              <p style={{fontWeight:'bold', marginTop: 15}}>Label Alamat *</p>
                              <input 
                                  style={{width:'90%', paddingLeft:10}} 
                                  type='input' 
                                  placeholder='Contoh: Alamat Rumah, Alamat Kantor.'
                                  onChange={(e)=> this.setState({ alamat : e.target.value })}
                                  />
                              <p style={{fontWeight:'bold', marginTop: 15}}>Kode Pos *</p>
                              <input 
                                  style={{width:'90%', paddingLeft:10}} 
                                  type='input' 
                                  placeholder='Kode Pos'
                                  onChange={(e)=> this.setState({ kodePos : e.target.value })}
                                  />
                              <p style={{fontWeight:'bold', marginTop: 15}}>Nomor Handphone*</p>
                              <input 
                                  style={{width:'90%', paddingLeft:10}} 
                                  type='input'
                                  placeholder='Nomor Handphone'
                                  onChange={(e)=> this.setState({ noHp : e.target.value })}
                                  />
                          </div>
                          <p className='text-center text-danger'>{this.props.address.message}</p> 
                              {this.renderBtnAddAlamat()}
                        </>
                        :
                        null
                      }
                  
                      </div>


                <div className="col-4 mt-4">
                  <div className="row">
                    <div className="col card">
                    <div className="card-header" style={{backgroundColor:'white', fontWeight:'bold'}}>
                        Ringkasan Belanja
                    </div>
                    <div className='card-body'>
                        {this.renderCartData()}
                    </div>
                      <p className='text-center text-danger'>{this.props.check.message}</p>                        
                    <div className="card-footer" style={{backgroundColor:'white'}}>                      
                          {this.renderTotalPrice()}
                          {this.renderBtnClickPembayaran()}
                    </div>
                    </div>
                  </div>
              </div>
          </div>
          :
          <div className="mt-3 alert alert-primary">Your Cart is empty, Let's <Link style={{textDecoration: 'underline', color: 'green'}} to="/">Go Shopping</Link></div>
          }
      </div>
    );
  }
}

const mapStateToProps = ({ user, check, address }) => {
  return { user, check, address }
}

export default connect(mapStateToProps, { checkKeepLogin, checkDataCustomer, addDataCustomer }) (Cart);
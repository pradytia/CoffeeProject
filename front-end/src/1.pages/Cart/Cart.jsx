import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDataCustomer } from '../../4.redux/1.Action';
import { MDBIcon } from 'mdbreact';
import emptycart from './emptycart.png';
import price from './price.png';
import { MDBContainer, 
  MDBBtn,
  MDBModal, 
  MDBModalBody, 
  MDBModalHeader,
  MDBModalFooter } from 'mdbreact';


class Cart extends Component {

    state = {
      cartData      : [],
      cart          : [],
      totalprice    : [],
      dataCustomer  : [],
      listTrxItem   : [],
      namaPenerima  : '',
      alamat        : '',
      kodePos       : '',
      noHp          : '',
      openBtn       : false,
      modal         : false,
      loading       : false,
      message       : ''
    } 

    componentDidMount(){
      this.getDataCart()
      this.getCart()
      this.getDataCustomer()
      this.getTotalPrice()
      this.getListTrxItem()
    }


    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }

    //untuk show di card cart JOIN dgn product
    getDataCart = () => {
      
      Axios.get(urlApi + '/user/getcartId/' + this.props.match.params.id)
      .then(res => {
        // console.log(this.props.user.id)
        this.setState({ cartData :  res.data })
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    //untuk + - di card cart
    getCart = () => {
      
      Axios.get(urlApi + '/user/getcartw/' + this.props.match.params.id)
      .then(res => {
        // console.log(this.props.user.id)
        this.setState({ cart :  res.data })
        // console.log(res.data)
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
      Axios.get(urlApi + '/user/totalprice/' + this.props.match.params.id)
      .then(res => {
          this.setState({ totalprice : res.data })
      }).catch(err => {
        console.log(err)
      })
    }


    OnBtndeleteCart = (id) => {
      if(window.confirm('Yakin mau hapus ?')){
      Axios.delete(urlApi + '/user/deletecart/' + id)
      .then(res => {
        this.getDataCart()
        this.getTotalPrice()
      }).catch(err => {
        console.log(err)
      })
    }
  }

    onBtnEditQty = (action, idx) => {
      
      let arrData = this.state.cart 

      if(action === 'min'){
          if(arrData[idx].quantity > 1){
              arrData[idx].quantity -= 1
              Axios.put(urlApi + '/user/editcart/' + arrData[idx].id, arrData[idx])
              .then(res => {
                this.getDataCart()
                this.getTotalPrice()
              }).catch(err=>{
                console.log(err)
              })
          }
      }else if(action === 'max'){
        arrData[idx].quantity += 1
        Axios.put(urlApi + '/user/editcart/' + arrData[idx].id, arrData[idx])
        .then(res => {
          this.getDataCart()
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


    onBtnCheckOut = () => {
      Axios.post(urlApi + '/user/checkout/' + this.props.match.params.id)
      .then( res  => {
          window.location = `/payment/${this.props.user.id}`
      }).catch(err => {
        console.log(err)
      })
    }

    checkDataCustomer = () => {
      Axios.get(urlApi + '/user/datacustomer/' + this.props.match.params.id)
      .then(res => {
          if(res.data.length > 0){
            this.setState({ modal : true })
          }else if(res.data.length === 0){
             this.setState({ message : 'Silahkan isi alamat terlebih dahulu '})
          }
      }).catch(err => {
          console.log(err)
      })
    }


    getListTrxItem = () => {
      Axios.get(urlApi + '/user/gettrxitem/' + this.props.match.params.id)
      .then(res => {
          this.setState({ listTrxItem : res.data })
          // console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }

    renderBtnClickPembayaran = () => {
        if(this.state.loading){
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
                  style={{width:'100%', backgroundColor:'orange', color:'white'}} 
                  className='btn'
                  value='Lanjutkan Pembayaran'
                  onClick={()=>this.checkDataCustomer()}
                  />
    }

    renderBtnAddAlamat = () => {

        if(this.props.data.loading){
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

      return ( 
              <div className="card-footer" style={{backgroundColor:'white'}}>
                <input type='button' onClick={this.onBtnClickAlamat} style={{width:'90%'}} className='btn btn-block btn-success' value='Tambahkan'/>
              </div>
      )
    }

    renderCartData = () => {
        return this.state.cartData.map((val,idx)=>{
          return (
            
            <div className='row' key={idx}>
              <div className="col-6">
            <div className="justify-content-center">
            <img style={{width:'90px'}} src={val.pathImg} className='card-img' alt='Card'/>
            </div>
              </div>
              <div className="col-6">
                <p className="nama pl-3" style={{fontWeight: 'bold'}}>{val.nama}</p>
                <div className="btn-group">
                        <button type="button" style={{width:'20%'}} onClick={()=> this.onBtnEditQty('min', idx)} className="btn btn-secondary">-</button>
                        <button type="button" style={{width:'20%'}} className="btn btn-info">{val.quantity}</button>
                        <button type="button" style={{width:'20%'}} onClick={()=> this.onBtnEditQty('max', idx)} className="btn btn-secondary">+</button>
                        <MDBIcon icon="trash-alt" className='text-center mt-3 pl-3' onClick={()=> this.OnBtndeleteCart(val.id)}/>
                </div>
                <p className='harga mt-3 text-center pr-4'>Rp. {new Intl.NumberFormat('id-ID').format(val.harga * val.quantity)} </p>
                
              </div>
              <MDBContainer>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader  toggle={this.toggle}>
                                <p> Ready to payment ? </p>
                            </MDBModalHeader>
                            <MDBModalBody>
                            <div className="row justify-content-center">
                                <div className="col-3">           
                                 <img src={price} alt='' style={{width:'100px'}}/>
                                </div>
                             <div className="col-5">
                             <h5 className='mt-4 text-center'> Total Price </h5>
                             </div>
                             <div className="col mt-4">
                             <h5>{this.renderTotalPrice()}</h5>
                             </div>
                             </div>
                            </MDBModalBody>
                            <MDBModalFooter>
                            <Link to='/'  style={{textDecoration:'none'}}>
                                <MDBBtn className="btn btn-secondary">Back To Home</MDBBtn>
                            </Link>
                                <MDBBtn className="btn btn-primary" onClick={()=>this.onBtnCheckOut()}>Process</MDBBtn>
                            </MDBModalFooter> 
                        </MDBModal>
                    </MDBContainer>
            </div>
  
          )
  
        })         
    }

    renderDataCustomer = () => {
       return this.state.dataCustomer.map((val,idx)=>{
         return(
        
              <div className="card-body" key={idx}>
                  <p>Nama : {val.namaPenerima}</p>
                  <p>Alamat : {val.alamat}</p>
                  <p>KodePos : {val.kodePos}</p>
                  <p>Nomor Handphone : {val.noHp}</p>
              </div>
           
         )
       })
    }

    renderTotalPrice = () => {
       return  this.state.totalprice.map((val,idx)=>{
          return <span key={idx}>Rp. {new Intl.NumberFormat('id-ID').format(val.totalPrice)}</span>
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

                       <input type='button' onClick={()=> this.setState({ openBtn : !this.state.openBtn })} style={{width:'90%'}} className='btn btn-block btn-success' value='Tambahkan'/>  

                      {
                        this.state.openBtn
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
                          <p className='text-center text-danger'>{this.props.data.message}</p> 
                              {this.renderBtnAddAlamat()}
                        </>
                        :
                        null
                      }
                  
                      </div>


                <div className="col-4 mt-4">
                  <div className="row">
                    <div className="col card">
                    <div className="card-header text-center" style={{backgroundColor:'white', fontWeight:'bold'}}>
                        Ringkasan Belanja
                    </div>
                    <div className='card-body'>
                        {this.renderCartData()}
                    </div>
                      <p className='text-center text-danger'>{this.state.message}</p>                        
                    <div className="card-footer" style={{backgroundColor:'white'}}>
                      <div className="row"> 
                          <div className="col">
                              <p style={{fontWeight:'bold'}}>Sub Total</p>&nbsp;
                          </div>
                          <p className='pl-5' style={{fontWeight:'bold', color:'blue'}}>{this.renderTotalPrice()}</p>
                          {this.renderBtnClickPembayaran()}
                        </div>                      
                    </div>
                        
                    </div>
                  </div> 
              </div>
          </div>
          :
          <div className="text-center mt-5">
              <img src={emptycart} alt='' style={{width:'30%'}}/>      
              <h5 className='mt-4'>
                Your Cart is empty,&nbsp;  
                <Link style={{textDecoration: 'underline', color: 'green'}} to="/"> 
                 Let's Go Shopping
               </Link>
              </h5>
            </div>
          }
      </div>
    );
  }
}

const mapStateToProps = ({ user, customer, data }) => {
  return { user, customer, data }
}

export default connect(mapStateToProps, { addDataCustomer }) (Cart); 
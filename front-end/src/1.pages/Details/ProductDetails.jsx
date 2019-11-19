import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { connect } from 'react-redux';
import {  cartLength } from '../../4.redux/1.Action';
import { Link } from 'react-router-dom';
import { MDBContainer, 
        MDBBtn,
        MDBModal, 
        MDBModalBody, 
        MDBModalHeader,
        MDBModalFooter } from 'mdbreact';



class ProductDetails extends Component {

    state = {
        productDetails : [],
        cartData      : [],
        qtyInput      : 1,
        loading       : false,
        modal         : false
    }

    componentDidMount(){
        this.getProduct()
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      } 


    checkCartLength = () => {
        Axios.get(urlApi + '/user/getcartw/' + this.props.user.id)
        .then(res => {
            this.props.cartLength(res.data.length)
        }).catch(err => {
            console.log(err)
        })
    }  

    addToCart  = () => {
        this.setState({ loading: true })
        let cartObj = {
            quantity    : parseInt(this.state.qtyInput),
            id_product  : this.props.match.params.id,
            id_user     : this.props.user.id
        }
        Axios.get(urlApi + `/user/getcart?id_user=${this.props.user.id}&id_product=${this.props.match.params.id}`)
        .then(res => {
            // console.log(res.data.length)
            if(res.data.length > 0){
                cartObj.quantity =  parseInt(res.data[0].quantity) + parseInt(this.state.qtyInput)
                this.setState({ loading : false, modal : true })
                Axios.put(urlApi + '/user/editcart/' + res.data[0].id, cartObj)
                .then(res => {
                    //this.props.cartUser(this.props.id)
                    this.setState({ loading : false, modal : true })
                    // this.props.cartLength(this.props.user.id)
                    this.checkCartLength()
                })
                .catch(err=>{
                    console.log(err)
                })
            }else{
                Axios.post(urlApi + '/user/addcart', cartObj)
                .then(res=>{
                    // this.props.cartUser(this.props.id)
                    this.setState({ loading : false, modal : true })
                    // this.props.cartLength(this.props.user.id)
                    this.checkCartLength()
                })
                .catch(err=>{
                    console.log(err)
                })
            } 
        })
        .catch(err=>{
            console.log(err) 
        })
    } 

    getProduct = () => {
        Axios.get(urlApi + '/product/getproduct/' + this.props.match.params.id)
        .then(res => {
            console.log(res.data)
            this.setState({ productDetails :  res.data })
        })
        .catch(err => {
            console.log(err)
        })
    }


    renderBtnLoading = () => {

        if(this.state.loading){
            return ( 
                     <>
                    <div className="spinner-border" role="status">
                     <span className="sr-only">Loading...</span>
                    </div>
                    </>
                    )
            
        }

       return  <input onClick={this.addToCart} type='button'value='Tambah Keranjang' className='btn btn-success'/>
          
    }

    renderProduct = () => {
        return this.state.productDetails.map((val, idx)=>{
            return(
                <div className='container mt-5 pt-3' key={idx}>
                <div className="row">
                    <div className="col-md-4 pr-5 pt-2">
                        <div className="card" style={{width:'120%'}}>
                                <img className="card-img-top" src={val.pathImg} alt='card' />
                        </div>
                    </div>
                    <div className="col-md-8 pl-5">
                        <h1  style={{fontWeight:'700', color:'#606060', fontSize:'30px', paddingTop:'1%'}}>
                        {val.nama}</h1>
                        <div style={{backgroundColor : 'red',
                                     width           : '50px',
                                     height          : '22px',
                                     color           : 'white',
                                     textAlign       : 'center',
                                     display         : 'inline-block',
                                     marginTop       : '10px'
                                    }}>{0}%</div>
                        <span style={{color:"#606060",
                                      marginLeft : '15px',
                                      textDecoration : 'line-through',
                                      fontSize  : '14px', 
                                      fontWeight : '600' }}>Rp. {new Intl.NumberFormat('id-ID').format(val.harga)}</span>
                        <div style={{color: 'darkorange',
                                     fontSize:'25px', 
                                     fontWeight: '700', 
                                     marginTop:'20px'}}>Rp. {new Intl.NumberFormat('id-ID').format(val.harga - (val.harga * (0/100)))}
                                     </div>

                        <div className="row">
                            <div className="col-2">
                                <div style={{fontWeight:'700', marginTop:'15px', color:'#606060', fontSize:'15px'}}>Jumlah</div>
                                <input type='number' onChange={(e)=> this.setState({ qtyInput : e.target.value})} min={1}
                                className='form-control'  style={{marginTop:'10px', width:'60px'}}/>
                            </div>
                            <div className="col-6">
                            <div style={{fontWeight:'700', marginTop:'15px', color:'#606060', fontSize:'15px'}}>Catatan Untuk Penjual (Opsional)</div>
                                <input type='text' className='form-control' style={{marginTop:'10px'}} placeholder='Contoh: Warna Putih, Ukuran XL '/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-8">
                                <p style={{color:'#606060', fontStyle:'italic'}}>{val.deskripsi}</p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                    {
                                        this.props.user.username
                                        ?
                                        this.renderBtnLoading()
                                        :
                                        <a href='/auth'>
                                            <input type='button'value='Tambah Keranjang' className='btn btn-success'/>
                                        </a>
                                    }
                            </div>
                        </div>
                
                    </div>
                </div>
                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader  toggle={this.toggle}>
                                <p>Produk Berhasil Di Tambahkan </p>
                            </MDBModalHeader>
                            <MDBModalBody>
                            <div className="row justify-content-center">
                                <div className="col">           
                                 <img src={val.pathImg} alt='' style={{width:'100px'}}/>
                                </div>
                             <div className="col-5">
                             <h5 className='mt-4'>{val.nama.toUpperCase()}</h5>
                             </div>
                             <div className="col mt-4">
                             <h5>Rp. {new Intl.NumberFormat('id-ID').format(val.harga)}</h5>
                             </div>
                             </div>
                            </MDBModalBody>
                            <MDBModalFooter>
                            <Link to='/'  style={{textDecoration:'none'}}>
                                <MDBBtn className="btn btn-secondary">Lanjut Berbelanja</MDBBtn>
                            </Link>
                            <Link to={`/user/cart/${this.props.user.id}`}  style={{textDecoration:'none', paddingRight: 40}}>
                                <MDBBtn className="btn btn-primary">Lanjut Pembayaran</MDBBtn>
                            </Link>
                            </MDBModalFooter> 
                        </MDBModal>
                    </MDBContainer>
            </div>
            )
        })
    }

 

    render() {
        return (
            <div>
                {this.renderProduct()}
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, { cartLength }) (ProductDetails);
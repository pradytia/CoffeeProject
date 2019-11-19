import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { checkKeepLogin } from '../../4.redux/1.Action';
import notfound from './notfound.png'

class ProductSearch extends Component {

    state = {
        listSearchProduct : [],
        qtyInput : 1 
    }

    componentDidMount(){
        this.getListSearchProduct()
        this.props.checkKeepLogin()
    }

    getListSearchProduct = () => {
        Axios.get(urlApi + '/searchproduct?searching=' + this.props.location.search.split('=')[1])
        .then(res =>{
            this.setState({ listSearchProduct : res.data })
            // console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    addToCart = (val) => {
        this.setState({ loading : true })
        let cartObj = {
            quantity    : parseInt(this.state.qtyInput),
            id_user     : this.props.user.id,
            id_product  : val.id
        }
        Axios.get(urlApi + `/user/getcart?id_user=${this.props.user.id}&id_product=${val.id}`)
        .then(res=>{
            if(res.data.length > 0){
                cartObj.quantity = parseInt(res.data[0].quantity) + parseInt(this.state.qtyInput)
                this.setState({ loading : false })
                Axios.put(urlApi + '/user/editcart/' + res.data[0].id, cartObj)
                .then(res=>{
                    console.log(res.data)
                    this.setState({ loading : false })
                    swal('Add To Cart', 'Item Added To Cart', 'success')

                }).catch(err =>{
                    console.log(err)
                })  

            }else{
                Axios.post(urlApi + '/user/addcart' , cartObj)
                .then(res => {
                    console.log(res)
                    this.setState({ loading : false })
                    swal('Add To Cart', 'Item Added To Cart', 'success')
                }).catch(err=>{
                    console.log(err)
                })
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    renderListSearchProduct = () => {
        return this.state.listSearchProduct.map((val,idx) => {
            return(
                <div className='card col-md-2 m-1 mt-3' key={idx}>

            <div className="card-body">
            <Link to={'/product-details/' + val.id}>
            <img src={val.pathImg} className='card-img top img gambar' alt='Card'/>
            </Link>
            </div>

            <div className="card-footer text-center bawah">
            {/* <div className='discount'>{val.discount}%</div> */}      
            <p>
                <span className="nama mt-3">{val.nama}</span><br/>
                <span className='harga'>Rp. {new Intl.NumberFormat('id-ID').format(val.harga)}</span>
            </p>
                
                <div className=''>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span> &nbsp;
                <span style={{fontSize:'12px'}}>{val.ulasan}</span>                   
                </div>          
            </div>
            {/* <div className="">
                     <center> 
                         {
                             this.props.user.username 
                             ?
                             <h5 type='button' onClick={this.addToCart} className="fas fa-shopping-cart keranjang" style={{color:'white'}}> </h5>
                             :
                            <Link to='/auth'>
                                <h5 type='button' className="fas fa-shopping-cart keranjang" style={{color:'white'}}> </h5>
                            </Link>
                         }                      
                     </center>
            </div> */}
        </div>
            )
        })
    }


    render() {
        // console.log(this.props.user)
        // console.log(this.props.location.search.split('='))
        return (
            <div className='row mt-5 justify-content-center'>
                {
                    this.state.listSearchProduct.length > 0
                    ?
                         this.renderListSearchProduct()
                    :
                    <div className='text-center'> 
                    <img src={notfound} alt='' style={{width:'35%'}}/>
                    <h4 className='text-danger mt-5'>
                             Upss !!!
                        </h4>
                        <h5 className='text-danger'>
                             Product yang anda cari tidak ada. Silahkan coba lagi 
                        </h5>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, { checkKeepLogin })(ProductSearch);
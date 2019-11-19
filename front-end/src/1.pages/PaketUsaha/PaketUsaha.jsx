import React, { Component } from 'react';
import {
    MDBCarousel
} from
"mdbreact";
import ShowDataUsaha from './ShowDataUsaha';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { connect } from 'react-redux';
import swal from 'sweetalert';


class PaketUsaha extends Component {

    state = {
        tampungPaketUsaha : []
    }

    componentDidMount(){
        this.getDataUsaha()
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
                    // this.props.cartLength(this.props.user.id)
                }).catch(err =>{
                    console.log(err)
                })  

            }else{
                Axios.post(urlApi + '/user/addcart' , cartObj)
                .then(res => {
                    console.log(res)
                    this.setState({ loading : false })
                    swal('Add To Cart', 'Item Added To Cart', 'success')
                    // this.props.cartLength(this.props.user.id)
                }).catch(err=>{
                    console.log(err)
                })
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    getDataUsaha = () => {
        Axios.get(urlApi + '/paketusaha')
        .then(res => {
            this.setState({ tampungPaketUsaha : res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    renderPaketUsaha = () => {
        return this.state.tampungPaketUsaha.map(val => {
            return (
                <ShowDataUsaha key={val.id}
                               id = {val.id}
                               nama = {val.nama}
                               harga = {val.harga}
                               discount = {val.discount}
                               deskripsi = {val.deskripsi}
                               img = {val.pathImg}
                               fnCart = {()=> this.addToCart(val)}
                               username = {this.props.user.username}
                               />
            )
        })
    }


    render() {

            return (
                <div>
                <MDBCarousel activeItem={1} className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://s-ecom.ottenstatic.com/original/5a547c1d2e57c544352309.jpg"
                        alt="First slide"/>
                </MDBCarousel>
                
                <div className='text-center mt-5'>
                    <h2>CARI ALAT / MESIN KOPI ?</h2>
                    <h5>untuk cafe/restaurant/hotel/kantor/rumah</h5>
                    <p style={{fontWeight:'bolder'}}>Pilih paket dibawah ini ! </p>
                </div>
    
                <div className="row justify-content-center mt-4">
                {this.renderPaketUsaha()}
                </div>
         </div>
            );
     
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps) (PaketUsaha);
import React, { Component } from 'react';
import CarouselPage from '../../2.component/Carousel/Carousel';
import FlashDeal from '../../2.component/TampilanDepan/FlashDeal';
import Iklan from '../../2.component/TampilanDepan/Iklan';
import PromoHome from '../../2.component/TampilanDepan/Promo';
import './Home.css';
import axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import Brewer from '../../2.component/Brewer/Brewer';
import Equipment from '../../2.component/Equipment/Equipment';
import Gift from '../../2.component/Gift/Gift';
import Tool from '../../2.component/Tool/Tool';
import Kopi from '../../2.component/Kopi/Kopi';
import { connect } from 'react-redux';
import Axios from 'axios';
import swal from 'sweetalert';


class Home extends Component {

    
    
    state =  {
        tabMenu : 1,
        listBrewer : [],
        listEquip : [],
        listGift : [],
        listKopi : [],
        listTool : [],
        listPromo : [],
        qtyInput : 1,
        loading : false
    }

    componentDidMount(){
        this.getDataBrewer()
        this.getDataEquipment()
        this.getDataGift()
        this.getDataKopi()
        this.getDataTool()
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

    getDataBrewer = () => {
        axios.get(urlApi + '/product/getbrewer')
        .then(res => {
            this.setState({listBrewer : res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    getDataEquipment = () => {
        axios.get(urlApi + '/product/getequipment')
        .then(res => {
            this.setState({listEquip : res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    getDataGift = () => {
        axios.get(urlApi + '/product/getgift')
        .then(res => {
            this.setState({listGift : res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    getDataKopi = () => {
        axios.get(urlApi + '/product/getkopi')
        .then(res => {
            this.setState({ listKopi : res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    getDataTool = () => {
        axios.get(urlApi + '/product/gettool')
        .then(res => {
            this.setState({ listTool : res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    getDataPromo = () => {
        axios.get(urlApi + '/product/getpromo')
        .then( res => {
            this.setState({ listPromo : res.data })
        })
        .catch(err => {
            console.log(err.response.message)
        })
    }

    renderDataBrewer = () => {
       return  this.state.listBrewer.map((val,idx) => {
            return (
                <Brewer key={idx}
                        id = {val.id}
                        nama = {val.nama}
                        harga = {val.harga}
                        deskirpsi = {val.deskirpsi}
                        ulasan = {val.ulasan}
                        pathImg = {val.pathImg}
                        fnCart = {()=> this.addToCart(val)}
                        username = {this.props.user.username}
                        />
            )
        })
    }

    renderDataEquipment = () => {
        return  this.state.listEquip.map((val,idx) => {
             return (
                 <Equipment key={idx}
                         id = {val.id}
                         nama = {val.nama}
                         harga = {val.harga}
                         deskirpsi = {val.deskirpsi}
                         ulasan = {val.ulasan}
                         pathImg = {val.pathImg}
                         fnCart = {()=> this.addToCart(val)}
                         username = {this.props.user.username}
                         />
                         
             ) 
         })
     }

     renderDataGift = () => {
        return  this.state.listGift.map((val, idx) => {
             return (
                 <Gift key={idx}
                         id = {val.id}
                         nama = {val.nama}
                         harga = {val.harga}
                         deskirpsi = {val.deskirpsi}
                         ulasan = {val.ulasan}
                         pathImg = {val.pathImg}
                         fnCart = {()=> this.addToCart(val)}
                         username = {this.props.user.username}
                         />
             )
         })
     }

     renderDataKopi = () => {
        return  this.state.listKopi.map((val, idx) => {
             return (
                 <Kopi key={idx}
                         id = {val.id}
                         nama = {val.nama}
                         harga = {val.harga}
                         deskirpsi = {val.deskirpsi}
                         ulasan = {val.ulasan}
                         pathImg = {val.pathImg}
                         fnCart = {()=> this.addToCart(val)}
                         username = {this.props.user.username}
                         />
             )
         })
     }

     renderDataTool = () => {
        return  this.state.listTool.map((val, idx) => {
             return (
                 <Tool   key={idx}
                         id = {val.id}
                         nama = {val.nama}
                         harga = {val.harga}
                         deskirpsi = {val.deskirpsi}
                         ulasan = {val.ulasan}
                         pathImg = {val.pathImg}
                         fnCart = {()=> this.addToCart(val)}
                         username = {this.props.user.username}
                         />
             )
         })
     }

     renderDataPromo = () => {
         return this.state.listPromo.map((val, idx) => {
             return (
                 <PromoHome key={idx}
                            nama={val.nama}
                            harga={val.harga}
                            img={val.pathImg}/>
             )
         })
     }

    render() {
            // console.log(this.props)
        return (
            <div>
                <CarouselPage/>
                <FlashDeal/>
                <Iklan/>
                <PromoHome/>
                <div className="container mt-5  holiday" style={{fontFamily:'Apple Chancery, Comic Sans MS, Lucida Handwriting', fontStyle:'italic', fontWeight:'bold', color:'orange'}}>
                     <h3>COFFEE SHOP</h3>
                </div>

                <div className="admin-tab text-center d-flex mt-4">
                    <div style={{flex:1, borderRight:'1px solid white'}} onClick={() => this.setState({tabMenu : 1})} className='admin-tab-menu'>Brewer</div>
                    <div style={{flex:1, borderRight:'1px solid white'}} onClick={() => this.setState({tabMenu : 2})} className='admin-tab-menu'>Equipment</div>
                    <div style={{flex:1, borderRight:'1px solid white'}} onClick={() => this.setState({tabMenu : 3})} className='admin-tab-menu' >Tool</div>
                    <div style={{flex:1, borderRight:'1px solid white'}} onClick={() => this.setState({tabMenu : 4})} className='admin-tab-menu'>Kopi</div>
                    <div style={{flex:1, borderRight:'1px solid white'}} onClick={() => this.setState({tabMenu : 5})} className='admin-tab-menu'>Lainnya</div>
                </div>

                <div className="admin-content row justify-content-center mb-5 mt-4">
                    {this.state.tabMenu === 1 ? this.renderDataBrewer() : null}
                    {this.state.tabMenu === 2 ? this.renderDataEquipment() : null}
                    {this.state.tabMenu === 3 ? this.renderDataTool() : null}
                    {this.state.tabMenu === 4 ? this.renderDataKopi() : null}
                    {this.state.tabMenu === 5 ? this.renderDataGift() : null}
                </div>

                <div className='container mt-5' style={{maxWidth:'100%'}}>
                <div className="row" style={{backgroundColor:'gray'}}>
                    <div className="col-md-12">
                        <img 
                            alt='' src='https://s-ecom.ottenstatic.com/original/5b8caa7c27a45577408011.jpg'
                            style={{maxWidth:'100%', height:'auto'}}
                      />
                    </div>
                 
                </div>
            </div>


            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps) (Home);
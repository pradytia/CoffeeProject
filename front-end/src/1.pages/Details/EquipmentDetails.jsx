import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';

class EquipmentDetails extends Component {

   state = {
       equipmentDetails : []
   }

   componentDidMount(){
        this.getDataEquipment()
   }

   getDataEquipment = () => {
       Axios.get(urlApi + '/product/getequipment/' + this.props.match.params.id)
       .then(res => {
           this.setState({ equipmentDetails : res.data })
       })
       .catch(err => {
           console.log(err)
       })
   }
    
   renderEquipment = () => {
       return this.state.equipmentDetails.map(val=> {
           return(
            <div className='container mt-5 pt-3' key={val.id}>
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
                                  fontWeight : '600' }}>Rp. {val.harga}</span>
                    <div style={{color: 'darkorange',
                                 fontSize:'25px', 
                                 fontWeight: '700', 
                                 marginTop:'20px'}}>Rp. {val.harga - (val.harga * (0/100))}</div>

                    <div className="row">
                        <div className="col-2">
                            <div style={{fontWeight:'700', marginTop:'15px', color:'#606060', fontSize:'15px'}}>Jumlah</div>
                            <input type='number' className='form-control'  style={{marginTop:'10px', width:'60px'}}/>
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
                            {/* {
                                this.state.username
                                ?
                                <input type='button'value='Tambah Keranjang' className=' btn-success'/>
                                :
                          <Link to='/login' style={{textDecoration:'none'}} >
                            <input type='button'value='Tambah Keranjang' className='btn btn-success'/>
                          </Link>
                            } */}
                              <input type='button'value='Tambah Keranjang' className='btn btn-success'/>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
           )
       })
   }

    render() {
        return (
            <div>
                {this.renderEquipment()}
            </div>
        );
    }
}

export default EquipmentDetails;
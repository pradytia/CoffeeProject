import React, { Component } from 'react';
import './manageproduct.css';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';

class ManageProduct extends Component {

    state = {
        tampungProduct  : [],
        listJenis   : [],
        maxPage     : 0,
        contentPerPage : 5,
        page : 0,
        selectedEditId : 0,
        editNamaProduk    : '',
        editJenisKategori  : 0,
        editDiscount    : 0,
        editDeskripsi : '',
        editHarga   : 0,
        editImage : '',
        addNamaProduk : '',
        addJenisKategori  : '',
        addDiscount : '',
        addDeskripsi : '',
        addHarga    : '',
        addImage    : '',
        message : ''  
    }

   componentDidMount(){
       this.getDataProduct()
       this.getListJenis()
   }


    getDataProduct = () => {
        Axios.get(urlApi + '/getproducts')
        .then(res =>{
            this.setState({ tampungProduct : res.data, maxPage : Math.ceil(res.data.length / this.state.contentPerPage) -1 })
        })
        .catch(err =>{
            console.log(err)
        })
    }


    getListJenis = () => {
        Axios.get(urlApi + '/product/jenis')
        .then(res => {
            this.setState({ listJenis : res.data })
            // console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
 

    onBtnSaveEdit = (id) => {
        Axios.put(urlApi + '/product/editproduct/' + id, {
            nama : this.state.editNamaProduk,
            idJenis : this.state.editJenisKategori,
            harga : this.state.editHarga,
            discount : this.state.editDiscount,
            deskripsi : this.state.editDeskripsi,
            pathImg : this.state.pathImg
        })
        .then(res => {
            // console.log(res.data)
            this.setState({ selectedEditId : 0})
            this.getDataProduct()
        })
        .catch(err => {
            console.log(err)
        })
    }

    onBtnDelete = (id) => {
        if(window.confirm('Yakin Mau Hapus ?')){
            Axios.delete(urlApi + '/product/deleteproduct/' + id)
            .then(res => {
                this.getDataProduct()
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    onBtnAddProduct = () => {
        let product = {
            nama        : this.state.addNamaProduk,
            idJenis     : this.state.addJenisKategori,
            harga       : this.state.addHarga,
            discount    : this.state.addDiscount,
            deskripsi   : this.state.addDeskripsi,
            pathImg     : this.state.addImage
        }
        if(product.nama !=='' 
            && product.idJenis !=='' 
            && product.harga !==''
            && product.discount !==''
            && product.deskripsi !==''
            && product.pathImg !==''){
                Axios.post(urlApi + '/product/addproduct', product)
                .then(res=>{
                    console.log(res.data)
                    this.getDataProduct()
                    this.setState({ addNamaProduk : '',
                                    addJenisKategori : '',
                                    addHarga : '',
                                    addDiscount : '',
                                    addDeskripsi : '',
                                    addImage : ''})
                }).catch(err=>{
                    console.log(err)
                })
            }else{
                this.setState({ message : 'Mohon di Isi Semua kolom'})
            }
    }

    renderListJenis = () => {
        return this.state.listJenis.map((val,idx) => {
            return(
                <option key={idx} value={val.id}>{val.namaJenis}</option>
            )
        })
    }

    renderProducts = () => {
        let showData = this.state.tampungProduct.slice(this.state.page * this.state.contentPerPage, this.state.page * this.state.contentPerPage + this.state.contentPerPage)
        return showData.map((val,idx) => {
            if(val.id_product !== this.state.selectedEditId){
                return (           
                        <tr key={idx}>
                            <td>{val.id_product}</td>
                            <td>{val.nama}</td>
                            <td>{val.namaJenis}</td>
                            <td>{val.discount}</td>
                            <td>{val.deskripsi}</td>
                            <td>Rp. {new Intl.NumberFormat('id-ID').format(val.harga)}</td>
                            <td>
                                <img src={val.pathImg} alt='' style={{ width: '100px' }}/>
                            </td>
                            <td>
                                <input 
                                    type='button' 
                                    className='btn btn-default'
                                    value='Edit'
                                    onClick={()=> this.setState({ selectedEditId : val.id_product,
                                                                  editNamaProduk : val.nama,
                                                                  editJenisKategori : val.idJenis,
                                                                  editDiscount  : val.discount,
                                                                  editDeskripsi : val.deskripsi ,
                                                                  editHarga     : val.harga,
                                                                  editImage     : val.pathImg 
                                                                })}
                                    />
                            </td>
                            <td>
                                <input 
                                    type='button' 
                                    onClick={()=>this.onBtnDelete(val.id_product)}
                                    value='Delete'
                                    className='btn btn-danger'/>
                            </td>
                        </tr>
                  
                )
            }
            return(
                <tr key={idx}>
                    <td>{val.id}</td>
                    <td>
                        <input type='text' 
                               placeholder='Nama Produk' 
                               onChange={(e)=> this.setState({ editNamaProduk : e.target.value })}
                               value = {this.state.editNamaProduk}
                        />
                    </td>
                    <td>
                        <select onChange={(e)=> this.setState({ editJenisKategori : e.target.value })} value={this.state.editJenisKategori}>
                            <option value={0}>---Pilih Jenis Product---</option>
                            {this.renderListJenis()}
                        </select>
                    </td>
                    <td>
                    <input type='number' 
                               placeholder='Discount' 
                               onChange={(e)=> this.setState({ editDiscount : e.target.value })}
                               value = {this.state.editDiscount}
                               />
                    </td>
                    <td>
                    <input type='text' 
                               placeholder='Deskripsi' 
                               onChange={(e)=> this.setState({ editDeskripsi : e.target.value })}
                               value = {this.state.editDeskripsi}/>
                    </td>
                    <td>
                    <input type='number' 
                               placeholder='Harga' 
                               onChange={(e)=> this.setState({ editHarga : e.target.value })}
                               value = {this.state.editHarga}
                               />
                    </td>
                    <td>
                    <input type='text' 
                               placeholder='Image' 
                               onChange={(e)=> this.setState({ editImage : e.target.value })}
                               value = {this.state.editImage}
                               />
                    </td>
                    <td>
                        <input 
                            type='button' 
                            className='btn btn-success'
                            value='Save' 
                            onClick={()=> this.onBtnSaveEdit(val.id_product)}
                            />
                    </td>
                    <td>
                        <input 
                            type='button' 
                            className='btn btn-danger'
                            value='Cancel'
                            onClick={()=> this.setState({ selectedEditId : 0 })}
                            />
                    </td>
                </tr>
            )
        }) 
    }

    render() {
        // console.log(this.state.editNamaProduk)
        return (
            <div>
               <center>
                   <table className='mt-5 customers'>
                       <thead style={{backgroundColor : 'black'}}>
                           <tr>
                               <th>Id</th>
                               <th>Nama</th>
                               <th>Jenis Kategori</th>
                               <th>Discount</th>
                               <th>Deskripsi</th>
                               <th>Harga</th>
                               <th>Image</th>
                               <th>Edit</th>
                               <th>Delete</th>
                           </tr>
                       </thead>
                       <tbody>
                           {this.renderProducts()}
                       </tbody>
                   </table>
               </center>
                            <div className="mt-3">
                                <div className="row justify-content-center">
                                    <div className="col-4">
                                        {
                                            this.state.page === 0
                                            ?
                                            null
                                            :
                                            <input onClick={() => this.setState({page : this.state.page - 1})} value="<< Previous Page" type="button" className="btn btn-block btn-secondary"/>                                      
                                        }                                       
                                    </div>
                                    <div className="col-4">
                                        {
                                            this.state.page < this.state.maxPage
                                            ?
                                            <input onClick={() => this.setState({page : this.state.page + 1})} value="Next Page >>" type="button" className="btn btn-block btn-secondary"/>
                                            :
                                            null
                                        }
                                      
                                    </div>
                                </div>
                            </div>
                            <div className='container mt-5 pt-5'>
                    <h3 className='text-center'> Add Product </h3>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <input 
                            type='input' 
                            onChange={(e)=> this.setState({ addNamaProduk : e.target.value})} 
                            value = {this.state.addNamaProduk}
                            placeholder='Nama Produk'
                            className='form-control'
                            />
                    </div>
                    <div className="col-md-6 text-center">
                        <select onChange={(e)=> this.setState({ addJenisKategori : parseInt(e.target.value)})}>
                            <option value={0}>---Pilih Jenis produk---</option>
                            {this.renderListJenis()}
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <input 
                            type='input'
                            onChange={(e)=> this.setState({ addDiscount : parseInt(e.target.value)})}
                            // value={this.state.editDiscount}
                            placeholder='Discount' 
                            className='form-control'
                            />
                    </div>
                    <div className="col-md-6">
                        <input 
                            type='input' 
                            onChange={(e)=> this.setState({ addDeskripsi : e.target.value })}
                            value={this.state.addDeskripsi}
                            placeholder='Deskripsi' 
                            className='form-control'
                            />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <input 
                            type='input'
                            onChange={(e)=> this.setState({ addHarga : parseInt(e.target.value) })}
                            // value={this.state.editHarga} 
                            placeholder='Harga' 
                            className='form-control'
                            />
                    </div>
                    <div className="col-md-6">
                        <input 
                            type='input'
                            onChange={(e)=> this.setState({ addImage : e.target.value })}
                            value={this.state.addImage} 
                            placeholder='Image' 
                            className='form-control'
                            />
                    </div>
                </div>
                        <p className='text-danger text-center'>{this.state.message}</p>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <input 
                            type='button'
                            value='Add Product' 
                            className='btn btn-block btn-success'
                            onClick={this.onBtnAddProduct}
                            />
                    </div>
                    <div className="col-md-6">
                        <input 
                            type='button' 
                            value='Cancel' 
                            className='btn btn-block btn-danger'
                            />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default ManageProduct;
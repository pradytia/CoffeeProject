import React, { Component } from 'react';
import {
    MDBCarousel
} from
"mdbreact";
import ShowDataUsaha from './ShowDataUsaha';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';


class PaketUsaha extends Component {

    state = {
        tampungPaketUsaha : []
    }

    componentDidMount(){
        this.getDataUsaha()
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

export default PaketUsaha;
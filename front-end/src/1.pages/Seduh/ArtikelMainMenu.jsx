import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import ArtikelBox from './ArtikelBox';

class ArtikelMainMenu extends Component {

    state = {
        listArtikelBox : []
    }

    componentDidMount(){
        this.getListArtikelBox()
    }


    getListArtikelBox = () => {
        Axios.get(urlApi + '/subscription/artikel')
        .then(res => {
            this.setState({ listArtikelBox :  res.data })
        }).catch(err => {
            console.log(err)
        })
    }


    renderArtikelBox = () => {
        return this.state.listArtikelBox.map(val => {
            return (
                <ArtikelBox key = {val.id}
                            id = {val.id}
                            pathImage = {val.pathImage}
                            nama = {val.nama}
                            title = {val.title}
                            />
            )
        })
    }

    render() {
        return (
            <div>
                <h3 className='text-center mt-5' style={{fontWeight:'bold', color:'grey'}}>Belajar Seduh</h3>
                <div className='row justify-content-center mt-4'>
                    {this.renderArtikelBox()}
                </div>
            </div>
        );
    }
}

export default ArtikelMainMenu;



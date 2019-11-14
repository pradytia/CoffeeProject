import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';

class ArtikelDetails extends Component {

    state = {
        listArtikel : [],
        listMaterials : [],
        listSteps : []
    }

    componentDidMount(){
        this.getListArtikel()
        this.getListMaterial()
        this.getListSteps()
    }

    getListArtikel = ()  => {
        Axios.get(urlApi + '/subscription/artikel/' + this.props.match.params.id)
        .then(res => {
            console.log(res.data)
            this.setState({ listArtikel : res.data })
        }).catch(err => {
            console.log(err)
        })
    }   

    getListMaterial = ()  => {
        Axios.get(urlApi + '/subscription/material/' + this.props.match.params.id)
        .then(res => {
            console.log(res.data)
            this.setState({ listArtikel : res.data })
        }).catch(err => {
            console.log(err)
        })
    }   

    getListSteps = ()  => {
        Axios.get(urlApi + '/subscription/step/' + this.props.match.params.id)
        .then(res => {
            console.log(res.data)
            this.setState({ listArtikel : res.data })
        }).catch(err => {
            console.log(err)
        })
    }   


    renderListArtikel = () => {
        return this.state.listArtikel.map((val,idx) => {
            return (
                <div key={idx}>
                    <div className="col-md-6">
                        <h3 className='text-center'>{val.nama}</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}> 
                            {val.descriptions}
                        </p>
                    </div>
                    </div>
            )
        })
    }


    renderListMaterials = () => {
        return this.state.listMaterials.map((val,idx) => {
            return (
                    <div key={idx}>
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>{val.bahan}</li>
                            
                        </ul>
                    </div>
                    {/* <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Air bersuhu 79c</li>
                            <li>Scale</li>
                            <li>2-3 menit</li>
                        </ul>
                    </div> */}
                    </div>
            )
        })
    }


    renderListSteps = () => {
        return this.state.listSteps.map((val,idx) => {
            return (
                    
                    <div  key={idx}>
                        <div className="col-md-6">
                            <h3 className='text-center'>Tahapan</h3>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <ol>{val.step}</ol>
                            </ul>
                        </div>
                    </div>
            )
        })
    }


    render() {
      
        return (
            <div className=''>
               {/* <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/aeropress/aeropress-7b.jpg"
                        alt="First slide"
                        style={{height:'500px'}}/>
                </MDBCarousel>
                <div className="row mt-5 pb-5">
                    {this.renderListArtikel()}
                </div>
                {/* <div className="row mt-5 pt-5" >
                    {this.renderListMaterials()}
                </div> */}
                <div className="row mt-5 pt-5">
                    {this.renderListSteps()}
                </div>
                
                  
            </div>
        );
    }
}

export default ArtikelDetails;
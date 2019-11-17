import React, { Component } from 'react';
import Axios from 'axios';
import {MDBCarousel} from 'mdbreact';
import { urlApi } from '../../3.helpers/database';

class ArtikelDetails extends Component {

    state = {
        listArtikel : [],
        listMaterial : [],
        listStep : []
    }

    componentDidMount(){
        this.getListArtikel()
        this.getListMaterial()
        this.getListStep()
    }

    getListArtikel = () => {
        Axios.get(urlApi + '/subscription/artikel/' + this.props.match.params.id)
        .then(res => {
            this.setState({ listArtikel : res.data })
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }

    getListMaterial = () => {
        Axios.get(urlApi + '/subscription/material/' + this.props.match.params.id)
        .then(res => {
            this.setState({ listMaterial : res.data })
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    getListStep = () => {
        Axios.get(urlApi + '/subscription/step/' + this.props.match.params.id)
        .then(res => {
            this.setState({ listStep : res.data })
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    renderListArtikel = () => {
        return this.state.listArtikel.map((val,idx) => {
            return (
                <div key={idx}>
                        <MDBCarousel  className="z-depth-1 mb-5">
                                <img
                                    className="d-block w-100"
                                    src={val.pathImage}
                                    alt="First slide"
                                    style={{height:'500px'}}/>
                        </MDBCarousel>
                    <div className="row mt-5 pb-5">
                        <div className="col-md-6 mt-5">
                            <h3 className='text-center'>{val.nama}</h3>
                        </div>
                        <div className="col-md-6 pr-5 mt-5">
                        <p align='justify' style={{lineHeight: 2, fontSize:'18px'}}> 
                            {val.descriptions}
                        </p>
                    </div>
                    </div>
                </div>
            )
        })
    }

    renderListMaterial = () => {
        return this.state.listMaterial.map((val,idx) => {
            return (
                    <div className="col-md-6" key={idx}>
                        <ul style={{lineHeight: 3, fontSize:'18px'}}>
                            <li>{val.bahan}</li>
                        </ul>
                    </div>
            )
        })
    }

    renderListStep = () => {
        return this.state.listStep.map((val,idx) => {
            return (
                <div className="col-md-6" key={idx}>              
                    <p style={{fontSize : '18px', lineHeight: 2}}>
                         <span>{(idx + 1) + '. ' }</span>  
                         <span style={{fontStyle:'italic'}}>{val.step}</span> 
                    </p>               
                </div>
            )
        })
    }

    render() {
        return (
            <div>        
                {this.renderListArtikel()}
                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-6">
                     {this.renderListMaterial()}
                    </div>
                    
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>TAHAPAN</h3>
                    </div>
                    <div className="col-md-6">
                     {this.renderListStep()}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ArtikelDetails;
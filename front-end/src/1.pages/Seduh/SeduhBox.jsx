import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { Link } from 'react-router-dom'

class SeduhBox extends Component {

    state = {
        seduhBox : []
    }

    componentDidMount(){
        this.getDataSeduh()
    }

    getDataSeduh = () => {
        Axios.get(urlApi + '/subscription/seduh')
        .then(res => {
            this.setState({ seduhBox : res.data })
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    renderSeduhBox = () => {
        return this.state.seduhBox.map(val => {
            return (
                <div className='col-md-3 m-1 mt-3' >

                    <div className="">
                        <Link to={`/${val.judul}`}>
                        <img style={{width:'100%', height : '250px', borderRadius:'5%'}} src={val.pathImg}  alt=''/>           
                        </Link>              
                    <p align="center" className='mt-3'>
                        <span style={{fontWeight:'bold'}}>{val.nama}</span><br/>
                        <span style={{fontStyle:'italic'}}>{val.deskripsi}</span>
                    </p> 

                    </div>               
                </div>
            )
        })
    }

    render() {
        return (
            <>  
                 <h3 className='text-center mt-5' style={{fontWeight:'bold', color:'grey'}}>Belajar Seduh</h3>
                <div className='row justify-content-center mt-4'>
                    {this.renderSeduhBox()}
                </div>
            </>
        );
    }
}

export default SeduhBox;
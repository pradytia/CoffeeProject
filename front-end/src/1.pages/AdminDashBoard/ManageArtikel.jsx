import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';

class ManageArtikel extends Component {

    state = {
        listArtikel : []
    }

    getListArtikel = () => {
        Axios.get(urlApi + '/subscription/artikel')
        .then(res => {
            this.setState({ listArtikel :  res.data })
        }).catch(err => {
            console.log(err)
        })
    }

    renderListArtikel = () => {
        return this.state.listArtikel.map((val,idx) => {
            return (
                <tr key={idx}>

                </tr>
            )
        })
    }
 

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ManageArtikel;
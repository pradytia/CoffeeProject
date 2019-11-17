import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';

class LogActivityUser extends Component {

    state = {
        totaluserRegister : [],
        totalUserSubscription : [],
        totalUserTransaction : []
    }

    getTotalUserRegister = () => {
        Axios.get(urlApi)
    }

    getTotalUserSubscription = () => {
        Axios.get(urlApi)
    }

    getTotalUserTransaction = () => {
        Axios.get(urlApi)
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LogActivityUser;
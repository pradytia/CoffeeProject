import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';

class LogActivityUser extends Component {

    state = {
        totaluserRegister : [],
        totalUserSubscription : [],
        totalUserTransaction : []
    }

    componentDidMount(){
        this.getTotalUserRegister()
        this.getTotalUserSubscription()
        this.getTotalUserTransaction()
    }

    getTotalUserRegister = () => {
        Axios.get(urlApi + '/user/counttotaluser')
        .then(res =>{
            this.setState({ totaluserRegister : res.data })
        }).catch(err => {
            console.log(err)
        })
    }

    getTotalUserSubscription = () => {
        Axios.get(urlApi + '/user/counttotalsubs')
        .then(res =>{
            this.setState({ totalUserSubscription : res.data })
        }).catch(err => {
            console.log(err)
        })
    }

    getTotalUserTransaction = () => {
        Axios.get(urlApi + '/user/counttotaltrx')
        .then(res =>{
            this.setState({ totalUserTransaction : res.data })
        }).catch(err => {
            console.log(err)
        })
    }

    renderListTotalRegister = () => {
        return this.state.totaluserRegister.map((val,idx) => {
                return <span key={idx}>{val.total}</span>
        })
    }

    renderListTotalSubscription = () => {
        return this.state.totalUserSubscription.map((val,idx) => {
                return <span key={idx}>{val.total}</span>
        })
    }

    renderListTotalTrx = () => {
        return this.state.totalUserTransaction.map((val,idx) => {
                return <span key={idx}>{val.total}</span>
        })
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className="row">
                <div style={{flex:1, textAlign:'center'}}>
                    <h1 style={{fontSize:'70px'}}>{this.renderListTotalRegister()}</h1>
                    <h5 style={{fontStyle:'italic'}}>Total user</h5>
                </div>
                <div style={{flex:1, textAlign:'center'}}>
                    <h1 style={{fontSize:'70px'}}>{this.renderListTotalSubscription()}</h1>
                    <h5 style={{fontStyle:'italic'}}>Total Subscription</h5>
                </div>
                <div style={{flex:1, textAlign:'center'}}>
                    <h1 style={{fontSize:'70px'}}>{this.renderListTotalTrx()}</h1>
                    <h5 style={{fontStyle:'italic'}}>Total Transaction</h5>
                </div>
                </div>
            </div>
        );
    }
}

export default LogActivityUser;
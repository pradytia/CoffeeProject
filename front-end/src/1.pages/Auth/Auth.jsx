import React, { Component } from 'react';
import './Auth.css';
import Login from './Login';
import Register from './Register';

class Auth extends Component {

    state = {
        tabMenu : 1
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                <div className="auth-tab text-center d-flex mt-3">
                    <div style={{flex:1}} onClick={()=> this.setState({tabMenu : 1})} className="auth-tab-menu">Login</div>
                    <div style={{flex:1}} onClick={()=> this.setState({tabMenu : 2})} className="auth-tab-menu">Register</div>
                </div>
                </div>
                <div className="auth-content pt-4">
                    {this.state.tabMenu === 1 ? <Login/> : null}
                    {this.state.tabMenu === 2 ? <Register/> : null}

                </div>
            </div>
        );
    }
}

export default Auth;
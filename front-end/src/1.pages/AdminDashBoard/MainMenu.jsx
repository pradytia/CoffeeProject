import React, { Component } from 'react';
import ManageProduct from './ManageProduct';
import ManageHistory from './ManageHistory';
import ManageSubscription from './ManageSubscription';
import {MDBBtn, MDBBtnGroup } from "mdbreact";
import admin from './admin.png'; 
import LogActivityUser from './LogActivityUser';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


class MainMenu extends Component {

    state = {
        tabMenu : 0 
    }

    render() {
        if(this.props.user.username === ''){
            return <Redirect to='/'/>
        }
        return (
            <div className='mt-5'>
                <center>
                    <MDBBtnGroup>
                        <MDBBtn color="success" size="lg" onClick={() => this.setState({tabMenu : 1})}>
                             Manage Product 
                        </MDBBtn>
                        {/* <MDBBtn color="primary" size="lg" onClick={() => this.setState({tabMenu : 2})}>
                            Manage Berita
                        </MDBBtn> */}
                        <MDBBtn color="default" size="lg" onClick={() => this.setState({tabMenu : 3})}>
                             Subscription 
                        </MDBBtn>
                        <MDBBtn color="info" size="lg" onClick={() => this.setState({tabMenu : 4})}>
                             History Transaction 
                        </MDBBtn>
                        <MDBBtn color="warning" size="lg" onClick={() => this.setState({tabMenu : 5})}>
                             Log Activity User 
                        </MDBBtn>
                    </MDBBtnGroup>
                </center>
                {
                    this.state.tabMenu === 0  
                    ?
                    <div className='text-center mt-5'>
                        <h5>Welcome to Admin Dashboard </h5>
                        <img src={admin} alt='' style={{width:'32%'}}/>
                    </div>
                    :
                    <div className="">
                        {this.state.tabMenu === 1 ? <ManageProduct/> : null}
                        {/* {this.state.tabMenu === 2 ? <div className='text-center mt-5'>
                        <h5>Welcome to Admin Dashboard </h5>
                        <img src={admin} alt='' style={{width:'32%'}}/>
                         </div> : null} */}
                        {this.state.tabMenu === 3 ? <ManageSubscription/> : null}
                        {this.state.tabMenu === 4 ? <ManageHistory/> : null}
                        {this.state.tabMenu === 5 ? <LogActivityUser/> : null}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps) (MainMenu);
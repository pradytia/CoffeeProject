import React, { Component } from 'react';
import {MDBBtn, MDBBtnGroup, MDBNavLink } from "mdbreact";
import { connect } from 'react-redux';
import mainhistory from './mainhistory.png'; 

class MainMenuHistory extends Component {

    render() {
        return (
            <div className='container mt-5'>
                <center>
                    <MDBBtnGroup>
                        <MDBBtn color="" size="lg">
                            <MDBNavLink to={`/history/${this.props.user.id}`}> History Product </MDBNavLink>
                        </MDBBtn>
                        <MDBBtn color="" size="lg">
                            <MDBNavLink to={`/historysubs/${this.props.user.id}`}> History Subscription </MDBNavLink>
                        </MDBBtn>
                        <MDBBtn color="" size="lg">
                            <MDBNavLink to={`/payment/${this.props.user.id}`}> Payment </MDBNavLink>
                        </MDBBtn>
                    </MDBBtnGroup>
                </center>
                <div className='text-center mt-5'>
                    <img src={mainhistory} alt='' style={{width:'32%'}}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({ user }) => {
    return { user }
}
 
export default connect(mapStateToProps) (MainMenuHistory);
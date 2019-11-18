import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {connect} from 'react-redux';
import {inputRegisterUsername, 
        inputRegisterEmail, 
        inputRegisterPassword, 
        inputRegisterConfrimPassword,
        registerUser} from '../../4.redux/1.Action';
import {Redirect} from 'react-router-dom';



class Register extends Component {


  onBtnRegisterClick = () => {
    this.props.registerUser(this.props.registerForm)
  }
 
  renderButtonRegister = () => {
    if(this.props.registerForm.loading){
        return (
          <>
          <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
              <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
              <span className="sr-only">Loading...</span>
          </div>
      </>
        )
    }
    return <MDBBtn color="success" onClick={this.onBtnRegisterClick} className='btn btn-block'>Register</MDBBtn>
  }

  render() {

    if(this.props.user.username !== '') {
      return <Redirect to="/" />
    }


    if(!this.props.registerForm.success){

      const {username, email, password, confirmPassword} = this.props.registerForm
    return (
      <MDBContainer>
      <MDBRow className='justify-content-center mt-4 pt-4'>
      <MDBCol md="5">
        <MDBCard>
          <MDBCardBody>
            <form>
              <p className="h4 text-center py-4">Sign up</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  onChange={(e)=> this.props.inputRegisterUsername(e.target.value)}
                  value={username}
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  onChange={(e)=> this.props.inputRegisterEmail(e.target.value)}
                  value={email}
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your Password"
                  icon="exclamation-triangle"
                  group
                  onChange={(e)=> this.props.inputRegisterPassword(e.target.value)}
                  value={password}
                  type="password"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Confirm Your password"
                  icon="lock"
                  group
                  onChange={(e)=> this.props.inputRegisterConfrimPassword(e.target.value)}
                  value={confirmPassword}
                  type="password"
                  validate
                />
              </div>
              <p className='text-danger text-center'>
                  {this.props.registerForm.error}
              </p>
              <div className="text-center">
                  {this.renderButtonRegister()}
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
      

    );
    } 
      return <Redirect to={`/waitingemail?email=${this.props.registerForm.emailSuccess}`}/>
  } 
}

const mapStateToProps = ({ registerForm, user }) => {
  return { registerForm , user}
}

export default connect(mapStateToProps, {inputRegisterUsername, inputRegisterPassword, inputRegisterEmail,
   inputRegisterConfrimPassword, registerUser}) (Register);
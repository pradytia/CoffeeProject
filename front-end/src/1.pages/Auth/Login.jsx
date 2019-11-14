import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBModalFooter } from 'mdbreact';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { inputLoginEmail, inputLoginPassword, loginUser, checkKeepLogin } from '../../4.redux/1.Action';
import { Redirect } from 'react-router-dom';


class LoginPage extends Component {

  


  onBtnLoginClick = () => {
    this.props.loginUser(this.props.loginForm) 
  }

  renderButtonLogin = () => {
    if(this.props.loginForm.loading) {
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

    return <input type='button' value='Login' className='btn btn-success btn-block' onClick={this.onBtnLoginClick}/>
  } 

    render() {
      if(this.props.user.username !== ''){
        return <Redirect to="/" exact /> 
      }
      
      const {email, password} = this.props.loginForm

    return (
            <MDBContainer>
      <MDBRow className='justify-content-center mt-4 pt-4'>
        <MDBCol md="5">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                group
                value={email}
                onChange={(e)=> this.props.inputLoginEmail(e.target.value)}
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                group
                value={password}
                onChange={(e)=> this.props.inputLoginPassword(e.target.value)}
                type="password"
                validate
                containerClass="mb-0"
              />
               <p className="text-danger text-center">
                      {this.props.loginForm.error}
                </p>
              <div className="text-center mb-3">
              <div className="text-center">
                      {this.renderButtonLogin()}
              </div>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                </p>
                <Link to='/register'>
                <p className="blue-text ml-1">
                  Sign Up
                </p>
                </Link>
            
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>


        );
    }
}

const mapStateToProps = ({ loginForm, user }) => {
  return { loginForm, user }
}

export default connect(mapStateToProps, { inputLoginEmail, inputLoginPassword, loginUser, checkKeepLogin })(LoginPage);
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { connect } from 'react-redux';
import { logOutUser, cartLength } from '../../4.redux/1.Action';
// import Axios from "axios";
// import { urlApi } from "../../3.helpers/database";
// import Axios from "axios";
// import { urlApi } from "../../3.helpers/database";


class NavbarComp extends Component {

  state = {
    isOpen: false,
    valueSearch : ''

    };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
    
  }

  onBtnEnterSearch = (e) => {
    if(e.key === 'Enter' && this.state.valueSearch !== ''){
        window.location = `/searchproduct?searching=${this.state.valueSearch}`
    }
  }


  // componentWillReceiveProps(){
  //   if(this.props.user.username){
  //     Axios.get(urlApi + '/user/getcartw/' + this.props.user.id)
  //     .then(res => {
  //       this.props.cartLength(res.data.length)
  //       console.log(res.data.length)
  //     }).catch(err => {
  //       console.log(err)
  //     })
  //   }
  // }

render() {
  // console.log(this.props.user.id)
  return (
      <MDBNavbar color="default-color"  dark expand="xl">
        <MDBNavbarBrand>
          <MDBNavLink to="/">
            <strong className="yellow-text bold italic">Coffee</strong>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
             
        {
              this.props.user.role === 'userpremium'
              ?
              <MDBNavbarNav left>
                <MDBNavItem className='pr-3'>
                  <MDBNavLink to="/artikel">Artikel</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className='pr-3'>
                  <MDBNavLink to="/video">Video</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/paketusaha">Business</MDBNavLink>
                </MDBNavItem>
                {/* <MDBNavItem>
                  <MDBNavLink to="#!">Coffee Shop</MDBNavLink>
                </MDBNavItem> */}
              </MDBNavbarNav>
              :
              <MDBNavbarNav left>
              <MDBNavItem active className='pr-3'>
                <MDBNavLink to="/subscription">Subscription</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/paketusaha">Business</MDBNavLink>
              </MDBNavItem>
              {/* <MDBNavItem>
                <MDBNavLink to="#!">Coffee Shop</MDBNavLink>
              </MDBNavItem> */}
            </MDBNavbarNav>
          }

          {
            this.props.user.username === ''

            ?

            <MDBNavbarNav right>
             <MDBNavItem>
                <div className="sm-form my-0 pr-4">
                  <input 
                      style={{backgroundColor:'white'}}
                      onChange={(e)=> this.setState({ valueSearch : e.target.value })} 
                      onKeyUp={this.onBtnEnterSearch}
                      className="form-control rounded" type="text" 
                      placeholder=" Search"
                       />
                </div>       
            </MDBNavItem>
            <MDBNavItem active className='pr-2'>
              <MDBNavLink to='/auth'>Login</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          :

          <MDBNavbarNav right>
              <MDBNavItem>
                <div className="sm-form my-0 pr-4">
                  <input 
                      style={{backgroundColor:'white'}}
                      onChange={(e)=> this.setState({ valueSearch : e.target.value })} 
                      onKeyUp={this.onBtnEnterSearch}
                      className="form-control rounded" type="text" 
                      placeholder=" Search"
                       />
                </div>       
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to={`/user/cart/${this.props.user.id}`}>
               <MDBIcon icon="shopping-cart" />
                  <span style={{padding: 7}}>
                      {/* <sup>{this.props.customer.cartQty}</sup> */}
                    </span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              {
                  this.props.user.role === 'admin'
                  ?
                  <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user-alt"/> 
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem>
                    <MDBIcon icon="user-circle"/> &nbsp; 
                      <span style={{fontStyle:'italic'}}>{this.props.user.username}</span>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBNavLink style={{color : 'black'}}  to='/admindashboard'>Admin Dashboard</MDBNavLink>   
                    </MDBDropdownItem>
                    <MDBDropdownItem onClick={this.props.logOutUser}>
                      <MDBNavLink to='/' style={{color : 'black'}}>
                          Logout
                      </MDBNavLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                  :
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user-alt"/> 
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem>
                  <MDBIcon icon="user-circle"/> &nbsp; 
                    <span style={{fontStyle:'italic'}}>{this.props.user.username}</span>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBNavLink style={{color : 'black'}} to={`/user/cart/${this.props.user.id}`}>Cart</MDBNavLink>
                 </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBNavLink style={{color : 'black'}}  to='/mainmenuhistory'>History</MDBNavLink>   
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={this.props.logOutUser}>
                    <MDBNavLink to='/' style={{color : 'black'}}>
                        Logout
                    </MDBNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              }
            </MDBNavItem>
          </MDBNavbarNav>
          }

        </MDBCollapse>
      </MDBNavbar>
  
    );
  }
}

const mapStateToProps = ({ user, loginForm, customer }) => {
  return { user, loginForm, customer }
}

export default connect(mapStateToProps, { logOutUser, cartLength})(NavbarComp);
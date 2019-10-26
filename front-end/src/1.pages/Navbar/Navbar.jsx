import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { connect } from 'react-redux';
import { logOutUser } from '../../4.redux/1.Action';


class NavbarComp extends Component {

  state = {
    isOpen: false

    };

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  
  return (
      <MDBNavbar color="default-color"  dark expand="xl">
        <MDBNavbarBrand>
          <strong className="yellow-text bold italic">CrazyCoff</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/paketusaha">Paket usaha</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Coffee Shop</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          {
            this.props.user.username === ''

            ?

            <MDBNavbarNav right>
            <MDBNavItem active className='pr-3'>
              <MDBNavLink to="/login">Berlangganan</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to='/auth'>Login</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          :

          <MDBNavbarNav right>
            <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="/user/cart">
              <MDBIcon icon="shopping-cart" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="">
                Hello, {this.props.user.username}                 
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" /> 
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem>
                    <MDBNavLink style={{color : 'black'}} to="/user/cart">Cart</MDBNavLink>
                 </MDBDropdownItem>
                  <MDBDropdownItem to="/history">History </MDBDropdownItem>
                  {/* <MDBDropdownItem href="#!">Something else here</MDBDropdownItem> */}
                  <MDBDropdownItem onClick={this.props.logOutUser}>Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          }
        </MDBCollapse>
      </MDBNavbar>
  
    );
  }
}

const mapStateToProps = ({ user, loginForm }) => {
  return { user, loginForm }
}

export default connect(mapStateToProps, { logOutUser })(NavbarComp);
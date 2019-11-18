import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import './footer.css'

const FooterPage = () => {
  return (
    <MDBFooter  color="default-color" className="font-small pt-4 mt-4 footer">
      <MDBContainer  className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title mt-5">COFFEE SHOP</h5>
            <p style={{fontStyle:'italic'}}>
              Good communication starts from coffee
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact Us</h5>
            <ul style={{lineHeight: 3, fontSize:'15px'}}>
              <li className="list-unstyled">
                <MDBIcon fab icon="facebook" />&nbsp; Coffe@gmail.com
              </li>
              <li className="list-unstyled">
                <MDBIcon fab icon="whatsapp" />&nbsp; 0876632616111
              </li>
              <li className="list-unstyled">
                <MDBIcon fab icon="instagram" />&nbsp; CrazyCoffee
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Email</a>
              </li> */}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://localhost:3000"> COFFEE ALL RIGHTS RESERVED </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
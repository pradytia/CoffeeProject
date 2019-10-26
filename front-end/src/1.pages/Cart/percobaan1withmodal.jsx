import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Player } from 'video-react';

class percobaan extends Component {
state = {
  modal: false,
  cartData : [],
  isCheckout : false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <div className="container">

                    <>
                <table className="table mt-3 text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>

               
                    <div className="row">
                    <div className="col-8">
                         <MDBBtn onClick={this.toggle}>CheckOut</MDBBtn>
                    </div>
                    <div className="col-4">
                    <h3>Total Harga = Rp. </h3>
                    </div>
                     </div>
                 
                        <MDBContainer>
                      
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                          <MDBModalHeader toggle={this.toggle}>Checkout</MDBModalHeader>
                          <MDBModalBody>
                              <Player
                                  playsInline
                                  poster="/assets/poster.png"
                                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                              />
                          </MDBModalBody>
                          <MDBModalFooter center>
                            <MDBBtn color="primary" className='btn btn-block'>Pay</MDBBtn>
                          </MDBModalFooter>
                        </MDBModal>
                      </MDBContainer>
              
                    
                </>
                   

              
            </div>
    );
  }
}

export default percobaan;
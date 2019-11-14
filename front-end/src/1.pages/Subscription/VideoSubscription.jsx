import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';

class VideoSubscription extends Component {

    state = {
        listVideo : []
    }

    componentDidMount(){
        this.getListVideo()
    }

    getListVideo = () => {
        Axios.get(urlApi + '/subscription/video')
        .then(res => {
            this.setState({ listVideo : res.data })
            // console.log()
        }).catch(err => {
            console.log(err)
        })
    }

    renderListVideo = () => {
        return this.state.listVideo.map((val,idx) => {
            return (
                <MDBCol md='4' key={idx}>
                    <figure>
                        <iframe
                            title='video'
                            src={val.urlvideo}
                            className='embed-responsive-item'
                            allowFullScreen
                            style={{width : '350px', height : '250px'}}
                            />
                    </figure>
                </MDBCol>
            )
        })
    }

    render() {
        return (
            <div className='mt-5'>
                <MDBContainer>
                    <MDBRow>
                        {this.renderListVideo()}
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default VideoSubscription;
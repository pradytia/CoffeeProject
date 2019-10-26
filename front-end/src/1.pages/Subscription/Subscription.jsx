import React, { Component } from 'react';
import './Subs.css'

class Subscription extends Component {
    render() {
        return (
            <>
                <h3 className='text-center mt-5'>Pilih Paket Berlangganan</h3>
                <div className='row mt-3 justify-content-center'>
                <div className='col-3 subscribe card m-4'>
                    <img src='https://s-subs.ottenstatic.com/thumbnail/5d00c0b9c3fad749786278.png' alt=''/>
                </div>
                <div className='col-3 subscribe card m-4'>
                <img src='https://s-subs.ottenstatic.com/thumbnail/5d00c0b9c3fad749786278.png' alt=''/>
                </div>
                <div className='col-3 subscribe card m-4'>
                <img src='https://s-subs.ottenstatic.com/thumbnail/5d00c0b9c3fad749786278.png' alt=''/>
                </div>
                </div>
            </>
        );
    }
}

export default Subscription;
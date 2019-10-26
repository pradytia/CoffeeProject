import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class Aeropress extends Component {

    state = {
        test : `AEROPRESS diciptakan oleh Alan Adler seorang penemu asal Amerika yang juga merupakan dosen jurusan teknik mesin di Stanford University
        dan staf pengajar di NASA. Ia melibatkan berbagai percobaan yang menghasilkan sekitar 30 prototypes sebelum akhirnya memperkenalkan
        desain final Aeropress pada event Coffee Feast Seattle di November pada 2005 silam. Yang menarik dari teknik Aeropress adalah adanya
        penggunaan tekanan udara pada saat menyeduh kopi.
        Teknik tekanan udara ini dianggap salah satu keunggulan Aeropress karena bisa meningkatkan ektraksi rasa pada kopi.`
    }
    
    render() {
        console.log(this.state.test.length)
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/aeropress/aeropress-7b.jpg"
                        alt="First slide"
                        style={{height:'50%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>AEROPRESS</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  AEROPRESS diciptakan oleh Alan Adler seorang penemu asal Amerika yang juga merupakan dosen jurusan teknik mesin di Stanford University
                             dan staf pengajar di NASA. Ia melibatkan berbagai percobaan yang menghasilkan sekitar 30 prototypes sebelum akhirnya memperkenalkan
                             desain final Aeropress pada event Coffee Feast Seattle di November pada 2005 silam. Yang menarik dari teknik Aeropress adalah adanya
                             penggunaan tekanan udara pada saat menyeduh kopi.
                             Teknik tekanan udara ini dianggap salah satu keunggulan Aeropress karena bisa meningkatkan ektraksi rasa pada kopi.
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Satu set aeropress</li>
                            <li>20 gram biji kopi</li>
                            <li>Grinder</li>
                            <li>Ketel</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                             <li>Air bersuhu 79c</li>
                            <li>Scale</li>
                            <li>2-3 menit</li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Tahapan</h3>
                    </div>
                    <div className="col-md-6">
                    <h3  align='left'>Step 1</h3>
                    <p className='pt-2 pb-3'>Giling 20 gram biji kopi di level medium coarse. Siapkan air panas bersuhu 79°Celcius.</p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>Masukkan filter kertas ke dalam filter cap. Lalu basahi hingga merata. 
                                            Jangan lupa membuang air sisa bilasan.
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>Masukkan bubuk kopi yang telah digiling ke dalam Aeropress.
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>Tuangkan 60 gram air. Lalu biarkan blooming selama 15 detik.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>Aduk kopi dalam Aeropress dengan stirrer sekitar 5 putaran.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>Tambahkan sisa air hingga hampir penuh.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>Tutup filter, kencangkan filter cap pada Aeropress. Balikkan.
                    </p>
                    <h3  align='left'>Step 8</h3>
                    <p className='pt-2 pb-3'>Tekan/press selama 45 detik.
                    </p>
                    <h3  align='left'>Step 9</h3>
                    <p className='pt-2 pb-3'>Stop pada saat kopi di dalam Aeropress berada sekitar 1/2 hingga 1 cm pada dasar Aeropress. Angkat Aeropress.
                    </p>
                    <h3  align='left'>Step 10</h3>
                    <p className='pt-2 pb-3'>Tuangkan kopi ke dalam cangkir. Sajikan.
                    </p>
                    
                    </div>
                </div>
                
                  
            </div>
        );
    }
}

export default Aeropress;
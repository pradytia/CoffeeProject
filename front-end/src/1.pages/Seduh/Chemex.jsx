import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class Chemex extends Component {
    render() {
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/chemex/chemex-1a.jpg"
                        alt="First slide"
                        style={{height:'30%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>CHEMEX</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  
                        CHEMEX diciptakan pada 1941 oleh seorang ahli kimia eksentrik asal Jerman bernama Dr. Peter Schlumbohm. 
                        Alat seduh ini telah meraih banyak sekali penghargaan salah satunya dari dunia sains dan seni. 
                        Untuk cita rasa kopi yang dihasilkan Chemex, Schlumbohm telah melakukan eksperimen secara mendalam.
                         Ia menggunakan kertas filter khusus yang dilipat dua (double) agar kopi dapat terekstraksi secara sempurna 
                         pada berlangsungnya proses penyeduhan. 
                        Chemex merupakan perpaduan antara “sains, kenikmatan cita rasa dan kejeniusan desain dari penemunya”.
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>1 set Chemex</li>
                            <li>24 gram biji kopi</li>
                            <li>Ketel</li>
                            <li>Grinder</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                             <li>Air bersuhu 87C</li>
                            <li>Scale</li>
                            <li>+3 menit</li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Tahapan</h3>
                    </div>
                    <div className="col-md-6">
                    <h3  align='left'>Step 1</h3>
                    <p className='pt-2 pb-3'>Lipat filter kertas dan letakkan di atas carafe</p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>
                        Basahi filter kertas hingga merata untuk membuang residu yang bisa mengganggu cita rasa kopi.
                        Jangan lupa untuk membuang air hasil bilasan.
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>
                         Masukkan bubuk kopi ke dalam Chemex.
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>
                         Letakkan Chemex di atas scale, pastikan ukuran scale telah berada di titik netral.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>
                        Tuang air dengan gerakan melingkar dari pinggir ke tengah sampai berat air mencapai 50 gram dalam 30 detik, 
                        agar proses blooming dan ekstraksi terjadi dengan sempurna.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>
                         Setelah 30 detik tuang kembali air hingga mencapai berat 100 gram di 60 detik berikutnya.
                         Lanjutkan proses pouring hingga berat air mencapai kira-kira 320 gram.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>
                         Angkat filter kertas dari carafe Chemex
                    </p>
                    <h3  align='left'>Step 8</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan kopi ke dalam cangkir. Sajikan.
                    </p>
                    </div>
                </div>
                
                  
            </div>
        );
    }
}

export default Chemex;
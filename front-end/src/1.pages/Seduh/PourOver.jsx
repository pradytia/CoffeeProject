import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class PourOver extends Component {
    render() {
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/pour-over/pour-over-4.jpg"
                        alt="First slide"
                        style={{height:'30%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>POUR OVER</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  
                        METODE pour over merupakan salah satu teknik yang paling digemari dalam jajaran pilihan seduh manual. 
                        Konsepnya yang tidak menggunakan mesin dan peralatan listrik dianggap keunggulan yang menjadikan momen 
                        menyeduh kopi menjadi seumpama ritual, setiap detiknya begitu syahdu dan tidak terburu-buru. 
                        Hasil yang didapatkan oleh metode seduh pour over pun cenderung lebih seimbang, ringan dan kaya karakter
                        sehingga menjadikannya semakin favorit. Kini salah satu alat seduh untuk metode pour over yang kian populer 
                        adalah Kinto brewer yang mengusung semangat slow coffee style pada pour over.                 
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Satu set Kinto coffee brewer dan server</li>
                            <li>Biji kopi</li>
                            <li>Grinder</li>
                            <li>Kinto pour over kettler</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Kinto paper filter</li>
                            <li>Scale</li>
                            <li>3 menit</li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Tahapan</h3>
                    </div>
                    <div className="col-md-6">
                    <h3  align='left'>Step 1</h3>
                    <p className='pt-2 pb-3'>
                        Lipat filter kertas, lalu letakkan di atas dripper.
                    </p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>
                        Basahi filter dan dripper untuk membersihkan sekaligus memanaskannya.
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>
                        Giling sekitar 17 gram biji kopi dalam level medium.
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>
                         Masukkan bubuk kopi ke dalam dripper, ratakan permukaan bubuk kopi terlebih dahulu.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>
                        Tempatkan dripper pada server dan letakkan di atas scale, dan tara ukuran pada scale ke titik nol/netral.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan air dengan gerakan spiral dan searah jarum jam. Pouring pertama, tuangkan 70 ml air dalam 30 detik.
                        Biarkan blooming sekitar 6-7 detik. Setelahnya tuangkan kembali air hingga 120 ml hingga menit ke 01.00.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan air hingga mencapai 180-200 ml pada menit ke 01:30. Biarkan jede kembali sekitar 6-7 detik. 
                        Tuangkan sisa air hingga mencapai berat akhir sekitar 230-250 gram pada menit 02:00 - 02:15.
                    </p>
                    <h3  align='left'>Step 8</h3>
                    <p className='pt-2 pb-3'>
                        Angkat dripper. Hentikan pengukuran pada scale.
                    </p>
                    <h3  align='left'>Step 9</h3>
                    <p className='pt-2 pb-3'>
                        Panaskan terlebih dahulu cangkir yang akan digunakan agar suhu kopi tetap stabil. Tuangkan kopi ke dalam cangkir.
                    </p>
                    <h3  align='left'>Step 10</h3>
                    <p className='pt-2 pb-3'>
                        Sajikan.
                    </p>
                    </div>
                </div>
                
                  
            </div>
        );
    }
}

export default PourOver;
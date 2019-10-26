import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class Walkure extends Component {
    render() {
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/walkure/walkure-1b.jpg"
                        alt="First slide"
                        style={{height:'30%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>WALKURE</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  
                        WALKURE adalah alat seduh produksi sebuah pabrik porselen yang didirikan oleh Siegmund Paul, Meyer pada 1899 di Jerman. 
                        Kelebihan alat seduh Walkure adalah penggunanya tidak memerlukan filter kertas sehingga membuatnya lebih eco-friendly. 
                        Bahan porselen di setiap bagiannya membuat alat seduh ini bisa menahan panas lebih lama. Panas yang merata berpengaruh 
                        pada cita rasa kopi dalam cangkir yang dinikmati oleh penikmatnya.        
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Satu set Walkure Karlsbad</li>
                            <li>25 Gram Biji kopi</li>
                            <li>280ml air</li>
                            <li>Ketel</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Scale</li>
                            <li>Grinder</li>
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
                        Bilas seluruh bagian Walkure Karlsbad dengan air panas agar porselain menyimpan panas lebih lama. Lalu keringkan.
                    </p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>
                        Giling biji kopi di level coarse. (Sambil panaskan air pada suhu 93° Celsius).
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>
                        Masukkan bubuk kopi pada chamber Walkure Karlsbad.
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>
                        Tutup filter porselen. Tuang air melalui filter berlubang di bagian atas.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>
                        Biarkan hingga airnya menyentuh hampir keseluruhan wadah berlubang tersebut. 
                        Biarkan air mengalir perlahan. Diamkan agar kopi melewati proses blooming dengan sempurna.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>
                        Ketika air hampir habis pada filter, lakukan proses pouring kedua dengan cara sama seperti pouring pertama.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>
                        Lanjutkan hingga air menyentuh berat kira-kira 280 ml. Setelah selesai, angkat kedua filter dari chamber bawah.
                    </p>
                    <h3  align='left'>Step 8</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan dan sajikan.
                    </p>
                    </div>
                </div>
                
                  
            </div>
        );
    }
}

export default Walkure;
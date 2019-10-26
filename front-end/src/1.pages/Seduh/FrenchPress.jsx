import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class Frenchpress extends Component {
    render() {
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/french-press/french-press-4b.jpg"
                        alt="First slide"
                        style={{height:'30%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>French Press</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  
                        French Press merupakan salah satu teknik seduh tertua di dunia. Desain pertama alat kopi ini dipatenkan pada 1852 oleh Frencmen Mayer 
                        dan Delforge meskipun saat itu desainnya tidak seperti yang saat ini kita gunakan. Hasil kopi yang diseduh dengan menggunakan
                        French Press umumnya padat dan bold, dan seringkali dinilai sebagai metode seduh paling murni dan alami.
                        Cara menggunakan alat seduh ini juga tergolong mudah dan bisa dilakukan oleh penggemar kopi mula-mula sekalipun.                      
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>French Press</li>
                            <li>30 gram biji kopi</li>
                            <li>Grinder</li>
                            <li>Stirrer</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                             <li>Bambo Stir</li>
                            <li>Timer</li>
                            <li>4-5 menit</li>
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
                        Bilas French press dengan air panas dan buang airnya.
                    </p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>
                        Masukkan bubuk kopi ke dalam kontainer French press.
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan 60 ml air.
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>
                        Lalu aduk perlahan dengan stirrer. Diamkan sejenak selama 30 detik.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>
                        Setelah itu masukkan sisa air, masukkan plunger namun jangan di-press. Diamkan selama 4 menit.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>
                        Tekan plunger secara perlahan.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>
                        Nikmati dengan menuangkan langsung ke dalam cangkir. 
                        Jangan biarkan kopi berdiam lama di dalam French press karena akan over-extraction.
                    </p>
                    </div>
                </div>
                
                  
            </div>
        );
    }
}

export default Frenchpress;
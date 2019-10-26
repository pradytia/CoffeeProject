import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class EvaSolo extends Component {
    render() {
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/eva-solo/eva-solo-7.jpg"
                        alt="First slide"
                        style={{height:'50%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>EVA SOLO</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  
                        EVA SOLO yang merupakan produksi manufacturer Eva Denmark ini memiliki prinsip sedikit mirip dengan French Press. 
                        Namun, ia tidak menggunakan fitur tekanan melainkan convex filter yang mengerucut ke bagian dalam carafe. 
                        Selain itu, carafe atau container kacanya cenderung mirip dengan Chemex—minus wood collar. 
                        Dengan selimut penutup yang terbuat dari neoprene lengkap dengan zipper 
                        (yang berfungsi untuk membantu menjaga suhu minuman di dalamnya tetap hangat dalam waktu lama) 
                        membuat manual brewer ini terlihat sangat stylish.
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Satu set Eva Solo (ukuran 1 liter)</li>
                            <li>23-24 gram biji kopi</li>
                            <li>Air dengan suhu sekitar 89°C - 91°C</li>
                            <li>Grinder</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                             <li>Kettle</li>
                            <li>Scale</li>
                            <li>3-4 menit</li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Tahapan</h3>
                    </div>
                    <div className="col-md-6">
                    <h3  align='left'>Step 1</h3>
                    <p className='pt-2 pb-3'>Bersihkan dan panaskan terlebih dahulu kontainer kaca Eva Solo.</p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>Giling biji kopi dalam level medium to coarse. Lalu tuangkan ke dalam kontainer kaca.
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>Tuangkan air panas ke dalam container, tuang hingga kira-kira 100-150 gram air. Biarkan blooming sebentar.
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>Stir/aduk perlahan selama kira-kira 10 detik agar bubuk kopi tercampur merata sepenuhnya.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>Tuangkan sisa air panas hingga mencapai hasil akhir 350-380 gram.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>Pasangkan filter cap, lalu tutup rapat.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>Pasang selimut penutup Eva Solo, kancingkan pengaitnya.
                    </p>
                    <h3  align='left'>Step 8</h3>
                    <p className='pt-2 pb-3'>Diamkan selama sekitar 3 ½ - 4 menit.
                    </p>
                    <h3  align='left'>Step 9</h3>
                    <p className='pt-2 pb-3'>Panaskan cangkir yang akan digunakan. Tuangkan kopi ke dalam cangkir.
                    </p>
                    <h3  align='left'>Step 10</h3>
                    <p className='pt-2 pb-3'>Sajikan.
                    </p>
                    
                    </div>
                </div>
                
                  
            </div>
        );
    }
}

export default EvaSolo;
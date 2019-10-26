import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class TurkishCoffee extends Component {
    render() {
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/turkish-coffee/turkish-coffee-8.jpg"
                        alt="First slide"
                        style={{height:'30%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>TURKISH COFFEE</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  
                        METODE seduh Turkish coffee termasuk salah satu teknik tertua dalam sejarah penyeduhan kopi. 
                        Sebelum alat-alat manual brew diciptakan, bangsa Turki telah menyeduh kopi dengan memakai pot 
                        khusus yang dikenal dengan cezve sejak abad ke-15. Turki sendiri termasuk jajaran negara-negara
                        pertama yang mengenal kopi sejak tanaman ini ditemukan di Ethiophia. Ada beberapa versi yang 
                        menyebutkan bagaimana kopi masuk ke Turki, tapi yang paling umum adalah versi Ottoman dari Yemen. 
                        Konon di tahun 1557, seorang Gubernur Ottoman bernama Ozdemir Pasha mengetahui ada jenis minuman baru 
                        di daerahnya yang terbuat dari biji kopi. Setelah mencoba, ia kemudian mengenalkannya kepada Raja Sulaiman 
                        yang segera mengesankan sang Raja. 
                        Kopi lalu disahkan sebagai minuman resmi kerajaan dimana setelahnya, kopi menyebar dengan cepat ke seluruh penjuru Turki.          
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Turkish Pot</li>
                            <li>5 Sendok Bubuk kopi</li>
                            <li>Gula </li>
                            <li>Air dengan suhu sekitar 75°-80°C</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Pemanas / gas burner</li>
                            <li>Wood stirrer</li>
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
                        Giling kopi dengan level kehalusan setingkat di bawah espresso.
                    </p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>
                        Masukkan 5 sendok bubuk kopi yang digiling halus, dengan level 
                        kehalusan yang setara atau bahkan lebih dari espresso.
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>
                        Masukkan 3 sendok gula (atau tergantung selera, seberapa manis kopi yang diinginkan).
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>
                        Tambahkan air panas bersuhu sekitar 75°C - 80°C untuk meleburkan 
                        bubuk kopi dan gula, cukup isi hanya sampai setengah pot.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>
                        Aduk kopi, gula dan air dengan merata sebelum dipanaskan di atas stove.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>
                        Tambahkan air panas hingga memenuhi hampir seluruh pot.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>
                        Nyalakan burner, lalu panaskan kopi di atas stove.
                    </p>
                    <h3  align='left'>Step 8</h3>
                    <p className='pt-2 pb-3'>
                        Kunci dari Turkish coffee adalah pada saat sudah terbentuk foam cukup tebal
                        di atas permukaannya (yang umumnya terjadi di level suhu 70°C). Jaga agar kopi tidak sampai mendidih.
                    </p>
                    <h3  align='left'>Step 9</h3>
                    <p className='pt-2 pb-3'>
                        Angkat cezve dari pemanas ketika gelembung (pertanda kopi akan segera mendidih) mulai muncul di permukaan.
                    </p>
                    <h3  align='left'>Step 10</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan kopi ke dalam cangkir yang sudah disiapkan.
                    </p>
                    <h3  align='left'>Step 11</h3>
                    <p className='pt-2 pb-3'>
                        Sajikan.
                    </p>
                    </div>
                </div>
                
                  
            </div>
        );
    }
}

export default TurkishCoffee;
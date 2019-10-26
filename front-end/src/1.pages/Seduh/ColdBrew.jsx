import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class Coldbrew extends Component {
    render() {
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/cold-brew/cold-brew-2a.jpg"
                        alt="First slide"
                        style={{height:'30%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>COLD BREW</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  
                           COLD brew semakin populer di kalangan penggemar kopi sejak tahun 2014 karena kopi yang diseduh dengan metode ini 
                           dianggap mampu mengeluarkan segala karakter terbaik dari kopi. Cara seduhnya yang tidak melibatkan suhu panas air
                           dianggap salah satu faktor yang membuat cold brew tidak ikut mengekstraksi bitterness, dan sekaligus menonjolkan
                           karakternya sweetness-nya. Pada akhirnya cold brew dirasa lebih juicy dan sweet. Metode seduh ini sangat menarik 
                           dijadikan “taman bermain” para barista maupun penyeduh rumahan karena sifat tekniknya yang tidak menggunakan air
                           bersuhu panas sehingga penyeduhnya pun harus cerdik memilih biji kopi yang pada saat diseduh dengan cara cold brew 
                           akan menghasilkan berbagai karakternya yang ajaib.                      
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>1 set Cold Brew</li>
                            <li>50 gram biji kopi</li>
                            <li>Air(dingin atau suhu ruang)</li>
                            <li>ketel</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                             <li>Bambo Stir</li>
                            <li>Scale</li>
                            <li>8-9 jam</li>
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
                        Masukkan bubuk kopi ke inner filter brewer.
                    </p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>
                        Pasang inner lid ke atas filter, lalu tutup dan kencangkan hingga erat.
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>
                        Pasangkan lid luar ke dalam carafe. Pastikan lid sudah terpasang dengan cukup rapat.
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan air melalui lubang-lubang yang ada pada lid.  
                        Lubang pada lid sekaligus berfungsi “menyaring” air yang menetes ke dalam inner lid/filter bisa jatuh dengan merata.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan air hingga bubuk kopi telah basah seluruhnya dan mencapai hasil 650 ml.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>
                        Setelahnya, tutup lid luar hingga rapat. Lalu simpan di dalam lemari pendingin selama kurang lebih 8-9 jam.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>
                        Setelah melewati waktu 8 jam, ambil cold brew carafe dari dalam lemari pendingin. Dan lepas filternya.
                    </p>
                    <h3  align='left'>Step 8</h3>
                    <p className='pt-2 pb-3'>
                        Tuang dan Sajikan.
                    </p>
                    </div>
                </div>
                
                  
            </div>
        );
    }
}

export default Coldbrew;
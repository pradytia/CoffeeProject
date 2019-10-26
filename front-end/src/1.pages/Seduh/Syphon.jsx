import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class Syphon extends Component {
    render() {
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/syphon/syphon-9a.jpg"
                        alt="First slide"
                        style={{height:'30%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>SYPHON</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  
                        SYPHON pertama kali muncul di Jerman sekitar tahun 1830an. Namun ironisnya, hak paten pertama syphon 
                        justru jatuh ke tangan seorang perempuan Perancis bernama Jeanne Richard pada tahun 1840. 
                        Rasa yang dihasilkan oleh syphon cenderung lebih lembut, bertekstur seperti teh, namun bisa cukup 
                        tricky dengan menghasilkan rasa yang pahit jika kopi dibiarkan terekstraksi terlalu lama. 
                        Air mendidih umumnya bersuhu 100°C, di sinilah diperlukan kecakapan penyeduhnya untuk menakar seberapa
                        lama kopi terkestraksi dengan air mendidih yang naik dari chamber bawah.          
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Satu set Syphon</li>
                            <li>20-21 Gram Biji kopi</li>
                            <li>300gram air hangat</li>
                            <li>Timer</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Pemanas</li>
                            <li>Gas Burner</li>
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
                        Basahi filter dengan air panas, lalu letakkan di bagian dasar chamber atas syphon. 
                        Jangan lupa kaitkan pengaitnya ke bagian bawah funnel agar filter tidak terlepas selama proses penyeduhan.
                    </p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>
                        Basahi filter dan dripper untuk membersihkan sekaligus memanaskannya.
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>
                        Pasang chamber atas, tidak perlu memasangnya terlalu ketat.
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>
                        Nyalakan pemanas  atau gas burner. Tunggu hingga air mendidih.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>
                        Saat mendidih, air akan naik ke chamber bagian atas syphon. 
                        Pada tahap ini masukkan bubuk kopi yang sudah digiling dalam chamber atas.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>
                        Biarkan sekitar 10-15 detik.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>
                        Lalu aduk hingga rata secara perlahan mulai dari bagian atas permukaan kopi. Biarkan kembali kira-kira 30 detik.
                    </p>
                    <h3  align='left'>Step 8</h3>
                    <p className='pt-2 pb-3'>
                        Matikan pemanas/gas burner.
                    </p>
                    <h3  align='left'>Step 9</h3>
                    <p className='pt-2 pb-3'>
                        Kopi yang sudah terekstraksi akan segera turun ke chamber bagian bawah dan tersaring melalui tube yang ada di kontainer atas.
                    </p>
                    <h3  align='left'>Step 10</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan kopi ke dalam cangkir yang sudah dipanaskan.
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

export default Syphon;
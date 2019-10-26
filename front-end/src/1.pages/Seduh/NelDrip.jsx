import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class NelDrip extends Component {
    render() {
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/nel-drip/nel-drip-2a.jpg"
                        alt="First slide"
                        style={{height:'30%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>NEL DRIP</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  
                        TEKNIK seduh dengan memakai filter kain, atau nel drip (juga umum dikenal dengan cloth filter) diperkenalkan ke Jepang 
                        oleh pedagang Belanda pada sekitar abad ke-17. Secara khusus, kissaten di kota Tokyo mulai mengadaptasi teknik seduh gaya ini 
                        sejak sekitar tahun 1888. Di Indonesia sendiri, metode ini sebenarnya cukup familiar. Terutama jika sering menyinggahi
                        kedai-kedai tradisional Aceh. Bentuk nel drip sedikit mirip dengan alat seduh kopi tarik khas Aceh yang fenomenal, 
                        hanya saja filter yang digunakan pada nel drip ini lebih pendek dan tampaknya sedikit lebih praktis. 
                        Istilah nel drip mengacu kepada cotton flannel filter yaitu filter berbahan kain katun flannel yang dipakai alat seduh ini.                  
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>Satu Set Nel Drip</li>
                            <li>Kopi</li>
                            <li>Grinder</li>
                            <li>Kettle</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                             <li>Scale</li>
                            <li>Air</li>
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
                        Basahi filter nel drip jika masih benar-benar baru. Sebaiknya rendam lebih dahulu dalam air panas –air 
                        mendidih akan lebih baik– selama 5 menit. 
                        (Jangan lupa lepas filter dari tungkai kayu sebelum direndam). Setelahnya, keringkan nel drip.
                    </p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>
                         Giling 25 gram kopi dalam ukuran medium coarse. Masukkan bubuk kopi ke dalam filter nel drip.
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>
                         Ratakan bubuk kopi dengan menekan sisinya dengan paddle bamboo agar bubuk kopi bisa terekstraksi hingga maksimal saat diseduh.
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan air panas bersuhu sekitar 89°-90°C dengan gerakan spiral untuk mulai menyeduh. Idealnya, pada pouring pertama,
                        penuangan air dilakukan dengan cukup lambat, 45 gram dalam 45 detik. Biarkan kopi blooming beberapa saat.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>
                        Tuangan kedua sedikit lebih cepat, 80 gram dalam 60 detik. Kembali, biarkan selama kira-kira 20 detik. 
                        Untuk poring terakhir, tuangkan sisa air sampai beratnya mencapai sekitar 375 gram.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>
                        Angkat dripper. Siapkan cangkir yang akan disajikan.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan dan sajikan.
                    </p>
                    </div>
                </div>
                
                  
            </div>
        );
    }
}

export default NelDrip;
import React, { Component } from 'react';
import {MDBCarousel} from 'mdbreact';

class Mokapot extends Component {
    render() {
        return (
            <div>
               <MDBCarousel  className="z-depth-1">
                    <img
                        className="d-block w-100"
                        src="https://box.ottenstatic.com/subscription-learn/bialetti/bialetti-7b.jpg"
                        alt="First slide"
                        style={{height:'30%'}}/>
                </MDBCarousel>
                
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>MOKAPOT</h3>
                    </div>
                    <div className="col-md-6 pr-5">
                        <p align='justify' style={{lineHeight: 2}}>  
                        BIALETTI pertama kali diciptakan oleh Alfonso Bialetti pada 1933 setelah terinspirasi melihat mesin cuci istrinya yang menggunakan tenaga uap. 
                        Setelah Renato Bialetti yang merupakan anak dari Alfonso Bialetti mengambil alih perusahaan pada 1946, Bialetti berkembang semakin pesat.
                         Sebagai salah satu pencipta alat kopi pionir zaman modern, Bialetti adalah sebuah inovasi paling membanggakan dalam sejarah perkembangan kopi dunia.
                        </p>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h3 className='text-center'>Yang Dibutuhkan</h3>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                            <li>1 set Moka Pot ukuran 3 cups</li>
                            <li>20 gram bubuk kopi</li>
                            <li>Air hangat</li>
                            <li>Grinder</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul style={{lineHeight: 3}}>
                             <li>Kompor biasa</li>
                            <li>Scale</li>
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
                    <p className='pt-2 pb-3'>Bilas semua bagian Moka Pot dengan air panas.</p>
                    <h3  align='left'>Step 2</h3>
                    <p className='pt-2 pb-3'>Keringkan seluruh bagiannya dengan kain bersih.
                    </p>
                    <h3  align='left'>Step 3</h3>
                    <p className='pt-2 pb-3'>Isi wadah di bagian dasar dengan air hangat. Jangan sampai melewati batas katup yang ada di dalamnya.
                    </p>
                    <h3  align='left'>Step 4</h3>
                    <p className='pt-2 pb-3'>Masukkan corong saringan ke dalam wadah.
                    </p>
                    <h3  align='left'>Step 5</h3>
                    <p className='pt-2 pb-3'>Lalu isi dengan bubuk kopi. Bubuk kopi yang digunakan adalah paling halus, atau ukuran sama seperti membuat espresso.
                    </p>
                    <h3  align='left'>Step 6</h3>
                    <p className='pt-2 pb-3'>Ratakan bubuk kopi tapi jangan padatkan terlalu keras. Hanya ratakan dan tekan dengan perlahan.
                    </p>
                    <h3  align='left'>Step 7</h3>
                    <p className='pt-2 pb-3'>
                         Bersihkan seluruh wadah dan pinggiran corong dari sisa bubuk kopi.
                         Satukan wadah dan corong dengan bagian atas Bialetti. Kunci dan eratkan.
                    </p>
                    <h3  align='left'>Step 8</h3>
                    <p className='pt-2 pb-3'>Letakkan Bialetti Moka Express di atas kompor, nyalakan kompor.
                    </p>
                    <h3  align='left'>Step 9</h3>
                    <p className='pt-2 pb-3'>
                         Perhatikan nyala api. Lingkar api jangan sampai lebih besar dari diameter Bialetti Moka Pot agar kopi tidak gosong dan terlalu pahit.
                    </p>
                    <h3  align='left'>Step 10</h3>
                    <p className='pt-2 pb-3'>
                         Tunggu hasil kopi keluar dari bagian atas. Kita bisa menceknya dengan membuka penutup bagian atas.
                    </p>
                    <h3  align='left'>Step 11</h3>
                    <p className='pt-2 pb-3'>
                         Biarkan seluruh kopi keluar hingga mendidih. Matikan kompor.
                    </p>
                    <h3  align='left'>Step 12</h3>
                    <p className='pt-2 pb-3'>
                         Matikan kompor.
                    </p>
                    <h3  align='left'>Step 13</h3>
                    <p className='pt-2 pb-3'>
                        Tuangkan kopi ke dalam cangkir. Sajikan.
                    </p>
                    </div>
                </div>
                
                  
            </div>
        );
    }
}

export default Mokapot;
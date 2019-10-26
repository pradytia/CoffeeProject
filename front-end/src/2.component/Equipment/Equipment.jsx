import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css'

const Equipment = (props) => {
    return (
        <div className='card col-md-2 m-1 mt-3' >

            <div className="card-body">
            <Link to={'/equipment-details/' + props.id}>
            <img src={props.pathImg} className='card-img top img gambar' alt='Card'/>
            </Link>
            </div>

            <div className="card-footer text-center bawah">
            {/* <div className='discount'>{props.discount}%</div> */}      
            <p>
                <span className="nama mt-3">{props.nama}</span><br/>
                <span className='harga'>Rp. {props.harga}</span>
            </p>
                
                <div className=''>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span> &nbsp;
                <span style={{fontSize:'12px'}}>{props.ulasan}</span>                   
                </div>          
            </div>
            <div className="">
                 <Link to={'/equipment-details/' + props.id}>
                     <center>
                        <h5 className="fas fa-shopping-cart keranjang" style={{color:'white'}}> </h5>
                     </center>
                </Link>
            </div>
        </div>
    );
};

export default Equipment;
import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css'

const Brewer = (props) => {
    return (
        <div className='card col-md-2 m-1 mt-3' >

            <div className="card-body">
            <Link to={'/brewer-details/' + props.id}>
            <img src={props.pathImg} className='card-img top img gambar' alt='Card'/>
            </Link>
            </div>

            <div className="card-footer text-center bawah">
            {/* <div className='discount'>{props.discount}%</div> */}      
            <p>
                <span className="nama mt-3">{props.nama}</span><br/>
                <span className='harga'>Rp. {new Intl.NumberFormat('id-ID').format(props.harga)}</span>
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
                     <center> 
                         {
                             props.username 
                             ?
                             <h5 type='button' onClick={props.fnCart} className="fas fa-shopping-cart keranjang" style={{color:'white'}}> </h5>
                             :
                            <Link to='/auth'>
                                <h5 type='button' className="fas fa-shopping-cart keranjang" style={{color:'white'}}> </h5>
                            </Link>
                         }                      
                     </center>
            </div>
        </div>
    );
};

export default Brewer;
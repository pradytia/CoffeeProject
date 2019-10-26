import React from 'react';
import {Link} from 'react-router-dom';


const ShowDataUsaha = (props) => {
    

    return (
      
        <div className='card col-md-2 m-1 mt-3'>

        <div className="card-body">
        <Link to={'/product-details/' + props.id}>
        <img src={props.img} className='card-img top img gambar' alt='Card'/>
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
            {/* <span style={{fontSize:'12px'}}>{props.deskripsi}</span>                    */}
            </div>          
        </div>
        <div className="">
             <Link to={'/product-details/' + props.id}>
                 <center>
                    <h5 className="fas fa-shopping-cart keranjang" style={{color:'white'}}> </h5>
                 </center>
            </Link>
        </div>
    </div>
    );
};

export default ShowDataUsaha;
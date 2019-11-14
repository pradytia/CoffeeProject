import React from 'react';
import { Link } from 'react-router-dom';

const ArtikelBox = (props) => {
    return (
            <div className='col-md-3 m-1 mt-3'>
                    <Link to={`/artikel-details/${props.id}`}>
                    <img style={{width:'100%', height : '250px', borderRadius:'5%'}} src={props.pathImage}  alt=''/>           
                    </Link>              
                <p align="center" className='mt-3'>
                    <span style={{fontWeight:'bold'}}>{props.nama}</span><br/>
                    <span style={{fontStyle:'italic'}}>{props.title}</span>
                </p> 
            </div>               
    );
};

export default ArtikelBox;
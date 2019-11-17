import React from 'react';
import './Promo.css'

const PromoHome = (props) => {
    return (
        <div className='container mt-5'>
				<div className="row"  style={{borderTop:'3px solid darkcyan'}}>
					<div className="col-12 text-center mt-2">
						<h3 style={{fontStyle:'italic', fontFamily:'Apple Chancery, Comic Sans MS, Lucida Handwriting', color:'darkcyan'}}>PROMO</h3>
					</div>
				</div>
				<div className="row satu">
					<div className="col-3 dua">
					<img className='pict' alt='' style={{maxWidth:'80%', height:'auto', float:'center'}} src='https://s-ecom.ottenstatic.com/thumbnail/746.jpg'/>
					<p className='text-center pt-3'>Stainless Steel Milk Frother - Slim</p>
					<p className='text-center pt-5 mt-5' style={{fontWeight:'bolder', color:'orange'}}>Rp 125.000</p>
					</div>

					<div className="col-3 dua">
					<div className="row">
							<div className="col-12 tiga">
								<img className='pict' alt='' src='https://s-ecom.ottenstatic.com/mini_thumbnail/2359.jpg' style={{float:'right', maxWidth:'80%', height:'auto', }}/>
								<p className='mt-5 pt-5' style={{fontWeight:'bolder', color:'orange'}}>Rp 125.000</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12 tiga">
							<img className='pict' alt='' src='https://s-ecom.ottenstatic.com/mini_thumbnail/5673e0ac2fcd7.jpg' style={{float:'right', maxWidth:'80%', height:'auto', }}/>
							<p className='mt-5 pt-5' style={{fontWeight:'bolder', color:'orange'}}>Rp 340.000</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12 tiga">
							<img className='pict' alt='' src='https://s-ecom.ottenstatic.com/mini_thumbnail/57a997971d915.jpg' style={{float:'right', maxWidth:'80%', height:'auto', }}/>
							<p className='mt-5 pt-5' style={{fontWeight:'bolder', color:'orange'}}>Rp 480.000</p>
							</div>
						</div>
					</div>

					<div className="col-3 dua">
					<img className='pict' alt='' style={{maxWidth:'80%', height:'auto', float:'center'}} src='https://s-ecom.ottenstatic.com/thumbnail/57aa9e83236fb.jpg'/>
					<p className='text-center pt-3'>Stainless Steel Milk Frother - Slim</p>
					<p className='text-center pt-5 mt-5' style={{fontWeight:'bolder', color:'orange'}}>Rp 230.000</p>
					</div>

					<div className="col-3 dua">
						<div className="row">
							<div className="col-12 tiga">
							<img className='pict' alt='' src='https://s-ecom.ottenstatic.com/mini_thumbnail/591a6d2ea603d.jpg' style={{float:'right', maxWidth:'80%', height:'auto', }}/>
							<p className='mt-5 pt-5' style={{fontWeight:'bolder', color:'orange'}}>Rp 550.000</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12 tiga">
							<img className='pict' alt='' src='https://s-ecom.ottenstatic.com/mini_thumbnail/5a850ed3869e0308521430.jpg' style={{float:'right', maxWidth:'80%', height:'auto', }}/>
							<p className='mt-5 pt-5' style={{fontWeight:'bolder', color:'orange'}}>Rp 625.000</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12 tiga">
							<img className='pict' alt='' src='https://s-ecom.ottenstatic.com/mini_thumbnail/5b4458717641d431647046.jpg' style={{float:'right', maxWidth:'80%', height:'auto', }}/>
							<p className='mt-5 pt-5' style={{fontWeight:'bolder', color:'orange'}}>Rp 825.000</p>
							</div>
						</div>
					</div>
				</div>
				
			</div>
    );
};

export default PromoHome;
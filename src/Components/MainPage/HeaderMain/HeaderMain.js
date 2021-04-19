import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../../Image_Icon/Image/headerService.jpg';
const HeaderMain = () => {
    return (
       <main style={{height: '35rem'}} className='row d-flex align-items-center'>
           <div className="col-md-4 col-sm-6 col-12 offset-md-1">
               <h1 style={{ color: "rgb(212, 12, 79)" }}>Computer Repair  <br/> And Support</h1>
               <p className='text-secondary'>Do you need a Computer Repair Service? Tech Wizards on Site can help service your computer remotely or on site to get you back up and running in no time.</p>
               <Link to='/services'>
                    <button className='btn btn-info'>More Service</button>
               </Link>
           </div>
           <div className="col-md-6 col-sm-6 col-12">
               <img style={{borderRadius: "20px"}} src={headerImg} alt="" className="img-fluid"/>
           </div>
       </main>
    );
};

export default HeaderMain;
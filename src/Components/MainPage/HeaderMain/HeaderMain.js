import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../../Image_Icon/Image/headerService.jpg';
const HeaderMain = () => {
    return (
       <main style={{height: '35rem'}} className='row d-flex container-fluid align-items-center'>
           <div className="col-md-6 text-center col-12">
               <h1 style={{ color: "#ffff" }}>Computer Repair  <br/> And Support</h1>
               <p className='text-dark '>Do you need a Computer Repair Service? <br/> Tech Wizards on Site can help service <br/> your computer remotely or on site <br/> to get you back up and running <br/> in no time.</p>
               <Link to='/services'>
                    <button style={{ background: "#ffff", color: "green", fontWeight: 'bold' }} className='btn'>More Service</button>
               </Link>
           </div>
           <div className="col-md-6 col-12 ">
               <img style={{borderRadius: "10px", width: "40vw"}} src={headerImg} alt="" className="img-fluid float-right"/>
           </div>
       </main>
    );
};

export default HeaderMain;
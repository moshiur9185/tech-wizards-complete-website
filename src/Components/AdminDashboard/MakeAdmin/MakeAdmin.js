import React, { useState } from 'react';
import Sidebar from '../../MainDashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});

    const handleBlur = (e) => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
      };
      console.log(admin);
    const handleMakeAdmin = () => {
        const formData = new FormData()
        formData.append('email', admin.email)
    
      fetch('https://infinite-island-97956.herokuapp.com/makeAdmin', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
      }
    
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-5 p-4 pr-5" style={{ position: "absolute", left: 320, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Make Admin</h5>
            <form onSubmit={handleMakeAdmin}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email :</label>
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="*@gmail.com" />
                    <button type="submit" className="btn btn-brand ">Submit</button>
                </div>
             </form>
        </div>
    </section>
    );
};

export default MakeAdmin;
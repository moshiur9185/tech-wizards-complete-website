import React, { useState } from "react";
import "./AddService.css";
import Sidebar from "../../MainDashboard/Sidebar/Sidebar";

const AddService = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', info.name)
    formData.append('price', info.price)
    formData.append('description', info.data)

  fetch('https://infinite-island-97956.herokuapp.com/addService', {
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
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Service Name :</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Service Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price :</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Price" />
                    </div>
                    <div class="from-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <textarea onBlur={handleBlur} type="text" class="form-control" name="data" placeholder="Description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input style={{width: "250px"}} onChange={handleFileChange} type="file" className="form-control" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-brand">Submit</button>
                </form>
            </div>
        </section>
  );
};

export default AddService;

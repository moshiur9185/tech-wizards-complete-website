import React, { useState } from "react";
import Sidebar from "../../MainDashboard/Sidebar/Sidebar";

const AddBlogs = () => {
  const [blog, setBlog] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newBlog = { ...blog};
    newBlog[e.target.name] = e.target.value;
    setBlog(newBlog);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', blog.name)
    formData.append('title', blog.title)
    formData.append('category', blog.category)
    formData.append('description', blog.data)

  fetch('https://infinite-island-97956.herokuapp.com/addBlog', {
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
                <h5 className="text-brand">Add Blogs</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Your Name :</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Blogs Title :</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Blogs title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Category:</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="category" placeholder="Blogs category"/>
                    </div>
                    <div class="from-group">
                        <label htmlFor="exampleInputPassword1">Blogs Description</label>
                        <textarea onBlur={handleBlur} type="text" class="form-control" name="data" placeholder="Write blogs..."></textarea>
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

export default AddBlogs;

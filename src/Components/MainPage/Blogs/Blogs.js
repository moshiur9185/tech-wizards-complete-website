import React, { useEffect, useState } from 'react';
import BlogsDetails from './BlogsDetails';

const Blogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
      fetch('https://infinite-island-97956.herokuapp.com/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  },[]);
     return (
        <section className="container text-center mt-5">
         <h2 className="text-brand">BLOGS :</h2>
           <div className="row">
           {
                blogs.map(blog => <BlogsDetails key={'id'} blog={blog}></BlogsDetails>)
            }
           </div>
       </section>
    );
};

export default Blogs;
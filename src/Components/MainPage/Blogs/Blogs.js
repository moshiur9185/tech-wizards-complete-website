import React from 'react';
import cable from '../../../Image_Icon/Image/cable.jpg'
import monitor from '../../../Image_Icon/Image/monitortest.jpg'
import laptop from '../../../Image_Icon/Image/laptop1.jpg'
import BlogsDetails from './BlogsDetails';

const blogsData = [
    {
      id: 1,
      title: "How to choose a network cable",
      date: "april 2021",
      category: "Computer Hardware, Connectivity",
      posted : "posted by Arman",
      post: "Length and Color Ethernet cable comes in standard lengths such as 1, 3, 5, 7, and 10 meter. Longer lengths are available, such as bulk Cat5e cable 305m. The distance between your various network devices and your network switch or router will determine the length you need.",
      img: cable,

    },
    {
      id: 2,
      title: "MONITOR TEST",
      category: "Computer Hardware, Connectivity",
      posted : "posted by Arman",
      post: "We test desktop monitors of all stripes here at PCMag, from barebones budget screens to moderately priced mainstream displays to high-end, big-screen Ultra High Definition (UHD) models that cost thousands of dollars.",
      img: monitor,

    },
    {
      id: 3,
      title: "False breakage",
      category: "Computer Hardware, Connectivity",
      posted : "posted by Arman",
      post: "Double switching, double cutting, or double breaking is the practice of using a multipole switch to close or open both the positive and negative sides of a DC electrical circuit, or both the hot and neutral sides of an AC circuit. This technique is used to prevent shock hazard in electric devices connected with unpolarised AC power plugs and sockets. Double switching is a crucial safety engineering practice in railway signalling, wherein it is used to ensure that a single false feed of current to a relay is unlikely to cause a wrong-side failure.",
      img: laptop,

    }    
  ];
const Blogs = () => {
     return (
        <section className="container text-center mt-5">
         <h2 className="text-brand">BLOGS :</h2>
           <div className="row">
           {
                blogsData.map(blog => <BlogsDetails key={'id'} blog={blog}></BlogsDetails>)
            }
           </div>
       </section>
    );
};

export default Blogs;
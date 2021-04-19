import React from "react";
import InfoCart from "../InfoCart/InfoCart";
// import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import optimize from '../../../Image_Icon/Icon/gear.svg'
import repair from '../../../Image_Icon/Icon/support.svg'
import virus from '../../../Image_Icon/Icon/hacker.svg'
import setup from '../../../Image_Icon/Icon/install.svg'

const infoData = [
  {
    title: "Diagnosis & Repair",
    description: "Computer diagnostic tools can be used scan your computer's hard drive, check your ram for errors, check cpu temp and give you information about any other devices connected to your computer",
    icon: repair,
    background: "info",
  },
  {
    title: "Optimization",
    description: "Try the Performance troubleshooter. Delete programs you never use. Limit how many programs run at startup. Defragment your hard disk. Clean up your hard disk",
    icon: optimize,
    background: "dark",
  },
  {
    title: "Virus Removable",
    description: "Our security experts can efficiently target and remove virus and malware infections remotely, so you can stay in the comfort of your home",
    icon: virus,
    background: "info",
  },
  {
    title: "Setup & Install",
    description: "Install means to put a program on your computer. Setup can mean to configure the program, including various options",
    icon: setup,
    background: "dark",
  },
];
const BusinessInfo = () => {
  return (
        <section className="container text-center mt-5">
         <h3 className="text-brand">Service Information</h3>
           <div className="row">
           {
                infoData.map((info) => <InfoCart info={info}></InfoCart>)
            }
           </div>
       </section>
  );
};

export default BusinessInfo;

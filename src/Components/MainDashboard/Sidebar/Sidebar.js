import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faPlus,
  faShoppingCart,
  faCommentDots,
  faClipboardList,
  faThLarge,
  faHome,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('https://infinite-island-97956.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data=> setIsAdmin(data))
  },[])
  return (
    <div  className="sidebar d-flex flex-column  col-md-2 px-4" style={{height:"100vh"}}>
       <Link to="/" className="text-white mt-4">
            <h5><FontAwesomeIcon icon={faHome} />TECH WIZARDS</h5>
        </Link>
      <ul className="list-unstyled py-5">
        <li>
          <Link to="/book" className="text-white">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Book</span>
          </Link>
        </li>
        <li>
          <Link to="/bookList" className="text-white">
            <FontAwesomeIcon icon={faClipboardList} />
            <span>Booking List</span>
          </Link>
        </li>
        <li>
          <Link to="review" className="text-white">
            <FontAwesomeIcon icon={faCommentDots} />
            <span>Review</span>            
          </Link>
        </li>
         {isAdmin &&  <div>
        <li>
          <Link to="/orderList" className="text-white">
            <FontAwesomeIcon icon={faClipboardList} />
            <span>Order List</span>
          </Link>
        </li>
        <li>
          <Link to="/addService" className="text-white">
            <FontAwesomeIcon icon={faPlus} />
            <span>Add Service</span>
          </Link>
        </li>
        <li>
          <Link to="/addBlog" className="text-white">
            <FontAwesomeIcon icon={faEdit} />
            <span>Add Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/makeAdmin" className="text-white">
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Make Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/manageService" className="text-white">
            <FontAwesomeIcon icon={faThLarge} />
            <span>Manage Service</span>
          </Link>
        </li>
        </div>
        }
      </ul>
    </div>
  );
};

export default Sidebar;

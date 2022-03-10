import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/MainPage/Home/Home";
import { createContext, useEffect, useState } from "react";
import Dashboard from "./Components/MainDashboard/Dashboard/Dashboard";
import Book from "./Components/MainDashboard/Book/Book";
import BookingList from "./Components/MainDashboard/BookingList/BookingList";
import Review from "./Components/MainDashboard/Review/Review";
import AddService from "./Components/AdminDashboard/AddService/AddService";
import OrderList from "./Components/AdminDashboard/OrderList/OrderList";
import MakeAdmin from "./Components/AdminDashboard/MakeAdmin/MakeAdmin";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import { auth } from "./Components/Login/Login/LoginManager";
import ManageService from "./Components/AdminDashboard/ManageService/ManageService";
import Contact from "./Components/MainPage/Contact/Contact";
import Services from "./Components/MainPage/Services/Services";
import AddBlogs from "./Components/AdminDashboard/AddBlogs/AddBlogs";
import HeaderNavbar from "./Components/Shared/HeaderNavbar/HeaderNavbar";
import Footer from "./Components/Shared/Footer/Footer";


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setLoggedInUser(user)
      } else {
        setLoggedInUser({})
      }
    });
  }, [setLoggedInUser])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <HeaderNavbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/book">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/bookList">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/addBlog">
            <AddBlogs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/manageService">
            <ManageService />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;

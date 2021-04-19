// import React, { useState, useContext } from 'react';
// import './Login.css';
// import { useHistory, useLocation } from 'react-router-dom';
// import { UserContext } from '../../../App';
// import { useForm } from 'react-hook-form';
// import 'firebase/auth';
// import   firebase from 'firebase/app';
// import fbIcon from './fb.png';
// import gIcon from './google.png';

// // Import from LoginManager
// import {handleFbSignIn, handleGoogleSignIn,resetPassword, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from './LoginManager';

// const Login = () => {
//   // // Firebase init
//   // initializeLoginFramework();

//   //User Account
//   const [newUser, SetNewUSer] = useState(false);
//   const [user, setUser] = useState({
//     isSignedIn: false,
//     name: '',
//     email: '',
//     success: false,
//   });

// const [error, setError] = useState("")

//   // Context from app
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

//   const history = useHistory();
//   const location = useLocation();

//   const { from } = location.state || {from: { pathname: '/' }};

//   // Google Sign In/Up
//   const googleSignIn = () => {
//     handleGoogleSignIn().then((res) => handleResponse(res, true));
//   };
//   // FB Sign In/Up
//   const fbSignIn = () => {
//     handleFbSignIn().then((res) => handleResponse(res, true));
//   };

//   const handleResponse = (res, redirect) => {
//     if (res.error) {
//       newUser && setError(res.error)
//       !newUser && setError(res.error)
//     } else {
//         setUser(res);
//         setLoggedInUser(res);
//         storeAuthToken();
//         redirect && history.replace(from);
//         newUser && setError("")
//         !newUser && setError("")
//     }
// }

// const storeAuthToken = () => {
//   firebase.auth().currentUser.getIdToken(true)
//     .then(res =>{
//       sessionStorage.setItem('token', res);
//       history.replace(from);
//     })
//     .catch((error)=> {
//       console.log(error);
//     });
// };

//   // Sign in/up with email address
//   const handleBlur = (e) => {
//     let isFieldValid = true;
//     if (e.target.name === 'email') {
//       isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
//     }

//     if (e.target.name === 'password') {
//       const isPasswordValid = e.target.value.length >= 6;
//       const passwordHasNumber = /\d{1}/.test(e.target.value);
//       isFieldValid = isPasswordValid && passwordHasNumber;
//     }

//     if (isFieldValid) {
//       const newUserInfo = { ...user };
//       newUserInfo[e.target.name] = e.target.value;
//       setUser(newUserInfo);
//     }
//   };

//   const handleUserSubmit = () => {
//     if(newUser && user.email && user.password){
//       createUserWithEmailAndPassword(user.name, user.email, user.password)
//       .then(res => {
//         handleResponse(res, true);
//       })
//     }

//     if(!newUser && user.email && user.password){
//       signInWithEmailAndPassword(user.email, user.password)
//       .then(res => {
//         handleResponse(res, true);
//       })
//     }
//   }

//   const { register, handleSubmit, watch, errors } = useForm();

//   return (
//     <div>
//     <div className='container d-flex justify-content-center mt-1'>
//       <div className="row">
//         <div className="col-md-12 mt-5">
//           {!newUser ? (
//             <form onSubmit={handleSubmit(handleUserSubmit)} className='login-form text-left shadow rounded  p-3 bg-white'>
//               <h4 className='font-weight-bold mb-4'>Login</h4>

//               <div className='customUser'>

//               <div className='form-group' controlId='formEmail'>
//                 <input className="form-control"
//                   onBlur={handleBlur} name='email' type='email' placeholder='Email' ref={register({ required: true })} />
//                 {errors.email && (
//                   <span className='error'>Email is required</span>
//                 )}
//               </div>

//               <div className="form-group" controlId='formPassword'>
//                 <input className="form-control" onBlur={handleBlur} name='password' type='password' placeholder='Password' ref={register({ required: true })} />
//                 {errors.password && (
//                   <span className='error'>Password is required</span>
//                 )}
//               </div>

//               <div className='form-group row mt-3 text-center'>
//                 <div className="form-group col form-check" id='formGridCheckbox'>

//                   {/* remember me */}
//                   <input className="form-check-input" type='checkbox' label='Remember me' />
//                   <label className="form-check-label" for="exampleCheck1">Remember Me</label>
//                 </div>
//                 <div className="form-group col" id='forgetForm'>
//                   <span style={{ cursor: 'pointer', color: 'red' }} onClick={() => resetPassword(user.email ? user.email : alert("please enter your email"))} >
//                     Forgot Password ?? <br/>
//                   </span>
//                 </div>
//               </div>

//               {user != null && (
//                 <p align="center" className='text-danger'>
//                   {error}
//                 </p>
//               )}

//               <div className="form-group">
//                 <button className="btn btn-primary" style={{ width: '100%' }} variant='warning'  type='submit' >Login</button>
//               </div>

//               <div className='form-group col text-center mt-3' id='forgetForm' >
//                 <span>Don't have an account?</span>
//                 <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => SetNewUSer(true)} >Create new account</span>
//               </div>
//               </div>

//               <p className='another'> or </p>
//               <div className='social-login'>
//                 <button className ="btn btn-light google" onClick={googleSignIn}>
//                   <img align="left" src={gIcon} alt='google icon' />{' '}
//                   <span>Continue with Google</span>
//                 </button>

//                 <button className="btn btn-light facebook" onClick={fbSignIn}>
//                   <img align="left" src={fbIcon} alt='facebook icon' />{' '}
//                   <span>Continue with Facebook</span>
//                 </button>
//               </div>
//             </form>

//           ) : (

//             <form
//               onSubmit={handleSubmit(handleUserSubmit)}
//               className='login-form shadow bg-white rounded text-left p-3'
//             >
//               <h4 className='font-weight-bold mb-4'>Create an Account</h4>

//               <div className='customUser'>

//               <div className="form-group" controlId='formFirstName'>
//                 <input className="form-control" onBlur={handleBlur} name='name'  type='text' placeholder='Name'  ref={register({ required: true })} />
//                 {errors.email && (
//                   <span className='error'>Name is required</span>
//                 )}
//               </div>

//               <div className="form-group" controlId='formEmail'>
//                 <input className="form-control" onBlur={handleBlur} name='email' type='email' placeholder='Email' ref={register({ required: true })} />
//                 {errors.email && (
//                   <span className='error'>Email is required</span>
//                 )}
//               </div>

//               <div className="form-group" controlId='formPassword'>
//                 <input className="form-control" onBlur={handleBlur} name='password' type='password' placeholder='Password' ref={register({ required: true, minLength: 6 })} />
//                 {errors.password && (
//                   <span className='error'>
//                     Please enter at least 1 digit in 6 characters
//                   </span>
//                 )}
//               </div>

//               <div className="form-group" controlId='formConfirmPassword'>
//                 <input className="form-control"  onBlur={handleBlur} name='confirmPassword' type='password' placeholder='Confirm Password'
//                   ref={register({
//                     validate: (value) => value === watch('password'),
//                   })}
//                 />
//                 {errors.confirmPassword && (
//                   <span className='error'>Password don't match</span>
//                 )}
//               </div>

//               {user != null && (
//                 <p align="center" className='text-danger'>
//                   {error}
//                 </p>
//               )}

//               <div className="form-group">
//                 <button  style={{ color: 'white' }}className="btn bg-primary w-100"  variant='primary' type='submit'> Sign Up </button>

//                 <div className="form-group text-center mt-3" style={{ color: 'green' }} >
//                   {user.success && (
//                     <p>
//                       User Created Successfully.
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="form-group col text-center mt-2" id='forgetForm' >
//                 <span>Already have an account?</span>{' '}
//                 <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => SetNewUSer(false)}>Login</span>
//               </div>
//               </div>

//               <p className='another'> or </p>
//               <div className='social-login'>
//               <button className="btn btn-light google"  onClick={googleSignIn}>
//                   <img align="left" src={gIcon} alt='google icon' />{' '}
//                   <span>Continue with Google</span>
//                 </button>
//                 <button className="btn btn-light facebook" onClick={fbSignIn}>
//                   <img align="left" src={fbIcon} alt='facebook icon' />{' '}
//                   <span>Continue with Facebook</span>
//                 </button>

//               </div>
//             </form>
//           )}

//         </div>

//       </div>

//     </div>
//     </div>
//   );
// };

// export default Login;
import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";
import gIcon from "./google.png";
// import LoginBg from '../../../images/loginBg.png';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.push(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div className="login-page container text-center">
      <div className="row align-items-center" style={{ height: "50vh" }}>
        <div className="col">          
          <div className="from-group mt-5">
            <h2>Log In :</h2>
            <button className="btn btn-secondary" onClick={handleGoogleSignIn}>
            <img style={{width: "10%"}} align="left" src={gIcon} alt="google icon" />
            <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

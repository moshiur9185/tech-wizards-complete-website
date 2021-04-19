import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import jwt_decode from 'jwt-decode';
import "firebase/auth"

// export const initializeLoginFramework = () => {
//   if(firebase.apps.length === 0) {
      
//   }
// }
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()

// Google Sign In Handler
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then( (res) =>{
      const { displayName, email } = res.user;
      const signedInUser = { name: displayName, email: email, success:true };
      return signedInUser;
    })
    .catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// Sign Out handler:
export const handleSignOut = () => {
  return firebase.auth().signOut()
  .then(res => {
    const signedOutUser = {
      isSignedIn: false,
      name: '',
      email: '',
      error: '',
      success: false
    }
    return signedOutUser;
  }).catch(err => {
    const errorMessage = err.message;
    console.log(errorMessage);
  });
}
// reset password
export const resetPassword = (email) => {
  let auth = firebase.auth();
  auth
    .sendPasswordResetEmail(email)
    .then(
          document.getElementById("resPass").innerText = "Reset password link has been sent to your email address"
      )
};
// Create user with email and password
export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then( res => {
    const newUserInfo = res.user;
    newUserInfo.error = '';
    newUserInfo.success = true;
    updateUserName(name);
    return newUserInfo;
  })
  .catch( error => {
    const newUserInfo = {};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    return newUserInfo;
  });
}


// // sign in with email and password
export const signInWithEmailAndPassword = (email, password) =>{
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then(res => {
    const newUserInfo = res.user;
    newUserInfo.error = '';
    newUserInfo.success = true;
    return newUserInfo;
  })
  .catch(function(error) {
    const newUserInfo = {};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    return newUserInfo;
  });
}


// Update user name
const updateUserName = name =>{
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name
  })
};


// Bearer Token for checking individual orders

export const isLoggedIn = () => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    return false;
  }
  const decodedToken = jwt_decode(token);
  const currentTime = new Date().getTime() / 1000;
  return decodedToken.exp > currentTime;
};

export const loggedInInfo = () => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    return false;
  }
  const decodedToken = jwt_decode(token);
  return decodedToken;
};
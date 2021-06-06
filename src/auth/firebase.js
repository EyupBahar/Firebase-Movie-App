import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYhSHEILWOei7TA_fJ_PrsDNN3JAVh4G8",
  authDomain: "fir-app-28b99.firebaseapp.com",
  projectId: "fir-app-28b99",
  storageBucket: "fir-app-28b99.appspot.com",
  messagingSenderId: "693771233000",
  appId: "1:693771233000:web:bf5a161925021437d10b5d",
});

export const createUser = async (email, password, displayName, history) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("🚀 REGISTER USER", user);
        history.push("/");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(
          "🚀 ~ file: firebase.js ~ line 26 ~ createUser ~ errorMessage",
          errorMessage
        );
        // ..
      });

    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName });
  } catch (error) {
    alert("The email address is already in use by another account!");
  }
};

export const SignIn = async (email, password, history) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("🚀 LOGIN USER", user);
      history.push("/");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
};

export const userObserver = async (setCurrentUser) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};

export const SignOut = () => {
  firebase.auth().signOut();
};

export const SignUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    promt: "select_account",
  });
  firebase.auth().signInWithPopup(provider);
};

export default firebaseApp;

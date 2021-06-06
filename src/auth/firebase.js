import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAs41IBACw797-tPt35lQ2q86NmuJ88Q3k",
  authDomain: "fir-movie-app-37046.firebaseapp.com",
  projectId: "fir-movie-app-37046",
  storageBucket: "fir-movie-app-37046.appspot.com",
  messagingSenderId: "379787303748",
  appId: "1:379787303748:web:c59b84fc1c59fdd2f85511",
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

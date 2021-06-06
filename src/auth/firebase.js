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

export const createUser = async (email, password) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("🚀 ~ file: firebase.js ~ line 19 ~ .then ~ user", user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};
export default firebaseApp;

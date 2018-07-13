import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAe0KKmzvbEpH7K8Zv8etCqwaDTIK44FYc",
  authDomain: "comments-rc.firebaseapp.com",
  databaseURL: "https://comments-rc.firebaseio.com",
  projectId: "comments-rc",
  storageBucket: "comments-rc.appspot.com",
  messagingSenderId: "109053034174"
});
const db = firebase.database(firebaseApp);
const base = Rebase.createClass(db);

export const providers = {
  facebook: new firebase.auth.FacebookAuthProvider()
};

export const auth = firebaseApp.auth();
export default base;

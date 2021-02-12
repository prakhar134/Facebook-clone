import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBU-heErshkaKS83r9vKGn8t4imGsBFmIA",
  authDomain: "facebook-clone-e1824.firebaseapp.com",
  projectId: "facebook-clone-e1824",
  storageBucket: "facebook-clone-e1824.appspot.com",
  messagingSenderId: "803076263893",
  appId: "1:803076263893:web:a75ae998ea0437f94cb75c",
  measurementId: "G-P8RD019HW5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDftQnaLbYBFJCtXm_bEj4L6iJqf3Dew9c',
  authDomain: 'netflix-clone-95483.firebaseapp.com',
  projectId: 'netflix-clone-95483',
  storageBucket: 'netflix-clone-95483.appspot.com',
  messagingSenderId: '1093726849907',
  appId: '1:1093726849907:web:f6ec2248f0848c5c985306',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyB_ffRHyPA01Za8vyeWFP3MqSxb5zWWho4',
  authDomain: 'crown-db-63582.firebaseapp.com',
  projectId: 'crown-db-63582',
  storageBucket: 'crown-db-63582.appspot.com',
  messagingSenderId: '745749176971',
  appId: '1:745749176971:web:7ea021f73de4e5e6f96a8e',
  measurementId: 'G-CTQJCT9NBL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

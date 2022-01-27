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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      // any CRUD in firestore need to reference a doc and not a snapShot
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

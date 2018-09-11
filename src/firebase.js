import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCydpWla6f5MbUg-oW4qrboLo2Ej7vnxvY',
  authDomain: 'neperesichni.firebaseapp.com',
  databaseURL: 'https://neperesichni.firebaseio.com',
  projectId: 'neperesichni',
  storageBucket: 'gs://dobrodii-2bc94.appspot.com',
  messagingSenderId: '912468694449',
};
firebase.initializeApp(config);

export default firebase;
export const providerGM = new firebase.auth.GoogleAuthProvider();
export const providerFB = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const storageRef = firebase.storage().ref();

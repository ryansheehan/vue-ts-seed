
import * as firebase from 'firebase/app';

// App initialization
const firebaseApp: firebase.app.App = firebase.initializeApp({
  apiKey: "<api_key>",
  authDomain: "<auth>.firebaseapp.com",
  databaseURL: "https://<db>.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "<msg_id>"
}, "vue-ts-seed");


export default firebaseApp;

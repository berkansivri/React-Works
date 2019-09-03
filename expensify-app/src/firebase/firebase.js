import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyACmxMMnPc-hZ1xQfQsmjV66R7lu99uiq8",
  authDomain: "expensify-1ae3c.firebaseapp.com",
  databaseURL: "https://expensify-1ae3c.firebaseio.com",
  projectId: "expensify-1ae3c",
  storageBucket: "",
  messagingSenderId: "5794495904",
  appId: "1:5794495904:web:5d0f43c4eb6e8402"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD37CueFy_2z2UaciIJWNVGQWqZQeGJFY4',
  authDomain: 'recoding-diet.firebaseapp.com',
  projectId: 'recoding-diet',
  storageBucket: 'recoding-diet.appspot.com',
  messagingSenderId: '438700738079',
  appId: '1:438700738079:web:4f62cacd585295ee84372a',
  measurementId: 'G-RVJN099347',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const mealRecordsRef = db.collection('mealRecords');

export { db, mealRecordsRef };

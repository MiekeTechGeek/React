import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlP2Eze2jQs_JSUvVgnfkZ5BNmGqMcu00",
  authDomain: "my-react-app-a59a4.firebaseapp.com",
  projectId: "my-react-app-a59a4",
  storageBucket: "my-react-app-a59a4.firebasestorage.app",
  messagingSenderId: "138060214892",
  appId: "1:138060214892:web:a0be619c0ffd4188a79e49",
  measurementId: "G-YQCRH48XRR"
};

firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2_oGeyVSLYIjQC-EVgbmaCSzCQ44yNn4",
  authDomain: "chat-app-3bbc0.firebaseapp.com",
  projectId: "chat-app-3bbc0",
  storageBucket: "chat-app-3bbc0.appspot.com",
  messagingSenderId: "888511608973",
  appId: "1:888511608973:web:dacb2272cddeb1d6824ac4",
  measurementId: "G-6NFYML9LYD"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'





const firebaseConfig = {
  apiKey: "AIzaSyCzSMq2gb4myy9MW7RZslIEIHCWju-SMPw",
  authDomain: "gitdb-78a7b.firebaseapp.com",
  databaseURL: "https://gitdb-78a7b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gitdb-78a7b",
  storageBucket: "gitdb-78a7b.appspot.com",
  messagingSenderId: "17424515194",
  appId: "1:17424515194:web:2427a396b40fd15401fbc3",
  measurementId: "G-DBEJTY8FN0"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth()
const provider = new GoogleAuthProvider()









const Signin = () => {
  const [user, setUser] = useState({});
  
  const sign = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken
        const user = result.user;
        console.log(user)
      })
      
      /*.catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });*/
  }
  return (
    <div>
    <button onClick={sign}>
      Sign In With Google
    </button>
  </div>
  )
}

const App = () => {
  return <div>
    <Signin/>
  </div>
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-app')
);
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/6.4.0-pre.2/react-router-dom.development.js"



const config = {
  apiKey: "AIzaSyCzSMq2gb4myy9MW7RZslIEIHCWju-SMPw",
  authDomain: "gitdb-78a7b.firebaseapp.com",
  databaseURL: "https://gitdb-78a7b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gitdb-78a7b",
  storageBucket: "gitdb-78a7b.appspot.com",
  messagingSenderId: "17424515194",
  appId: "1:17424515194:web:2427a396b40fd15401fbc3",
  measurementId: "G-DBEJTY8FN0"
};


const app = initializeApp(config);


const auth = getAuth()
const provider = new GoogleAuthProvider()



const Navbar = () => {
  //const [user, setUser] = useState(null)
  return (
    <div className="Navbar">
        <div>
           <span><b>App</b></span>
          {user?(<img src={user.photoURL} alt='none'/>):
          (<span className='icon'>
            <span className="fa fa-user-alt">
            </span>
           </span>)
          }
        </div>
      </div>
  )
}





const Signin = (props) => {
  console.log(props.appUser)
  const sign = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken
        const cust = result.user;
        setUser(cust)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
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
  const [user, setUser] = useState(null)

  return <div>
    <Navbar appUser={{user: user, setter:setUser}}/>
    <Signin appUser={{user: user, setter:setUser}}/>
  </div>
}




ReactDOM.render(
  <App/>,
  document.getElementById('react-app')
);
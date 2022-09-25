// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
// import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

// // const auth = getAuth()
// const auth = getAuth()

// const register =()=>{

//     let username = document.querySelector("#username")
//     let email = document.querySelector("#email")
//     let password = document.querySelector("#password")
//     console.log(username.value);
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then(()=>{
//         alert("New User is registerred !")
//     })
//     .catch((e)=>{
//         alert(e + "yeh hai")
//     })
// }
// document.querySelector("#register").addEventListener("click", register)





  
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDTAn4-KIDLRbCqysVOKWcQVLwHyaT1W_4",
    authDomain: "form-83689.firebaseapp.com",
    projectId: "form-83689",
    storageBucket: "form-83689.appspot.com",
    messagingSenderId: "375470554288",
    appId: "1:375470554288:web:f3cdba6e82ff2bbd87cf75",
    measurementId: "G-PV8HJQFG5W"
  };

  
  const app = initializeApp(firebaseConfig);


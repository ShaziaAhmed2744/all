import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

// const auth = getAuth()
const auth = getAuth()

const register =()=>{

    let username = document.querySelector("#username")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    console.log(username.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(()=>{
        alert("New User is registerred !")
    })
    .catch((e)=>{
        alert(e + "yeh hai")
    })
}
document.querySelector("#register").addEventListener("click", register)
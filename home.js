import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDevEFBLiwL61zJT_yv2-jcktd-slR1C5I",
    authDomain: "xplor-5df4a.firebaseapp.com",
    projectId: "xplor-5df4a",
    storageBucket: "xplor-5df4a.appspot.com",
    messagingSenderId: "207109387595",
    appId: "1:207109387595:web:5646b123c433db5c01a4ce",
    measurementId: "G-TNGYB5V05R"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let isLogin = true;

window.toggleMode = () => {
  isLogin = !isLogin;
  document.getElementById("formTitle").textContent = isLogin ? "Sign In to TECH FLOW" : "Sign Up for TECH FLOW";
  document.getElementById("toggleText").innerHTML = isLogin
    ? `Don't have an account? <a href="#" onclick="toggleMode()">Sign Up</a>`
    : `Already have an account? <a href="#" onclick="toggleMode()">Sign In</a>`;
};

window.handleAuth = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isLogin) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Signed in successfully!"))
      .catch((error) => alert("Sign In Error: " + error.message));
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("Account created!"))
      .catch((error) => alert("Sign Up Error: " + error.message));
  }
};

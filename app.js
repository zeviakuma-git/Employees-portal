// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS-lCINak9jWXYT3MnpvRuQMshgQuLcH0",
  authDomain: "employeeportal-915c8.firebaseapp.com",
  projectId: "employeeportal-915c8",
  storageBucket: "employeeportal-915c8.firebasestorage.app",
  messagingSenderId: "556161846372",
  appId: "1:556161846372:web:5405be69c95f16ff4ca371",
  measurementId: "G-CESR07FTYP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert(error.message);
    });
}

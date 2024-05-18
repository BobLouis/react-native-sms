import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "@firebase/auth";
import '@firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCckUFIHuQR3KbqmcXsTWmgB8_HcDNbOGA",
    authDomain: "authentication-5c27d.firebaseapp.com",
    projectId: "authentication-5c27d",
    storageBucket: "authentication-5c27d.appspot.com",
    messagingSenderId: "343642812185",
    appId: "1:343642812185:web:e118db942e6064abf49f88"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
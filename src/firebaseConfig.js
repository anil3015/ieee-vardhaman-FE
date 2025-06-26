import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYjzj-mqSHj0y51r7YCZdBMRUqJqF4zTQ",
  authDomain: "ieee-vmeg.firebaseapp.com",
  projectId: "ieee-vmeg",
  storageBucket: "ieee-vmeg.firebasestorage.app",
  messagingSenderId: "870765401169",
  appId: "1:870765401169:web:c65659082df0ae5de2d470",
  measurementId: "G-JTD48F511G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db};

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBcPRIgRe3xvL0ezvq848xlNOAWJqsaxuM",
  authDomain: "igdtuw-resource-auth.firebaseapp.com",
  projectId: "igdtuw-resource-auth",
  storageBucket: "igdtuw-resource-auth.appspot.com",
  messagingSenderId: "868177069586",
  appId: "1:868177069586:web:5c90d5efe5d01829bbfacb",
  measurementId: "G-E35LWGSCWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;

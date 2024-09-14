/* eslint-disable no-unused-vars */

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC9apS4UCqLHTcbIrSQ4m8kcpXXapWN42Y",
  authDomain: "skill-swap-8661e.firebaseapp.com",
  databaseURL: "https://skill-swap-8661e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "skill-swap-8661e",
  storageBucket: "skill-swap-8661e.appspot.com",
  messagingSenderId: "926674004857",
  appId: "1:926674004857:web:aa87804ecbc3eea780dda8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASfap14HWj3RQJuwVuZL8sk8hXoL7XbzQ",
    authDomain: "my-app-8e9be.firebaseapp.com",
    projectId: "my-app-8e9be",
    storageBucket: "my-app-8e9be.appspot.com",
    messagingSenderId: "689484622546",
    appId: "1:689484622546:web:f6ac186f78affd2ce99b0b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
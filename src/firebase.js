
/* Firebase V9 importları */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';            
import 'firebase/compat/firestore'; 

/* Firebase bağlantısı için kimlik bilgileri, bu kısım Firebase sistemine göre konfigüre edilecek */
const firebaseApp = firebase.initializeApp({  
    apiKey: "x",
    authDomain: "x",
    projectId: "x",
    storageBucket: "x",
    messagingSenderId: "x",
    appId: "x"
})

// Firebase databasesi olan Firestore ile bağlantı 
const db = firebaseApp.firestore()  

// Firebase'in auth bağlantısı
const auth = firebase.auth()   


// database ve autha erişim için exportlar 
export  { db,auth }   
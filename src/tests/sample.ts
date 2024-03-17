import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'
// ... other firebase imports

export const firebaseApp = initializeApp({
  // your application settings
  apiKey: "AIzaSyB9FGkVnhuCNAqZ0BpmICK4w3X-7S45vPM",
  authDomain: "solarmonitoringsystem-7ffb8.firebaseapp.com",
  databaseURL: "https://solarmonitoringsystem-7ffb8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "solarmonitoringsystem-7ffb8",
  storageBucket: "solarmonitoringsystem-7ffb8.appspot.com",
  messagingSenderId: "711573079726",
  appId: "1:711573079726:web:7f912c4761a4efe6aa0f3f",
  measurementId: "G-G231SZ7J2R"
})

// used for the databas refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const todosRef = ref(db, 'todos')
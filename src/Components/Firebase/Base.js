import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDnf49OR5Wv9efwQaHNE1tBneTz1bVOdy0",
  authDomain: "africa-auth.firebaseapp.com",
  projectId: "africa-auth",
  storageBucket: "africa-auth.appspot.com",
  messagingSenderId: "1022436130269",
  appId: "1:1022436130269:web:f93888b791a907fa5c0a34"
})
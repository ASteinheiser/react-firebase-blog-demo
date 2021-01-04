import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAgZCrXD4qc9JRZR95xsD2TcOKW5_vOSkI',
  authDomain: 'fir-blog-9f0de.firebaseapp.com',
  projectId: 'fir-blog-9f0de',
  storageBucket: 'fir-blog-9f0de.appspot.com',
  messagingSenderId: '208270289503',
  appId: '1:208270289503:web:c5ab7792946271855689ea'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const db = firebase.firestore()

export default db

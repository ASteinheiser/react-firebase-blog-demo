import firebase from 'firebase/app'
import 'firebase/firestore'

import firebaseConfig from './config.json'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const db = firebase.firestore()

export default db

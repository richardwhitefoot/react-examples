import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTfUS55HMLOE8N5i8gpzqxTaoL6NZ1_ps",
    authDomain: "shoppoc-408bf.firebaseapp.com",
    databaseURL: "https://shoppoc-408bf.firebaseio.com",
    projectId: "shoppoc-408bf",
    storageBucket: "shoppoc-408bf.appspot.com",
    messagingSenderId: "447467877646",
    appId: "1:447467877646:web:741855e6f74c3cdef4535f"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

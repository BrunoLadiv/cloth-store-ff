import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0nx1WBYISs2klkjL_CCsQCVeAL-zAX_8",
  authDomain: "clothing-store-ff-db.firebaseapp.com",
  projectId: "clothing-store-ff-db",
  storageBucket: "clothing-store-ff-db.appspot.com",
  messagingSenderId: "39318683392",
  appId: "1:39318683392:web:001e8dd967a1c4d08abde5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})


export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore() 

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
      
    }
    
  }
  return userDocRef
}



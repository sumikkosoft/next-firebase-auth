// import { useEffect } from 'react'
import firebase from 'firebase/app'

export const Auth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
  })
}

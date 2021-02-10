import firebase from 'firebase/app'
import { atom, useRecoilState } from 'recoil'
import { useEffect } from 'react'

export const userState = atom<firebase.User | null>({
  key: 'user',
  default: null,
  dangerouslyAllowMutability: true
})

export const Auth = () => {
  const [user, setUser] = useRecoilState(userState)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((u) => {
      console.log(u)
      if (u) {
        setUser(u)
      } else {
        setUser(null)
      }
    })
  }, [])

  return { user }
}

export const Login = () => {
  firebase
    .auth()
    .signInAnonymously()
    .catch((error) => {
      // Handle Errors here.
      console.error(error)
    })
}

export const GoogleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider)
}
export const TwitterLogin = () => {
  const provider = new firebase.auth.TwitterAuthProvider()
  firebase.auth().signInWithPopup(provider)
}
export const GithubLogin = () => {
  const provider = new firebase.auth.GithubAuthProvider()
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((e) => {
      console.log(e)
    })
}

export const LogOut = () => {
  firebase.auth().signOut()
}

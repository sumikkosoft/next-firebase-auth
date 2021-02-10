import React, { FC } from 'react'
import { Auth, Login, GoogleLogin, GithubLogin, TwitterLogin, LogOut } from '../context/Auth'

const Home: FC = () => {
  const { user } = Auth()

  return (
    <div className="container mx-auto">
      {(user && (
        <>
          <p>{user.displayName} でログイン</p>
          <button
            onClick={() => {
              LogOut()
            }}
            className="bg-red-300 m-2 p-1"
          >
            LogOutする
          </button>
        </>
      )) || (
        <>
          <button
            onClick={() => {
              Login()
            }}
            className="bg-red-300 m-2 p-1"
          >
            匿名でLogin
          </button>
          <button
            onClick={() => {
              GoogleLogin()
            }}
            className="bg-red-300 m-2 p-1"
          >
            GoogleでLogin
          </button>
          <button
            onClick={() => {
              TwitterLogin()
            }}
            className="bg-red-300 m-2 p-1"
          >
            TwitterでLogin
          </button>
          <button
            onClick={() => {
              GithubLogin()
            }}
            className="bg-red-300 m-2 p-1"
          >
            GithubでLogin
          </button>
        </>
      )}
    </div>
  )
}

export default Home

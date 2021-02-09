import React, { FC } from 'react'
import { Auth } from '../context/Auth'

const Home: FC = () => (
  <div className="container mx-auto">
    <button
      onClick={() => {
        Auth()
      }}
    >
      yaa
    </button>
  </div>
)

export default Home

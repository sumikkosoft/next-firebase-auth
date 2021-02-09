import React, { FC } from 'react'
import Link from 'next/link'
import Title from '@/components/common/Title'

const Home: FC = () => {
  return (
    <div className="wrapper text-center">
      <img className="mx-auto px-8" src="/next.png" width="500" height="300" />
      <Title text={'template'} />
      <Link href="/sample">
        <a className="text-indigo-300">Link to sample</a>
      </Link>
    </div>
  )
}

export default Home

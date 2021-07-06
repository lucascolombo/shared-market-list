import { FC } from 'react'
import Head from 'next/head'

import HomeView from '../views/Home'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Shared Market List</title>
      </Head>

      <HomeView />
    </>
  )
}

export default Home

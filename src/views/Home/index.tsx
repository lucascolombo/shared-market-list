import { FC } from 'react'

import Layout from '../../components/Layout'
import Paper from '../../components/Layout/Paper'
import ToDoList from '../../components/ToDoList'

const Home: FC = () => {
  return (
    <Layout>
        <Paper>
            <ToDoList />
        </Paper>
    </Layout>
  )
}

export default Home

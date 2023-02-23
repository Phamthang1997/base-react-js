import React from 'react'

import { useAuth } from 'Hooks'
import Loading from 'Components/loading'
import Approutes from './Routes'

function App() {
  const { isLoading } = useAuth()
  return isLoading ? (
    <Loading />
  ) : (
    <Approutes />
  )
}

export default App

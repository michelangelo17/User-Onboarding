import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import FormikOnboardingForm from './FormikOnboardingForm'
import DisplayUsers from './DisplayUsers'

function App() {
  const [users, setUsers] = useState([])
  console.log(users)
  return (
    <Container>
      <Container className='d-flex justify-content-center'>
        <h1 className='display-2'>Sign Up!</h1>
      </Container>
      <FormikOnboardingForm users={users} setUsers={setUsers} />
      <DisplayUsers users={users} />
    </Container>
  )
}

export default App

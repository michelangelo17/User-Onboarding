import React from 'react'
import { Container, Card, Col } from 'react-bootstrap'

const DisplayUsers = props => (
  <Container className='mt-5 d-flex justify-content-center'>
    <Col sm={12} md={8} lg={6}>
      {props.users.map((user, i) => (
        <Card key={i} className='mt-3'>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              {user.email}
            </Card.Subtitle>
            <Card.Text>
              Q: Is {user.name} going to regret agreeing to our TOS?
              <br />
              A: {user.agree ? 'Definitely' : `How'd you escape our checkbox!?`}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Col>
  </Container>
)

export default DisplayUsers

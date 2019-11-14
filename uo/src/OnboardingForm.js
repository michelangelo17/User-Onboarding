import React from 'react'
import { Field } from 'formik'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const OnboardingForm = ({
  handleChange,
  values,
  handleSubmit,
  errors,
  touched,
}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='name'>
      <Form.Label className={touched.name && errors.name && 'text-danger'}>
        Name
        {touched.name && errors.name && errors.name}
      </Form.Label>
      <Form.Control
        name='name'
        onChange={handleChange}
        type='text'
        placeholder='Enter full name'
        value={values.name}
      />
      <Form.Text className='text-muted'>Generic relatable greeting!</Form.Text>
    </Form.Group>
    <Form.Group controlId='formBasicEmail'>
      <Form.Label className={touched.email && errors.email && 'text-danger'}>
        Email address
        {touched.email && errors.email && errors.email}
      </Form.Label>
      <Form.Control
        name='email'
        type='text'
        placeholder='Enter email'
        onChange={handleChange}
        value={values.email}
      />
      <Form.Text className='text-muted'>
        We'll never share your email with anyone else. Probably.
      </Form.Text>
    </Form.Group>
    <Form.Group controlId='formBasicPassword'>
      <Form.Label
        className={touched.password && errors.password && 'text-danger'}
      >
        Password
        {touched.password &&
          errors.password &&
          errors.password  
        }
      </Form.Label>
      <Form.Control
        name='password'
        type='password'
        placeholder='Password'
        onChange={handleChange}
        value={values.password}
      />
      <Form.Text className='text-muted'>
        We're pretty secure, go ahead and use your banking one.
      </Form.Text>
    </Form.Group>
    <Form.Group controlId='formBasicCheckbox'>
      <Field type='checkbox' name='agree' checked={values.agree} />
      <Form.Label
        className={`ml-2 ${touched.agree && errors.agree && 'text-danger'}`}
      >
        Agree to Terms
        {touched.agree && errors.agree && errors.agree}
      </Form.Label>
      <Form.Text className='text-muted'>
        What do you want to read them for? Just trust us.
      </Form.Text>
    </Form.Group>
    <Button variant='primary' type='submit'>
      Submit
    </Button>
  </Form>
)

export default OnboardingForm

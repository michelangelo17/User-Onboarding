import { withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import OnboardingForm from './OnboardingForm'

const FormikOnboardingForm = withFormik({
  mapPropsToValues() {
    return {
      name: '',
      email: '',
      password: '',
      agree: false,
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(5, ' (full name please)')
      .required(' is a required field!'),
    email: Yup.string()
      .email(` must be formated correctly: example@domain.com`)
      .required(' is a required field!'),
    password: Yup.string()
      .min(8, ' must be at least 8 characters')
      .required(' is a required field!'),
    agree: Yup.bool().oneOf([true], ' (our lawyers say you have to)'),
  }),
  handleSubmit(values, tools) {
    const emailTaken = tools.props.users.filter(
      user => user.email === values.email
    )
    emailTaken.length === 0
      ? axios
          .post('https://reqres.in/api/users', values)
          .then(res => {
            const resObj = res.data
            const newUser = {
              name: resObj.name,
              email: resObj.email,
              password: resObj.password,
              agree: resObj.agree,
            }
            tools.props.setUsers([...tools.props.users, newUser])
          })
          .catch(err => console.log(err))
          .finally(tools.resetForm())
      : alert('This email is already taken! Welcome back?')
  },
})(OnboardingForm)

export default FormikOnboardingForm

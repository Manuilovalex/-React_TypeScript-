import { Button, TextField, Container, Box } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address'),
    login: Yup.string()
      .required('Login is required')
      .min(3, 'Login must be at least 3 characters')
      .max(15, 'Login must be at most 15 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(5, 'Password must be at least 5 characters')
      .max(20, 'Password must be at most 20 characters')
  })

  const handleSubmit = (values: { email: string; login: string; password: string }) => {
    console.log('Form data', values)
  }

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" margin={5}>
        <h2>Registration</h2>
      </Box>
      <Formik
        initialValues={{ email: '', login: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field
              as={TextField}
              label="Email"
              variant="outlined"
              fullWidth
              id="email"
              name="email"
              sx={{ marginBottom: 2 }}
              helperText={<ErrorMessage name="email" component="div" className="error" />}
            />
          </div>
          <div>
            <Field
              as={TextField}
              label="Login"
              variant="outlined"
              fullWidth
              id="login"
              name="login"
              sx={{ marginBottom: 2 }}
              helperText={<ErrorMessage name="login" component="div" className="error" />}
            />
          </div>
          <div>
            <Field
              as={TextField}
              label="Password"
              variant="outlined"
              fullWidth
              id="password"
              name="password"
              type="password"
              sx={{ marginBottom: 2 }}
              helperText={<ErrorMessage name="password" component="div" className="error" />}
            />
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Form>
      </Formik>
    </Container>
  )
}

export default LoginForm

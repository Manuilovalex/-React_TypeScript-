import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'

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
    <Formik
      initialValues={{ email: '', login: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" className="error" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <Field type="text" id="login" name="login" />
          <ErrorMessage name="login" className="error" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" className="error" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default LoginForm

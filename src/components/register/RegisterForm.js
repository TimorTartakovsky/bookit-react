import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning }
}) => (
  <div className='form-group'>
    <label>{label}</label>
    <div className='input-group'>
      <input {...input} type={type} className={className}/>
    </div>
    {touched && (error && <div className='alert alert-danger'>{error}</div>)}
  </div>
)

const RegisterForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, errors } = props;
  return (
    <form onSubmit={handleSubmit(submitCb)}>
      <Field
          name="username"
          component="input"
          type="text"
          label='Username'
          placeholder="Username"
          className="form-control"
          component={renderField}
      />
      <Field
          name="email"
          component="input"
          type="email"
          label='E-mail'
          placeholder="Email"
          className="form-control"
          component={renderField}
      />
      <Field
          name="password"
          component="input"
          type="password"
          label='Password'
          placeholder="Password"
          className="form-control"
          component={renderField}
      />
      <Field
        name="passwordConfirmation"
        component="input"
        type="password"
        label='Confirm Password'
        placeholder="Confirm Password"
        className="form-control"
        component={renderField}
      />
     
      <button className="btn app-btn app-form" type="submit" disabled={pristine || submitting}>
          Submit
      </button>
      {
        (errors && errors.errors.length && 
        <div className='alert alert-danger app-res-errors'>
          {errors.errors.map((error, index) => <p key={index}>{error.message}</p>)}
        </div>) || null
      }
    </form>
  )
}

const validate = values => {
  const errors = {};

  if (values.username && values.username.length < 4) {
    errors.username = 'Username should be in range minimum 4 characters maximum 32.';
  }

  if (!values.email) {
    errors.email = 'Registration cannot be processed without email.';
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email = 'E-mail format is wrong, follow the example: example@example.com';
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Please confirm password.';
  }

  if (values.passwordConfirmation !== values.password) {
    errors.passwordConfirmation = 'Password must be the same.';
  }

  return errors;
}

export default reduxForm({
  form: 'registerForm',
  validate,
})(RegisterForm)
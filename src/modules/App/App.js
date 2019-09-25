import React, { Component } from 'react';
import * as S from './styled.js'
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { onLogin } from '../../redux/actions'




class App extends Component {
  state = {
    // firstName: '',
    // lastName: '',
    email: this.props.user.email || '',
    password: this.props.user.password || '',
    passwordConfirmation: '',
    errors: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  }


  Validation = (event) => {
    const e = event;
    const valueKey = e.target.id;
    const value = e.target.value;
    const errors = {};

    if (valueKey === 'email') {
      if (!value.includes('@')) {
        errors.email = 'Email should contain @'
      } else {
        errors.email = '';
      }
    }

    if (valueKey === 'password') {
      if (value.length < 6) {
        errors.password = 'Password is too short'
      } else {
        errors.password = '';
      }
    }

    if (valueKey === 'passwordConfirmation') {
      if (value !== this.state.password) {
        errors.passwordConfirmation = 'Passwords should be identify'
      } else if (value.length !== this.state.password.length) {
        errors.passwordConfirmation = 'Password should be identify'
      } else {
        errors.passwordConfirmation = '';
      }
    }
    return errors;

  }
  handleLogin = () => {
    const { errors, email, password } = this.state;
    if (!errors.email && !errors.password && email && password) {
      this.props.onLogin({ email, password });
      this.props.history.push('/about')
    }
  }

  handleInput = (e) => {
    const updates = {};
    updates[e.target.id] = e.target.value;

    updates.errors = this.Validation(e)
    this.setState(updates)

  }

  onButtonClick = () => {
    const users = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
    }


    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      users,
    })

    localStorage.setItem('email', this.state.email)
    localStorage.setItem('firstName', this.state.firstName)
    localStorage.setItem('lastName', this.state.lastName)

  }

  DisabledButton = () => {
    if (this.state.email !== '' && this.state.password !== '' && this.state.passwordConfirmation !== '') {
      return false
    } return true
  }

  render() {
    const {
      email,
      password,
      passwordConfirmation,
      errors,
      firstName,
      lastName,

    } = this.state
    return (
      <S.Container>
        <S.Title>Register</S.Title>
        <S.FormContainer>

          {/* <S.Label>First Name</S.Label>
          <S.Input
            placeholder='First Name'
            value={firstName}
            onChange={this.handleInput}
            id='firstName'
            type='text'
          ></S.Input>

          <S.Label>Last Name</S.Label>

          <S.Input
            placeholder='Last name'
            value={lastName}
            onChange={this.handleInput}
            id='lastName'
            type='text'


          ></S.Input> */}



          <S.Label error={errors.email}>Email</S.Label>
          <S.Input
            error={errors.email}
            value={email}
            id='email'
            onChange={this.handleInput}
            type='text'

          ></S.Input>
        </S.FormContainer>
        {errors.email && <S.InputError>{errors.email}</S.InputError>}
        <S.FormContainer>
          <S.Label error={errors.password}>Password</S.Label>
          <S.Input
            error={errors.password}
            value={password}
            id='password'
            onChange={this.handleInput}
            type='password'
          ></S.Input>
        </S.FormContainer>
        {errors.password && <S.InputError>{errors.password}</S.InputError>}
        <S.FormContainer>
          <S.Label error={errors.passwordConfirmation}>Confirm Password</S.Label>
          <S.Input
            error={errors.passwordConfirmation}
            value={passwordConfirmation}
            id='passwordConfirmation'
            onChange={this.handleInput}
            type='password'
          ></S.Input>
        </S.FormContainer>
        {errors.passwordConfirmation && <S.InputError>{errors.passwordConfirmation}</S.InputError>}
        <Link to='/about'>
          <S.Button
            // disabled={this.DisabledButton()}
            onClick={this.handleLogin}>Register</S.Button>
        </Link>
        <Link to='/about'>Register</Link>
      </S.Container>

    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  onLogin,
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

import React, { Component } from 'react';
import * as S from './styled.js'
import { Link, withRouter } from "react-router-dom";


class App extends Component {
  state = {
    email: '',
    password: '',
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

  handleInput = (e) => {
    const updates = {};
    updates[e.target.id] = e.target.value;

    updates.errors = this.Validation(e)
    this.setState(updates)
  }

  onButtonClick = () => {
    const users = {
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
    }

    this.setState({
      email: '',
      password: '',
      passwordConfirmation: '',
      users,
    })
    console.log(this.state)
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
    } = this.state
    return (
      <S.Container>
        <S.Title>Register</S.Title>
        <S.FormContainer>
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
          <S.LoginButton
            // disabled={this.DisabledButton()}
            onClick={this.onButtonClick}>Register</S.LoginButton>
        </Link>
        <Link to='/about'>Register</Link>
      </S.Container>
    );
  }
}

export default withRouter(App);
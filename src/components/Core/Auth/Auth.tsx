import React, { Component, FormEvent } from 'react';

import { AuthFormFields } from '../../../models/types/AuthFormFields';
import { StringParams } from '../../../models/types/StringParams';
import { IAuthFormProps } from './IAuthFormProps';
import { IAuthFormState } from './IAuthFormState';

import './Auth.css';
import { resources } from '../../../models/constants/resources';

export class Auth extends Component<IAuthFormProps, IAuthFormState> {
  constructor(props: IAuthFormProps) {
    super(props);
    this.state = {
      login: '',
      password: '',
      errors: {
        login: '',
        password: '',
      },
    };
  }

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { login, password } = this.state;
    const isValidationError = !!(this.validateLogin(login) || this.validatePassword(password));
    if (isValidationError) {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          login: this.validate(AuthFormFields.LOGIN, login),
          password: this.validate(AuthFormFields.PASSWORD, password),
        },
      }));
      return;
    }
    const { onSubmit } = this.props;
    onSubmit({ login, password });
  }

  onChange = (filed: AuthFormFields) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      this.setState((prevState) => ({ ...prevState, [filed]: value }));
    };
  }

  onBlur = (field: AuthFormFields) => {
    return () => {
      const { [field]: value } = this.state;
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [field]: this.validate(field, value),
        },
      }));
    };
  }

  private validate(field: AuthFormFields, value: string) {
    if (field === AuthFormFields.LOGIN) {
      return this.validateLogin(value).replace(new RegExp(StringParams.FIELD, 'g'), field);
    }
    return this.validatePassword(value).replace(new RegExp(StringParams.FIELD, 'g'), field);
  }

  private validateLogin(value: string) {
    const { loginPattern } = this.props;
    if (!value.trim().length) {
      return resources.auth.validation.required;
    }
    if (!loginPattern.test(value)) {
      return resources.auth.validation.forbiddenFieldThreeChars;
    }
    return '';
  }

  private validatePassword(value: string) {
    const { passwordPattern } = this.props;
    if (!value.trim().length) {
      return resources.auth.validation.required;
    }
    if (!passwordPattern.test(value)) {
      return resources.auth.validation.forbiddenFieldEightChars;
    }
    return '';
  }

  render() {
    const { login, password, errors } = this.state;
    const { action } = this.props;
    return (
      <div className="auth-form-wrap">
        <form onSubmit={this.onSubmit} className="auth-form">
          <label className="label" htmlFor="login">
            <span>Login: </span>
            <input
              type="text"
              className="control"
              id="login"
              value={login}
              onBlur={this.onBlur(AuthFormFields.LOGIN)}
              onChange={this.onChange(AuthFormFields.LOGIN)}
            />
            <span className="error">{errors.login}</span>
          </label>
          <label className="label" htmlFor="password">
            <span>Password: </span>
            <input
              type="password"
              className="control"
              id="password"
              value={password}
              onBlur={this.onBlur(AuthFormFields.PASSWORD)}
              onChange={this.onChange(AuthFormFields.PASSWORD)}
            />
            <span className="error">{errors.password}</span>
          </label>
          <button className="button-reset register-form-button" type="submit">{action}</button>
        </form>
      </div>
    );
  }
}

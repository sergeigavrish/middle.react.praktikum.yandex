import React, { FC } from 'react';

import { IFormFieldProps } from './IFormFieldProps';

import './FormField.css';

export const FormField: FC<IFormFieldProps> = ({
  label,
  value,
  onBlur,
  onChange,
  error,
  type = 'text',
}: IFormFieldProps) => (
  <label className="form-field" htmlFor={label}>
    <span className="form-field__label">{label}</span>
    <input
      id={label}
      type={type}
      className="form-field__control"
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
    <div className="form-field__error">
      <span>{error}</span>
    </div>
  </label>
);

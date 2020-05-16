export interface IFormFieldProps {
  label: string;
  value: string;
  onBlur(event: React.FocusEvent<HTMLInputElement>): void;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  error: string;
  type?: string;
}

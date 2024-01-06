import { date, number, string } from 'yup';

export const yupLimitTextInputValidation = (min = 1, max = Number.MAX_SAFE_INTEGER) =>
  string()
    .min(min, `This field must contain at least ${min} characters`)
    .max(max, `This field cannot exceed ${max} characters`)
    .required('* This field is required');
export const yupLimitNumberInputValidation = (min = 1, max = Number.MAX_SAFE_INTEGER) =>
  number()
    .min(min, `This field must be at least ${min}`)
    .max(max, `This field cannot exceed ${max}`)
    .required('* This field is required');
export const yupRequiredValidation = string().required('* This field is required');
export const yupDateValidation = date().required('* This field is required');

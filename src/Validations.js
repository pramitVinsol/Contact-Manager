export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const INVALID_EMAIL = 'Email Address is not valid.';
export const IS_REQUIRED = 'Field is required.';

export const isEmpty = (value) => {
  return value.length > 0 && value.trim().length > 0;
};

export const isRegex = (value, regEx) => {
  return regEx.test(String(value.toLowerCase()));
};
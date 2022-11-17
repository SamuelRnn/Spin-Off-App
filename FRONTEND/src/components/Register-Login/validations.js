import axios from 'axios';

export const validateRegister = (inputName, value) => {
  if (inputName === "username") {
    const nameFormat = /^[a-zA-Z0-9_-]*$/;
    if (nameFormat.test(value)) {
      return {
        error: false,
        errorClass: "valid_text",
        userError: false,
      };
    } else {
      return {
        error: "Current username format isn't allowed",
        errorClass: "invalid_text",
        userError: true,
      };
    }
  }
  if (inputName === "email") {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})*$/;
    if (emailFormat.test(value)) {
      return {
        error: false,
        errorClass: "valid_text",
        emailError: false,
      };
    } else {
      return {
        error: "Write a valid email!",
        errorClass: "invalid_text",
        emailError: true,
      };
    }
  }
  if (inputName === "password") {
    const passFormat = /^[^\s]*$/;
    if (!passFormat.test(value)) {
      return {
        error: "Don't use spaces!",
        errorClass: "invalid_text",
        passwordError: true,
      };
    } else if (value.length < 8) {
      return {
        error: "minimun length required!",
        errorClass: "invalid_text",
        passwordError: true,
      };
    } else {
      return {
        error: false,
        errorClass: "valid_text",
        passwordError: false,
      };
    }
  }
};
const temporalHost = 'http://localhost:3001';
//---------------------------------------------
export const validateLogin = async ({ username, password }) => {
  const result = await axios.get(temporalHost+'/user',{
    params: { username, password }
  })
  return result.data
}

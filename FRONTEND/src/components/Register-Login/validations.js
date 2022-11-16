export const validateRegister = (inputName, value) => {
  if(inputName === 'username'){
    const nameFormat = /^[a-zA-Z0-9_-]*$/;
    if(nameFormat.test(value)){
      return {
        error: false,
        errorClass: 'valid_text',
      }
    } else {
      return {
        error: 'Current username format isn\'t allowed',
        errorClass: 'invalid_text',
      }
    }
  }
  if(inputName === 'email'){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})*$/;
    if(emailFormat.test(value)){
      return {
          error: false,
          errorClass: 'valid_text',
        }
    } else {
      return {
        error: 'Write a valid email!',
        errorClass: 'invalid_text',
      }
    }
  }
  if(inputName === 'password'){
    const passFormat = /^[^\s]*$/;
    if(!passFormat.test(value)){
      return {
        error: 'Don\'t use spaces!',
        errorClass: 'invalid_text',
      }
    } else if(value.length < 8) {
      return {
        error: 'minimun length required!',
        errorClass: 'invalid_text',
      }
    } else {
      return {
        error: false,
        errorClass: 'valid_text',
      }
    }
  }
}
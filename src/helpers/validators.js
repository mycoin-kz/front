const validateEmail = (inputFields, errors) => {
  const email = inputFields.value.email
  if (!email) {
    errors.value.email.push("This field is required!");
    return
  }
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    errors.value.email.push("Invalid E-mail address!");
  }
};
const validatePassword = (inputFields, errors) => {
  const password = inputFields.value.password
  if (!password) {
    errors.value.password.push("This field is required!");
    return
  }

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (!password.match(lowerCaseLetters)) {
    errors.value.password.push('Password must contain at least one lowercase letter')
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (!password.match(upperCaseLetters)) {
    errors.value.password.push('Password must contain at least one capital (uppercase) letter')
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (!password.match(numbers)) {
    errors.value.password.push('Password must contain at least one number')
  }

  // Validate length
  if (!password.length >= 8) {
    errors.value.password.push('Password must contain at least 8 characters')
  }
};

export const registerValidate = (inputFields, errors) => {
  const clear = (errors) => {
    errors.value.name = [];
    errors.value.email = [];
    errors.value.password = [];
  };
  clear(errors);
  validateEmail(inputFields, errors)
  validatePassword(inputFields, errors)
  return (
    !errors.value.name.length
    && !errors.value.email.length 
    && !errors.value.password.length
  );
};

export const loginValidate = (inputFields, errors) => {
  const clear = (errors) => {
    errors.value.email = [];
    errors.value.password = [];
  };
  clear(errors);
  validateEmail(inputFields, errors);
  validatePassword(inputFields, errors);
  return !errors.value.email.length && !errors.value.password.length;
};


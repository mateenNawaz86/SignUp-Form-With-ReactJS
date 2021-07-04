export default function ValidationInfo(values) {
  const errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Please enter a First Name!";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Please enter a Last Name!";
  }

  if (!values.email) {
    errors.email = "Email required!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid email address!";
  }

  if (!values.mobileNum) {
    errors.mobileNum = "Please enter a Mobile  Number!";
  }

  if (!values.password) {
    errors.password = "Please enter a password!";
  } else if (values.password.length < 6) {
    errors.password = "Password neends to be 6 or more characters!";
  }

  if (!values.confPassword) {
    errors.confPassword = "Please enter a confirm password!";
  } else if (values.confPassword !== values.password) {
    errors.confPassword = "Passwords do not match!";
  }

  return errors;
}

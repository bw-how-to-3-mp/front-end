import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup
    .string()
    .required("Must include Name"),
  password: Yup
    .string()
    // .min(6, "Passwords must be at least 6 characters long.")
    .required("Password is Required")
  });
  export default LoginSchema
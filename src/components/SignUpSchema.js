import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
    name: Yup
        .string()
        .required("Must include Name"),    
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    password: Yup
        .string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Password is Required"),
        terms: Yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions")
});

export default SignUpSchema;
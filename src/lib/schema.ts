import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6).max(24),
});

export const signupSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6).max(24),
    name: Yup.string().required().min(3).max(24),
});

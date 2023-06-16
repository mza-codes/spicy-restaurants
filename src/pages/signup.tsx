import AuthLayout from "@/layouts/AuthLayout";
import AuthRoute from "@/components/AuthRoute";

export default function SignUpPage() {
    return (
        <AuthRoute fullscreen protect={false} path="/">
            <AuthLayout title="SignUp" type="signup" />
        </AuthRoute>
    );
}

SignUpPage._uniqueLayout = true;

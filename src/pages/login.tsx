import AuthLayout from "@/Layouts/AuthLayout";
import AuthRoute from "@/components/AuthRoute";

export default function LoginPage() {
    return (
        <AuthRoute fullscreen protect={false} path="/">
            <AuthLayout title="Login" type="login" />
        </AuthRoute>
    );
}

LoginPage._uniqueLayout = true;

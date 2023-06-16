import AuthLayout from "@/layouts/AuthLayout";
import AuthRoute from "@/components/AuthRoute";

export default function VerifyPage() {
    return (
        <AuthRoute fullscreen protect={false} path="/">
            <AuthLayout title="Verification" type="verify" />
        </AuthRoute>
    );
}

VerifyPage._uniqueLayout = true;

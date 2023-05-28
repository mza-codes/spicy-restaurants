import SubHeading from "@/components/SubHeading";
import useAuth from "@/hooks/useAuth";
import ProfileForm from "./ProfileForm";

export default function Profile() {
    const { user } = useAuth();

    return (
        <section className="flex-[3]">
            <SubHeading title="Account" />
            {user?.email && <ProfileForm user={user} />}
        </section>
    );
}

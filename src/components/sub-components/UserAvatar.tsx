export default function UserAvatar() {
    return (
        <div className="p-[2px] rounded-2xl border-[2px] border-gray.200">
            <img
                className="object-fill m-0 rounded-xl w-10"
                src="/assets/avatar.png"
                alt="user_avatar"
            />
        </div>
    );
}

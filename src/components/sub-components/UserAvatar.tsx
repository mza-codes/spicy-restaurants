export default function UserAvatar() {
    return (
        <div className="p-[1.5px] rounded-2xl border-2 border-gray.200">
            <img
                className="object-cover rounded-2xl w-12"
                src="/assets/avatar.png"
                alt="user_avatar"
            />
        </div>
    );
}

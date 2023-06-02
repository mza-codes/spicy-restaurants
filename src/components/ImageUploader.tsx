import { ButtonV2 } from "@/components/Button";
import { SUPPORTED_IMGS } from "@/lib/utils";
import { useState } from "react";

type Props = {};
const defaultImg = `/assets/avatar.png`;
const initial = {
    img: defaultImg,
    err: "",
    ok: false,
};

export default function ImageUploader({}: Props) {
    const [state, setState] = useState(initial);

    return (
        <div className="row gap-6 relative py-6 items-center">
            <span className="absolute text-secondary.400 text-xs font-semibold top-0 left-1">
                Avatar
            </span>
            <img
                className="rounded-xl w-24 h-24 object-cover"
                src={state.img}
                alt="user-avatar"
            />
            <input
                type="file"
                name="user-avatar"
                id="user-avatar"
                hidden
                accept="image/*"
                onChange={(e) => {
                    const file = e.target?.files?.[0];
                    if (!file)
                        return setState({
                            err: "invalid image",
                            img: defaultImg,
                            ok: false,
                        });

                    if (SUPPORTED_IMGS.includes(file.type)) {
                        setState({
                            img: URL.createObjectURL(file),
                            ok: true,
                            err: "",
                        });
                    } else {
                        setState({
                            err: "invalid image",
                            img: defaultImg,
                            ok: false,
                        });
                    }
                }}
            />
            <label
                htmlFor="user-avatar"
                className={`py-2 px-4 border-[1px] font-bold text-sm rounded-lg border-primary.400 cursor-pointer text-primary hover:bg-primary.200`}
            >
                Change
            </label>

            <ButtonV2
                color="#FF5C60"
                onClick={() => setState(initial)}
                disabled={!state.ok}
                hideBorder
            >
                Remove
            </ButtonV2>
            <span className="absolute text-error text-xs font-semibold bottom-0 left-1 capitalize">
                {state.err}
            </span>
        </div>
    );
}

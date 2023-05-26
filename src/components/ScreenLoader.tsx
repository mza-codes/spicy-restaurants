import { Spin } from "antd";
import React from "react";

export default function ScreenLoader() {
    return (
        <section className="min-h-[inherit] col center gap-5 animate-pulse font-semibold">
            <span className="text-2xl  uppercase">Loading</span>
            <Spin size="large" />
            <span className="text-xl text-secondary.400 uppercase">
                Please wait while getting data
            </span>
        </section>
    );
}

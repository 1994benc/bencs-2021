import React from "react";
import { charactorWidth, charactorHeight } from "./Resume";

export function Character() {
    return (
        <div
            style={{
                width: charactorWidth,
                height: charactorHeight,
            }}
            className={"rounded-full bg-transparent flex items-center justify-center text-4xl"}
        >
            🖐
        </div>
    );
}

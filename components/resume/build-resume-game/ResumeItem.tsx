import React, { useState } from "react";
import { useEffect } from "react";
import { IResumeItem } from "../IResumeItem";

export function ResumeItem({
    name, id, selectedItems,
}: {
    name: string;
    id: string;
    selectedItems: IResumeItem[];
}) {
    const [selected, setSelected] = useState<boolean>(false);

    useEffect(() => {
        console.log(selectedItems);
        if (selectedItems.find((stage) => stage.id === id)) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [selectedItems]);

    return (
        <div
            id={id}
            className={" cursor-pointer py-2 px-3 rounded-lg bg-black text-white text-xl flex items-center justify-center transition-all ease-in-out duration-200" +
                (selected ? " active-stage" : "")}
        >
            {name}
        </div>
    );
}

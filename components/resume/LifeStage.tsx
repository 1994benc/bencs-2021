import React, { useState } from "react";
import { useEffect } from "react";
import { Stage } from "./Stage";

export function LifeStage({
    name, id, selectedStages,
}: {
    name: string;
    id: string;
    selectedStages: Stage[];
}) {
    const [selected, setSelected] = useState<boolean>(false);

    useEffect(() => {
        console.log(selectedStages);
        if (selectedStages.find((stage) => stage.id === id)) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [selectedStages]);

    return (
        <div
            id={id}
            className={"w-96 h-12 rounded-lg bg-black text-white text-xl flex items-center justify-center transition-all ease-in-out duration-200" +
                (selected ? " active-stage" : "")}
        >
            {name}
        </div>
    );
}

import React from "react";

export default function DraggableResumeBuilder() {
  const reset = () => {};

  return (
    <div>
      {/* Header */}
      <div className="flex gap-3 items-center justify-start">
        <h2 className="text-3xl font-bold mx-2">
          Build my résumé interactively
        </h2>
        <button className="button-primary" onClick={reset}>
          Reset
        </button>
      </div>

      {/* Content */}
      
    </div>
  );
}

import React from "react";
import { ReactElement, useEffect } from "react";
import { Character } from "./Character";
import { ResumeItem } from "./ResumeItem";
import { IResumeItem } from "../IResumeItem";
import { useResumeItemsStore } from "../../../stores/useResumeItemsStore";
import { useRouter } from "next/dist/client/router";
import { resumeItems } from "../resumeItems";
const speed = 30;
export const charactorWidth = 32;
export const charactorHeight = 32;
const initialCharactorY = 40;
const initialCharactorX = 0;

export default function ResumeBuilderGame() {
  const characterRef = React.useRef<HTMLDivElement>(null);
  const setSelectedItems = useResumeItemsStore(
    (state) => state.setSelectedItems
  );
  const addSelectedItem = useResumeItemsStore((state) => state.addSelectedItem);
  const selectedItems = useResumeItemsStore((state) => state.selectedItems);
  const [enableClick, setEnableClick] = React.useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    let destroyed = false;
    const setUpCharactorMovement = (e: KeyboardEvent): void => {
      if (destroyed) {
        return;
      }
      const currentTop = parseInt(
        characterRef.current.style.top.replace("px", "")
      );
      const currentLeft = parseInt(
        characterRef.current.style.left.replace("px", "")
      );

      for (const item of resumeItems) {
        if (
          currentLeft + charactorWidth >= item.x &&
          currentTop + charactorHeight >= item.y
        ) {
          addResumeItemToState(item);
        }
      }

      if (e.key === "ArrowRight") {
        const isInView = isElementInView(characterRef.current);
        if (isInView) {
          characterRef.current.style.left = `${currentLeft + speed}px`;
        }
      } else if (e.key === "ArrowLeft") {
        const isInView = isElementInView(characterRef.current);
        if (isInView) {
          characterRef.current.style.left = `${currentLeft - speed}px`;
        }
      } else if (e.key === "ArrowUp") {
        const isInView = isElementInView(characterRef.current);
        if (isInView) {
          characterRef.current.style.top = `${currentTop - speed}px`;
        }
      } else if (e.key === "ArrowDown") {
        const isInView = isElementInView(characterRef.current);
        if (isInView) {
          characterRef.current.style.top = `${currentTop + speed}px`;
        }
      }
    };
    document.addEventListener("keydown", setUpCharactorMovement);

    return () => {
      destroyed = true;
      document.removeEventListener("keydown", setUpCharactorMovement);
    };
  }, []);

  const addResumeItemToState = (item: IResumeItem) => {
    addSelectedItem(item);
    if (item.id === "download-view") {
      goToResumePage();
    }
  };

  function isElementInView(element: HTMLElement) {
    var rect = element.getBoundingClientRect();

    return (
      rect.left >= 0 &&
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function resetCharactorToInitialPositions() {
    characterRef.current.style.top = `${initialCharactorY}px`;
    characterRef.current.style.left = `${initialCharactorX}px`;
  }

  function reset() {
    resetCharactorToInitialPositions();
    setSelectedItems([]);
    setEnableClick(true);
  }

  function goToResumePage() {
    router.push("/resume");
  }

  return (
    <div>
      <div className="flex gap-3 items-center justify-start">
        <h2 className="text-3xl font-bold mx-2">
          Build my résumé interactively
        </h2>
        <button className="button-primary" onClick={reset}>
          Reset
        </button>
        <div className="flex gap-2 items-center">
          <input
            checked={enableClick}
            onChange={(e) => {
              setEnableClick(e.target.checked);
            }}
            type="checkbox"
            name="enableClick"
            id="enableClick"
          />
          <label htmlFor="enableClick">Enable Click</label>
        </div>
        <button onClick={() => {
          reset();
          goToResumePage();
        }} className="button-primary">
          View the pre-built résumé instead
        </button>
      </div>
      <div className="description mx-2 my-3 dark:text-gray-400 text-gray-700">
        Use arrow keys (⬅️ ➡️ ⬆️ ⬇️) to move the hand (🖐) around and collect
        resume items.
      </div>

      <div className="w-full h-96 bg-transparent rounded-lg relative">
        <div
          className="absolute animate-bounce transition-all duration-200 ease-in-out"
          style={{
            left: initialCharactorX,
            top: initialCharactorY,
            zIndex: 10,
          }}
          ref={characterRef}
        >
          <Character />
        </div>

        {resumeItems.map((item) => {
          return (
            <div
              key={item.id}
              className="absolute"
              style={{
                left: item.x,
                top: item.y,
              }}
              onClick={() => {
                if (enableClick) {
                  addResumeItemToState(item);
                }
              }}
            >
              <ResumeItem
                selectedItems={selectedItems}
                name={item.name}
                id={item.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

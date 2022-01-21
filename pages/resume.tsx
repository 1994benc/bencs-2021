import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";
import { resumeItems } from "../components/resume/resumeItems";
import { useResumeItemsStore } from "../stores/useResumeItemsStore";
import { ResumeItemComponentForResumePage } from "../components/resume/resume-page/ResumeItemComponentForResumePage";

export default function ResumePage() {
  const selectedItems = useResumeItemsStore((state) => state.selectedItems);
  const router = useRouter();

  let itemsToRender = selectedItems.filter(
    (item) => item.id !== "download-view"
  );
  if (!itemsToRender.length) {
    itemsToRender = resumeItems.filter((item) => item.id !== "download-view");
  }
  console.log(itemsToRender);

  return (
    <div>
      <Head>
        <title>Ben's Résumé</title>
      </Head>
      <div className="mx-auto max-w-5xl py-10 px-3 text-left flex flex-col gap-3">
        <div className="flex flex-col gap-6">
          {itemsToRender.map((item) => (
            <ResumeItemComponentForResumePage
              key={item.id}
              item={item}
            ></ResumeItemComponentForResumePage>
          ))}
        </div>

        <div className="flex my-6">
          <button
            onClick={() => {
              router.back();
            }}
            className="button-primary"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

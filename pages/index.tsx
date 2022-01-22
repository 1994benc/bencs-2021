import Head from "next/head";
import React from "react";
import ResumeBuilderGame from "../components/resume/resume-builder-game/ResumeBuilderGame";
import copy from "copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Chomsang</title>
      </Head>
      <div>
        <Toaster />
      </div>
      <div className="mx-auto max-w-5xl py-10 px-3 text-left flex flex-col gap-3">
        <div className="md:block hidden">
          <ResumeBuilderGame />
        </div>
        <div className="md:hidden visible border dark:border-ben-dark p-10 rounded-lg ">
          <div className="flex flex-col gap-4">
            <div className="text-2xl mx-1 leading-snug">
              ⚠️ The Resume Builder is only available on a larger screen device
            </div>
            <button
              onClick={() => {
                copy("https://benchomsang.com");
                toast.success("Copied the link to this page");
              }}
              className="button-primary"
            >
              🔗 Copy link
            </button>
          </div>
        </div>
        {/* <DraggableResumeBuilder /> */}
      </div>
    </div>
  );
}

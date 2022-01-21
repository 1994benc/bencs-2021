import * as Separator from "@radix-ui/react-separator";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Resume from "../components/resume/Resume";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Chomsang</title>
      </Head>

      <div className="mx-auto max-w-5xl py-10 px-3 text-left flex flex-col gap-3">
        <Resume />
      </div>
    </div>
  );
}

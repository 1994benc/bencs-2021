import * as Separator from "@radix-ui/react-separator";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Chomsang</title>
      </Head>
      <div className="mx-auto max-w-3xl py-10 px-3 text-left">
        <ul className="flex flex-col gap-8 px-3 text-2xl">
          <li>
            <Link href="/">
              <a className="navlink-l">
                Hello world! This link takes you nowhere.
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

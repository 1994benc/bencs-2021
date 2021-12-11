import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="mx-auto sticky mt-10 max-w-3xl py-3 px-5 bg-black text-white rounded">
      <Link href="/"><a className="font-bold hover:text-yellow-300">Ben Chomsang</a></Link>
    </div>
  );
};

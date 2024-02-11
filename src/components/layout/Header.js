"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  console.log(session);
  const status = session.status;
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <div className="flex items-center ml-2 font-semibold text-2xl">
          <Link
            className="items-center ml-3 font-semibold text-2xl flex"
            href={"/"}
          >
            <Image
              className="logo"
              src="/NB.png"
              alt="Logo"
              width={50}
              height={50}
            />
            Nesh Bill
          </Link>
        </div>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        {status === "authenticated" && (
          <button
            onClick={() => signOut()}
            className="bg-primary rounded-full text-white px-6 py-1"
          >
            Log out
          </button>
        )}
        {status == "unauthenticated" && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              href={"/register"}
              className="bg-primary rounded-full text-white px-6 py-1"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

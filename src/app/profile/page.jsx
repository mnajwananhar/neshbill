"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data?.user?.image;
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 ">Profile Page</h1>
      <form className="max-w-md mx-auto">
        <div className="flex gap-4 items-center">
          <div>
            <div className="p-2 rounded-lg relative">
              <Image
                className="rounded-lg w-full h-full mb-1"
                src={userImage}
                alt={""}
                width={200}
                height={200}
              />

              <button type="submit">Edit</button>
            </div>
          </div>
          <div className="grow">
            <input type="text" placeholder="First and last name" />
            <input
              type="email"
              placeholder="Email"
              value={session.data?.user?.email}
              disabled={true}
            />
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}

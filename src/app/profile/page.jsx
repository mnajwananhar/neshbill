"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState("");
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [image, setImage] = useState("");
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
      setImage(session.data.user.image);
    }
  }, [session, status]);
  async function handleProfileInfoUpdate(e) {
    e.preventDefault();
    setSaved(false);
    setIsSaving(true);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName }),
    });
    setIsSaving(false);
    if (response.ok) {
      setSaved(true);
    }
  }

  async function handleFileChange(e) {
    const files = e.target.files;
    if (files.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const link = await response.json();
      setImage(link);
    }
  }

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 ">Profile</h1>

      <div className="max-w-md mx-auto">
        {saved && (
          <h2 className="text-center bg-green-200 p-4 border border-green-300 rounded-lg ">
            Profile saved!
          </h2>
        )}
        {isSaving && (
          <h2 className="text-center bg-blue-200 p-4 border border-blue-300 rounded-lg ">
            Saving...
          </h2>
        )}
        <div className="flex gap-4 items-center">
          <div>
            <div className="p-2 rounded-lg relative  max-w-[120px]">
              {image && (
                <Image
                  className="rounded-lg w-full h-full mb-1"
                  src={image}
                  alt={""}
                  width={200}
                  height={200}
                />
              )}

              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="border border-x-gray-300 cursor-pointer rounded-lg p-2 block text-center">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="First and last name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={session.data?.user?.email}
              disabled={true}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}

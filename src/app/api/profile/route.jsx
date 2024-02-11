import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const user = await getServerSession(authOptions);
  if ("name" in data) {
    //update user name
  }

  return Response.json(true);
}

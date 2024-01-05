import { checkDatabaseConnection } from "@/db/connect";

export async function GET(request: Request) {
  checkDatabaseConnection();
  return Response.json({ message: "Hello World" });
}

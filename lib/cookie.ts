import { CookieDB } from "cookie_driver";

export const cookie = new CookieDB(
  Deno.env.get("COOKIE_API")!,
  Deno.env.get("COOKIE_TOKEN")!,
);

export async function createTables() {
  if (Deno.env.get("DEV")) {
    try {
      await cookie.dropTable("users");
      await cookie.dropTable("children");
    } catch {
      // no op
    }
  }

  await cookie.createTable("users", {
    email: "string",
    avatar: "string",
  });

  await cookie.createTable("children", {
    user: "foreign_key",
    name: "string",
    email: "string",
    avatar: "string",
  });
}

export interface User {
  key: string;
  email: string;
  avatar: string;
}

export interface Child {
  key: string;
  user: string;
  name: string;
  email: string;
  avatar: string;
}

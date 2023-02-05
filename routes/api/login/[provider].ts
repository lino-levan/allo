import { setCookie } from "std/http/cookie.ts";
import { Handlers } from "$fresh/server.ts";
import { cookie, createTables, User } from "../../../lib/cookie.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const email = new URL(req.url).searchParams.get("email");

    if (!email || typeof email !== "string") return ctx.renderNotFound();

    await createTables();

    let key = "";

    const users = await cookie.select<User>("users", `eq($email, '${email}')`, {
      maxResults: 1,
    });

    if (users.length > 0) {
      // Login
      key = users[0].key;
    } else {
      // Signup
      key = await cookie.insert("users", {
        email,
        avatar: `https://api.dicebear.com/5.x/shapes/svg?seed=${
          encodeURIComponent(email)
        }`,
      });
    }

    const res = new Response("", {
      headers: {
        location: "/app",
      },
      status: 307,
    });

    // NEVER DO THIS IN PRODUCTION
    // THIS IS QUITE LITERALLY A DEMO
    // USE JWT
    // WE ARE DOING THIS WRONG
    // PLEASE DON'T DO THIS IN PROD
    // - Lino Le Van (2023)
    setCookie(res.headers, {
      name: "session",
      value: key,
      path: "/",
      httpOnly: true,
    });

    return res;
  },
};

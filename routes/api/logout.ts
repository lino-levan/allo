import { deleteCookie } from "std/http/cookie.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET() {
    const res = new Response("", {
      headers: {
        location: "/signup",
      },
      status: 307,
    });

    deleteCookie(res.headers, "session");

    return res;
  },
};

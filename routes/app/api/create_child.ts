import { Handlers } from "$fresh/server.ts";
import { cookie } from "../../../lib/cookie.ts";
import { AppState } from "../_middleware.tsx";

export const handler: Handlers<unknown, AppState> = {
  async POST(req, ctx) {
    const { name, email } = await req.json();

    const child = await cookie.insert("children", {
      user: ctx.state.user.key,
      balance: 0,
      last_deposit: null,
      avatar: `https://api.dicebear.com/5.x/shapes/svg?seed=${
        encodeURIComponent(email)
      }`,
      email,
      name,
    });

    return new Response(child);
  },
};

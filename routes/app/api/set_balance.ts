import { Handlers } from "$fresh/server.ts";
import { cookie } from "lib/cookie.ts";
import { AppState } from "lib/types.ts";

export const handler: Handlers<unknown, AppState> = {
  async POST(req) {
    const { balance, child_key } = await req.json();

    await cookie.update("children", child_key, {
      balance,
    });

    return new Response("");
  },
};

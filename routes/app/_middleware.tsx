import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { deleteCookie, getCookies } from "std/http/cookie.ts";
import { cookie } from "lib/cookie.ts";
import { AppState, Child, User } from "lib/types.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<AppState>,
) {
  const userKey = getCookies(req.headers)["session"];
  try {
    const user = await cookie.get<User>("users", userKey);
    ctx.state.user = user;
    ctx.state.children = await cookie.select<Child>(
      "children",
      `eq($user, '${userKey}')`,
    );
  } catch (err) {
    const res = new Response("", {
      headers: {
        location: "/signup",
      },
      status: 307,
    });

    deleteCookie(res.headers, "session");

    return res;
  }

  return await ctx.next();
}

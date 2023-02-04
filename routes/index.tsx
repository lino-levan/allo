import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    if(getCookies(req.headers)["session"]) {
      return new Response("", {
        headers: {
          location: "/app",
        },
        status: 307,
      });
    }
    
    return ctx.render();
  },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Allo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class="min-h-screen">
        <Header showLogin={true}/>
        <div class="p-4 mx-auto max-w-screen-lg ">
          <div class="grid grid-cols-2 gap-4 items-center h-screen mt-[-48px]">
            <div class="flex flex-col gap-8 items-center">
              <h1 class="text-6xl text-center">
                Teach great financial planning{" "}
                <span class="text-[#6c63ff] font-bold">interactively</span>
              </h1>
              <div class="flex gap-4">
                <a class="border rounded px-4 py-2" href="/signup">Sign Up →</a>
                <a class="px-4 py-2">See the demo →</a>
              </div>
            </div>
            <img src="/svg/teach.svg" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

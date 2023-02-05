import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "../../components/Footer.tsx";
import { Header } from "../../components/Header.tsx";
import { AppState } from "./_middleware.tsx";

export const handler: Handlers<AppState, AppState> = {
  GET(_, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function AppPage(props: PageProps<AppState>) {
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
        <Header user={props.data.user} />
        <div class="p-4 mx-auto max-w-screen-md grid grid-cols-2 gap-4">
          {props.data.children.map((child) => (
            <a
              href={"/app/child/" + child.key}
              class="p-4 border rounded shadow flex flex-col items-center h-60 hover:scale-105 transition-[scale]"
            >
              <div class="border-b w-full h-full flex flex-col justify-center items-center pb-4 mb-4">
                <img class="h-16 w-16 rounded-full" src={child.avatar} />
                <p class="text-2xl">{child.name}</p>
              </div>
              <div class="w-full">
                <p class="leading-none">$40</p>
                <p class="text-sm text-gray-500">
                  Last Deposit: {child.last_deposit > 0
                    ? new Date(child.last_deposit).toLocaleDateString()
                    : "Never"}
                </p>
              </div>
            </a>
          ))}
          <a
            href="/app/child/new"
            class="p-4 border rounded shadow flex justify-center items-center text-4xl h-60 hover:scale-105 transition-[scale]"
          >
            +
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

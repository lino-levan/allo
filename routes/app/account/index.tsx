import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "components/Footer.tsx";
import { Header } from "components/Header.tsx";
import { AppState } from "lib/types.ts";

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
        <div class="p-4 mx-auto max-w-screen-md flex flex-col gap-4">
          <div>
            <h1 class="text-2xl">Account Settings</h1>
            <h2 class="text-xl text-gray-500">
              {props.data.user.email.split("@")[0]}
            </h2>
          </div>
          <div class="p-4 border rounded flex flex-col gap-2">
            <h2 class="font-bold">Children Accounts</h2>
            <h3></h3>
            <div class="flex flex-col gap-4">
              {props.data.children.map((child) => (
                <div class="flex items-center gap-4">
                  <img class="h-8 w-8 rounded-full" src={child.avatar} />
                  <p>{child.name} ({child.email})</p>
                  <p class="ml-auto text-2xl">⋮</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

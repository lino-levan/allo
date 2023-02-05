import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "components/Footer.tsx";
import { Header } from "components/Header.tsx";
import { AppState, Child, User } from "lib/types.ts";
import AddMoney from "../../../../islands/AddMoney.tsx";

interface AddPage {
  user: User;
  child: Child;
}

export const handler: Handlers<AddPage, AppState> = {
  GET(_, ctx) {
    const child =
      ctx.state.children.filter((child) =>
        child.key === ctx.params.child_key
      )[0];

    return ctx.render({
      user: ctx.state.user,
      child,
    });
  },
};

export default function AppPage(props: PageProps<AddPage>) {
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
        <script src="https://js.stripe.com/v3/" />
      </Head>
      <div class="min-h-screen">
        <Header user={props.data.user} />
        <div class="p-4 mx-auto max-w-screen-md flex flex-col gap-8">
          <div class="flex gap-4">
            <a href={`/app/child/${props.params.child_key}`} class="text-4xl">
              ←
            </a>
            <img class="h-10 w-10 rounded-full" src={props.data.child.avatar} />
            <h1 class="text-4xl">{props.data.child.name}'s Account</h1>
          </div>
          <h1 class="text-3xl">
            How much would you like to add to {props.data.child.name}'s account?
          </h1>
          <AddMoney
            balance={props.data.child.balance}
            child_key={props.data.child.key}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

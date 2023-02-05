import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "../../../components/Footer.tsx";
import { Header } from "../../../components/Header.tsx";
import { AppState } from "./../_middleware.tsx";
import { Child, cookie, Transaction, User } from "../../../lib/cookie.ts";

interface ChildPageProps {
  user: User;
  child: Child;
  transactions: Transaction[];
}

export const handler: Handlers<ChildPageProps, AppState> = {
  async GET(_, ctx) {
    const child =
      ctx.state.children.filter((child) =>
        child.key === ctx.params.child_key
      )[0];

    const transactions = await cookie.select<Transaction>(
      "transactions",
      "eq($child, )",
    );

    return ctx.render({
      user: ctx.state.user,
      child,
      transactions,
    });
  },
};

export default function AppPage(props: PageProps<ChildPageProps>) {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
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
          <div class="flex items-center gap-4">
            <h1 class="text-4xl">{props.data.child.name}'s Account</h1>
            <a class="ml-auto border rounded px-4 py-2">Add Money</a>
            <a class="border rounded px-4 py-2 hover:bg-red-500 hover:text-white transition-all cursor-pointer">
              Restrict Account
            </a>
          </div>
          <p
            class={`text-3xl ${
              props.data.child.balance < 10 ? "text-red-500" : ""
            }`}
          >
            {currencyFormatter.format(props.data.child.balance)}
          </p>
          <h2 class="text-2xl">Recent Transactions</h2>
          <div>
            {props.data.transactions.map((transaction) => (
              <div>
                <h1 class="text-xl">
                  - {currencyFormatter.format(transaction.amount)}{" "}
                  {transaction.for}
                </h1>
                <p class="text-gray-600">
                  {new Date(transaction.date_created).toLocaleDateString()}
                </p>
              </div>
            ))}
            {props.data.transactions.length === 0 && (
              <p class="text-gray-600">
                No recent transactions!
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

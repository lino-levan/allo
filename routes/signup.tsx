import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import SignIn from "../islands/SignIn.tsx";

export default function Signup() {
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
        <Header />
        <div class="p-4 mx-auto max-w-screen-lg">
          <div class="flex flex-col gap-8 items-center">
            <div class="flex flex-col items-center">
              <h1 class="text-3xl font-bold">Welcome</h1>
              <h1 class="text-center text-gray-600">
                Sign up to Allo to ensure your <br />{" "}
                childrens' financial education
              </h1>
            </div>
            <SignIn />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

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
      <Header/>
      <div class="p-4 mx-auto max-w-screen-lg">
        <div class="flex flex-col gap-8 items-center py-16">
          <div class="flex flex-col items-center">
            <h1 class="text-3xl font-bold">Welcome</h1>
            <h1 class="text-center text-gray-600">Sign up to Allo to ensure your  <br /> childrens' financial education</h1>
          </div>
          <div class="flex flex-col gap-4">
            <input type="email" class="px-4 py-2 border-2 rounded w-72 outline-none focus:border-[#6c63ff] invalid:border-pink-500" placeholder="Email Address"/>
            <input type="password" class="px-4 py-2 border-2 focus:border-[#6c63ff] rounded w-72 outline-none" placeholder="Password"/>
            <button href="/login/google" class="px-4 py-2 bg-gray-100 hover:bg-[#6c63ff] hover:text-white transition-all rounded flex gap-4 justify-center">Continue</button>
            <div class="text-gray-500 flex items-center justify-between">
              <div class="border h-0 w-32" />
              or
              <div class="border h-0 w-32" />
            </div>
            <a href="/login/google" class="px-4 py-2 bg-gray-100 hover:bg-gray-300 rounded flex gap-4 justify-center transition-all"><img src="/icons/google.svg"/><span>Continue with Google</span></a>
            <a href="/login/microsoft" class="px-4 py-2 bg-gray-100 hover:bg-gray-300 rounded flex gap-4 justify-center transition-all"><img src="/icons/microsoft.svg"/><span>Continue with Microsoft</span></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

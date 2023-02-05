export default function SignIn() {
  return (
    <div class="flex flex-col gap-4">
      <input
        id="email"
        type="email"
        class="px-4 py-2 border-2 rounded w-72 outline-none focus:border-[#6c63ff] invalid:border-pink-500"
        placeholder="Email Address"
      />
      <input
        id="password"
        type="password"
        class="px-4 py-2 border-2 focus:border-[#6c63ff] rounded w-72 outline-none"
        placeholder="Password"
      />
      <button
        class="px-4 py-2 bg-gray-100 hover:bg-[#6c63ff] hover:text-white transition-all rounded flex gap-4 justify-center"
        onClick={() => {
          const email =
            (document.getElementById("email") as HTMLInputElement).value;
          location.href = `/api/login/email?email=${email}`;
        }}
      >
        Continue
      </button>
      <div class="text-gray-500 flex items-center justify-between">
        <div class="border h-0 w-32" />
        or
        <div class="border h-0 w-32" />
      </div>
      <a
        href="/api/login/google"
        class="px-4 py-2 bg-gray-100 hover:bg-gray-300 rounded flex gap-4 justify-center transition-all"
      >
        <img src="/icons/google.svg" />
        <span>Continue with Google</span>
      </a>
      <a
        href="/api/login/microsoft"
        class="px-4 py-2 bg-gray-100 hover:bg-gray-300 rounded flex gap-4 justify-center transition-all"
      >
        <img src="/icons/microsoft.svg" />
        <span>Continue with Microsoft</span>
      </a>
    </div>
  );
}

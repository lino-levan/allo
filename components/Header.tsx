export function Header(props: {
  showLogin?: boolean
}) {
  return (
    <div class="p-4 bg-gray-100 flex justify-center">
      <div class="max-w-screen-lg w-full flex items-center">
        <a class="text-4xl font-righteous hover:text-[#6c63ff]" href="/">Allo</a>
        <div class="ml-auto flex gap-6 items-center">
          {
            props.showLogin && (
              <>
                <a href="/login">Login</a>
                <a class="border border-gray-400 rounded px-4 py-2" href="/signup">Get Started</a>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "preact/hooks";
import { User } from "../lib/cookie.ts";

export default function Avatar(props: {
  user: User;
}) {
  const [open, setOpened] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOpened(false);
    });
  }, []);

  return (
    <div>
      <img
        class="h-8 w-8 rounded-full cursor-pointer"
        src={props.user.avatar}
        onClick={(e) => {
          e.stopPropagation();
          setOpened(!open);
        }}
      />
      <div
        class={`absolute translate-x-[-160px] transition-all flex flex-col gap-0 text-gray-600 items-center w-48 p-0 pt-4 bg-white rounded shadow ${
          open
            ? "opacity-100 translate-y-2"
            : "opacity-0 pointer-events-none translate-y-12"
        }`}
      >
        <a href="/app/account" class="flex flex-col items-center gap-2 mb-2">
          <img
            class="h-16 w-16 rounded-full"
            src={props.user.avatar}
          />
          <p class="text-lg font-bold hover:text-underline">
            {props.user.email.split("@")[0]}
          </p>
        </a>
        <a
          class="px-4 py-3 border-t w-full border-gray-100 flex items-center "
          href="/app/new"
        >
          <div class="hover:text-underline">
            New Child Account
          </div>
          <span class="ml-auto text-xl text-gray-400 hover:text-gray-700">
            +
          </span>
        </a>
        <a
          class="px-4 py-3 border-t w-full border-gray-100 hover:text-underline"
          href="/api/logout"
        >
          Sign out
        </a>
      </div>
    </div>
  );
}
function Github() {
  return (
    <svg
      class="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      >
      </path>
    </svg>
  );
}

function FooterSection(props: {
  category: string;
  items: [string, string][];
}) {
  return (
    <div class="flex flex-col items-center md:items-start gap-2">
      <b>{props.category}</b>
      {props.items.map(([name, url]) => (
        <a class="hover:text-underline" href={url}>{name}</a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <div class="w-full flex justify-center mb-16 p-4">
      <div class="w-full max-w-screen-lg flex flex-col md:flex-row items-center md:items-start gap-8 pt-8 text-sm border-t dark:border-gray-700">
        <a href="/" class="text-2xl font-righteous hover:text-[#6c63ff]">
          Allo
        </a>
        <div class="grid w-full grid-cols-2 md:grid-cols-4 justify-center gap-8">
          <FooterSection
            category="Why Allo?"
            items={[["Our philosophy", ""]]}
          />
          <FooterSection
            category="Products"
            items={[["Allo for Kids", ""], [
              "Allo for Adults",
              "",
            ]]}
          />
          <FooterSection
            category="Sources"
            items={[["Forum", ""]]}
          />
          <FooterSection
            category="Company"
            items={[["Pricing", "/pricing"], ["Privacy Policy", "/privacy"]]}
          />
        </div>
        <div class="flex flex-col items-center md:items-start gap-2 text-gray-400">
          <p class="w-max text-center md:text-left">
            Copyright © 2023 Allo Inc.<br />
            All rights reserved.
          </p>
          <a
            class="hover:text-gray-700 dark:hover:text-white"
            href="https://github.com"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}
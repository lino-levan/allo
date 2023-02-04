import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        "righteous": '"Righteous"',
      },
    },
    preflight: {
      "@font-face": [
        {
          fontFamily: "Righteous",
          fontWeight: "400",
          src:
            'url(https://fonts.googleapis.com/css2?family=Righteous&display=swap) format("woff")',
        },
      ],
    },
  },
} as Options;

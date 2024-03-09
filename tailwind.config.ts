import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.tsx",
    "../node_modules/some-pkg/**",
  ],
} satisfies Config;

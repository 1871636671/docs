import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs",
  description: "gzp",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "前端", link: "/web/index" },
    ],

    sidebar: [
      {
        text: "JavaScript",
        items: [{ text: "1111", link: "/web/index" }],
      },
      {
        text: "Vue",
        items: [],
      },
      {
        text: "React",
        items: [],
      },
      {
        text: "React Native",
        items: [],
      },
      {
        text: "自动化",
        items: [{ text: "CI/CD", link: "/web/website/CI/index" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/1871636671" }],
  },
});

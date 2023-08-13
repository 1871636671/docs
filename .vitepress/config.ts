import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs",
  description: "gzp",
  base: "/docs/",
  outDir: "./.vitepress/docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/public/img/gzp.jpeg",
    outline: "deep",
    outlineTitle: "大纲",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    nav: [
      { text: "主页", link: "/" },
      { text: "前端", link: "/web/index" },
      { text: "后端", link: "/server/index" },
    ],

    sidebar: {
      "/web/": [
        {
          text: "JavaScript",
          // collapsed: true,
          items: [{ text: "1111", link: "/web/index" }],
        },
        {
          text: "Vue",
          items: [],
        },
        {
          text: "React",
          items: [
            { text: "React Native ODM打包", link: "/web/react/rn-odm/index" },
            { text: "React Native 升级", link: "/web/react/rn-upgrade/index" },
          ],
        },
        {
          text: "自动化",
          items: [{ text: "jenkins", link: "/web/website/jenkins/index" }],
        },
      ],
      "/server/": [
        {
          text: "Node",
          // collapsed: true,
          items: [{ text: "koa项目实战", link: "/server/node/koa/index" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/1871636671" }],
  },
});

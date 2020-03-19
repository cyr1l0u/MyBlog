module.exports = {
  title: "震雨Rain",
  description: "震雨rain的博客,Webgis,arcgis,openlayer",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  markdown: {
    // lineNumbers: true // 代码块显示行号
  },
  locales: {
    "/": {
      lang: "zh-CN" // 多语言设置
    }
  },
  themeConfig: {
    logo: "http://img.rain7.top/rain7.top.logo.png", //导航栏 logo
    sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    // lastUpdated: "上次更新", // 文档更新时间：每个文件git最后提交的时间
    nav: require("./thermeConfig/autoNav.js"), // 导航栏设置
    sidebar: require("./thermeConfig/autoSidebar.js") // 侧边栏
    // repo: "LuckRain7/MyBlog"
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-160724658-1"
      }
    ]
  ]
};

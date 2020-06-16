module.exports = {
  title: "OpenEEW",
  tagline: "Build an earthquake early-warning for your community",
  url: "https://openeew.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "openeew", // Usually your GitHub org/user name.
  projectName: "openeew-docs", // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-168243058-1",
    },
    algolia: {
      apiKey: "7bb5dd0f9f693e1fb3c126fbd97a229d",
      indexName: "openeew",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    announcementBar: {
      id: "slack", // Any value that will identify this message.
      content:
        '♥ Join the community on <a target="_blank" rel="noopener noreferrer" href="https://join.slack.com/t/openeew/shared_invite/zt-cibhc0za-XKReMPobi2DsrPusORJZVQ">Slack</a> ♥',
      backgroundColor: "#35e1ff", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
    },
    navbar: {
      title: "",
      logo: {
        alt: "OpenEEW Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-white.svg", // Default to `logo.src`.
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/openeew",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction/",
            },
            {
              label: "Get Started",
              to: "docs/read-first/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/openeew",
            },
            {
              label: "Slack",
              href:
                "https://join.slack.com/t/openeew/shared_invite/zt-cibhc0za-XKReMPobi2DsrPusORJZVQ",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/grilloshake",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/openeew",
            },
            {
              label: "Custom solutions",
              href: "https://grillo.io",
            },
          ],
        },
      ],
      logo: {
        alt: "OpenEEW Logo",
        src: "img/logo-white.svg",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Grillo Holdings Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/openeew/openeew-docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/openeew/openeew-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
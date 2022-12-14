import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '593'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '6da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '4b5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '143'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '0c0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '6a7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '88e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '447'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd25'),
    routes: [
      {
        path: '/docs/category/configuration',
        component: ComponentCreator('/docs/category/configuration', '5c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/deployment',
        component: ComponentCreator('/docs/category/deployment', '901'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/fundamentals',
        component: ComponentCreator('/docs/category/fundamentals', '85a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/model-zoo',
        component: ComponentCreator('/docs/category/model-zoo', '345'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/changelog',
        component: ComponentCreator('/docs/changelog', 'fe5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/credits',
        component: ComponentCreator('/docs/credits', '01c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/configuration/config',
        component: ComponentCreator('/docs/getting-started/configuration/config', '357'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/deployment/docker',
        component: ComponentCreator('/docs/getting-started/deployment/docker', 'b39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/installation',
        component: ComponentCreator('/docs/getting-started/installation', '490'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/troubleshooting',
        component: ComponentCreator('/docs/getting-started/troubleshooting', '7e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/architecture-overview',
        component: ComponentCreator('/docs/guides/architecture-overview', '827'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/executor',
        component: ComponentCreator('/docs/guides/executor', '0cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/flow',
        component: ComponentCreator('/docs/guides/flow', '740'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/models/',
        component: ComponentCreator('/docs/models/', '0c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '367'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

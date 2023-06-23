/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 Create as many sidebars as you want.

 Note:
 When a doc page is mentioned in multiple sidebars, the latter will take precedence
 and will render in the docs.
 */

const guides = {
  type: 'category',
  label: 'Guides',
  collapsed: false,
  items: [
    {
      type: 'category',
      label: 'Integrate a new API',
      link: { type: 'doc', id: 'guides/how-to-create' },
      collapsed: true,
      items: [
        'guides/setup-the-environment',
        //'guides/create-new-use-case',
        //'guides/add-new-provider',
        'guides/using-multiple-providers',
        'guides/map-use-case-to-provider',
        'guides/run-use-case',
        'guides/debugging-onesdk',
        'guides/test-use-case'
      ],
    },
    'guides/api-keys',
    //'guides/integrations-monitoring',
  ],
};

const classicGuides = {
  type: 'category',
  label: 'Guides',
  collapsed: false,
  items: [
    {
      type: 'category',
      label: 'How to integrate new API',
      link: { type: 'doc', id: 'classic/guides/how-to-create' },
      collapsed: true,
      items: [
        'classic/guides/setup-the-environment',
        'classic/guides/create-new-use-case',
        'classic/guides/add-new-provider',
        'classic/guides/map-use-case-to-provider',
        'classic/guides/run-use-case',
        'classic/guides/test-use-case',
        'classic/guides/publishing',
        'classic/guides/interactive-designer',
      ],
    },
    {
      type: 'category',
      label: 'Working with providers',
      collapsed: true,
      items: [
        'classic/guides/find-provider-by-name',
        'classic/guides/add-new-provider',
        'classic/guides/using-multiple-providers',
      ],
    },
    'classic/guides/api-keys',
    'classic/guides/integrations-monitoring',
  ],
};

module.exports = {
  mainSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'introduction/getting-started',
          label: 'Superface in 3 minutes'
        }
        ,
        'introduction/quick-start',
        'introduction/quick-start-sdk'
      ]
    },
    guides,
    {
      type: 'category',
      label: 'Provider API Quick Starts',
      collapsed: true,
      items: [
        'api-examples/mailgun',
        'api-examples/notion',
        'api-examples/resend',
        'api-examples/slack'
      ]
    },
    {
      type: 'category',
      label: 'Code Examples',
      collapsed: true,
      items: [
        'examples/nodejs',
        'examples/cloudflare-workers',
        'examples/python'
      ]
    },
    {
      type: 'doc',
      id: 'support',
      label: 'Help & Support'
    }
  ],
  referenceSidebar: [
    'reference/index',
    'reference/one-sdk',
    'reference/superjson',
    {
      type: 'category',
      label: 'Comlink',
      link: { type: 'doc', id: 'comlink/index' },
      collapsed: true,
      items: [
        { type: 'doc', id: 'comlink/reference/profile', label: 'Profile' },
        { type: 'doc', id: 'comlink/reference/map', label: 'Map' },
        { type: 'doc', id: 'comlink/reference/provider', label: 'Provider' },
        { type: 'doc', id: 'comlink/reference/binary_data', label: 'Binary Data' },
        { type: 'doc', id: 'comlink/specifications', label: 'Specifications' },
      ],
    },
    'reference/glossary',
  ],
  classicSidebar: [
    'classic/index',
    'classic/how-superface-works',
    'classic/getting-started',
    'classic/advanced-usage',
    classicGuides,
    'classic/verification',
    {
      type: 'category',
      label: 'Upgrade guides',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'classic/upgrade/one-sdk-v2',
          label: 'OneSDK v2.0',
        },
      ],
    }
  ]
};

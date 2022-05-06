---
slug: /
id: introduction
---

# Introduction

⚡️ Superface will help you to quickly use and manage integrations, so you can focus on your application.

💸 Developing integrations over and over is expensive. Use integrations developed by others as you'd use npm packages or crates.

🔐 You data is safe, Superface isn't proxy.

🎓 This approach gives you a framework to decouple the lifecycle of your application and integrations it uses.

💥 Ready for more? Use advanced features like provider failover and monitoring.

🧐 Superface is a language and a protocol for abstracting integrations to application use-cases. It allows use-case discovery and distribution of integration code at runtime.

## Fast track ⏱️

The easiest way to start is with [OneSDK](https://github.com/superfaceai/one-sdk-js) for Node.js and with an existing use-case. Let's say, you want to see what repositories Superface has on GitHub.

Install [Node.js](https://nodejs.org/en/download/) and create a new project:

```shell
mkdir my_project
cd my_project
npm init -y
```

Install [OneSDK](https://github.com/superfaceai/one-sdk-js) and configure [VCS User Repositories](https://superface.ai/vcs/user-repos) profile:

```shell
npx @superfaceai/cli install vcs/user-repos --providers github
```

Create `index.js` file, and insert the following code:

```js
const { SuperfaceClient } = require('@superfaceai/one-sdk');

const sdk = new SuperfaceClient();

async function run() {
  // Load the installed profile
  const profile = await sdk.getProfile('vcs/user-repos');

  // Use the profile
  const result = await profile.getUseCase('UserRepos').perform({
    user: 'superfaceai',
  });

  return result.unwrap();
}

run();
```

Run it:

```shell
node index.js
```

:::tip

Check [OneSDK repository](https://github.com/superfaceai/one-sdk-js) to learn more about implementation.

Or read [getting started](./getting-started.mdx) for more detailed step by step guide.
:::
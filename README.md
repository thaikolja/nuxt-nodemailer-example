# Nuxt 3 Nodemailer Example

![GitLab Release](https://img.shields.io/gitlab/v/release/thaikolja%2Fnuxt-nodemailer-example) ![GitLab Last Commit](https://img.shields.io/gitlab/last-commit/thaikolja%2Fnuxt-nodemailer-example) ![GitLab License](https://img.shields.io/gitlab/license/thaikolja%2Fnuxt-nodemailer-example)

This is a **minimal**, **well-commented**, and **easy-to-understand** starter template showing you **how to send emails** from a **Nuxt 3** app using **Nodemailer**. Whether you’re new to Nuxt or server-side JavaScript, this guide has plenty of 👉 **hyperlinks** and 📚 **resources** to help you every step of the way.

[TOC]

## 1. 🧐 What Is This?

A **simple demo** with minimal code and a lot of inline comments showing how to:

- **Use [Nodemailer](https://nodemailer.com/about/) to send emails via SMTP (primary purpose)**
- Create a **server API route** in [Nuxt 3](https://nuxt.com/) (`/server/api/send.post.ts`)
- Securely **store secrets** in an [`.env`](https://12factor.net/config) file and retrieve them
- **Trigger the email** from a basic Vue form with [`$fetch`](https://nuxt.com/docs/3/apis/nuxt#fetch)

## 2. 💡 Things You Should Know

This demo project was completed on July 8, 2025, and won't be updated unless a bug is found. The date matters because it indicates the latest versions of all modules listed in the `package.json` file.

I created this project using **macOS Sequia** `v15.6 Beta`. If you're using [Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) or [Linux](https://www.geeksforgeeks.org/node-js/installation-of-node-js-on-linux/) and have no prior experience with Nuxt or Node.js projects, please familiarize yourself with them before continuing.

## 3. ✅ Prerequisites

Before you begin, you need a few things:

1. [Node.js](https://nodejs.org/en/download) `v22.17.0` or newer (test with the command `node -v`)
2. Node package manager like `npm`, `yarn`, or `bun` (preferred)
3. A **Gmail** account with an app-specific password that you can [create here](https://myaccount.google.com/apppasswords)
4. Basic familiarity with the terminal/command line

## 4. 📦 Setup & Installation

1. **Clone this repository**

```bash
git clone https://gitlab.com/thaikolja/nuxt-nodemailer-example
cd nuxt-nodemailer-example
```
2. **Install dependencies**
```bash
bun i # Recommended
# or
npm install
# or
yarn install
# or
pnpm install
```

3. **Review project structure**
```
.
├─ assets/          # CSS & static assets (Tailwind CSS)
├─ pages/           # Vue pages (front-end form)
├─ server/
│   └─ api/
│       └─ send.post.ts  # ← Our email-sending endpoint
├─ .env             # ← You’ll create this (secrets live here)
├─ nuxt.config.ts   # Nuxt configuration
└─ package.json     # Project metadata & scripts
```

## 5. 🔐 Configure Your Email Credentials

### 5.1 Generate a Gmail App Password

1. Go to Google Account → **Security** → [App passwords](https://myaccount.google.com/apppasswords).
2. Give the password a name (i.e., "Nuxt Nodemailer Example").
3. Click **Generate**, then **copy** the 16-character password.

> [!WARNING]
>
> **Do not** use your main Gmail password. **App Passwords** are required for SMTP access.

### 5.2 Create `.env`

In the project root, create a file named `.env` and add:

```env
# Who receives the emails (your inbox)
EMAIL_TO=your_receive_email@example.com

# Who sends the emails (your Gmail)
EMAIL_USERNAME=your_gmail_address@gmail.com

# The App Password you generated
EMAIL_PASSWORD=XXXXXXXXXXXXXXXX
```

> [!WARNING]
>
> 🛡️ `.env` is listed in `.gitignore` to keep it **out of version control**.

## 6. ▶️ Run the Example

Start the Nuxt **development** server:

```bash
npm run dev
# or `bun dev`, `yarn dev`, `pnpm dev`
```

Open your browser at [http://localhost:3000](http://localhost:3000). Fill out the form and hit **Send**—then check your inbox!

## 7. 🔍 Exploring the Code

* `server/api/send.post.ts`: **This is the core of the example.** Study this file to understand how Nodemailer is configured and used. It's heavily commented to explain each step.
* `pages/index.vue`: Contains the simple form that triggers the API call. It shows how to use `$fetch` to communicate with the Nuxt server endpoint.
* `nuxt.config.ts`: The configuration file for Nuxt. Note that no special configuration is needed for the server route to work.
* `package.json`: Lists the project dependencies, including `nodemailer`.

## 8. 🎉 Done!

🎉 You’re all set! This example should provide a solid foundation for sending emails in your Nuxt 3 applications. Feel free to fork, experiment, and build your next big feature!

## 9. 📚 Useful Resources

- 🔗 Vue.js Official Guide: https://vuejs.org/guide/
- 🔗 Nuxt 3 Docs: https://nuxt.com/docs
- 🔗 Nodemailer Tutorial: https://nodemailer.com/about/
- 🔗 Tailwind CSS: https://tailwindcss.com/
- 🔗 12-Factor Apps (Config): https://12factor.net/config
- 🔗 Environment Variables in Node: https://nodejs.org/api/process.html#processenv
- 🔗 Deploying Nuxt 3: https://nuxt.com/docs/deployment/introduction

## 10. Authors

* Kolja Nolte (kolja.nolte@gmail.com)
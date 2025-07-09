# Nuxt 3 Nodemailer Example

![GitLab Release](https://img.shields.io/gitlab/v/release/thaikolja%2Fnuxt-nodemailer-example) ![GitLab Last Commit](https://img.shields.io/gitlab/last-commit/thaikolja%2Fnuxt-nodemailer-example) ![GitLab License](https://img.shields.io/gitlab/license/thaikolja%2Fnuxt-nodemailer-example)

This is a **minimal**, **well-commented**, and **easy-to-understand** educational starter template showing you **how to send emails** from a [Nuxt 3](https://nuxt.com/docs/getting-started/installation)[^1] app using [Nodemailer](https://www.npmjs.com/package/nodemailer). This demo project is aimed at learners, and comes with plenty of 👉 hyperlinks and 📚 resources to help you every step of the way. Please note that emails can only be sent through [SSR](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering)-rendered sites, not [static or client-side](https://nuxt.com/docs/guide/concepts/rendering#client-side-rendering) sites. However, your local development server will work just fine! Simply follow the instructions, read the commented source code, and find out how to send emails with Nuxt.js!

[TOC]

## 1. 🧐 What Is This?

A **simple demo** for Nuxt learners with minimal code and a lot of inline comments that teaches you quickly how to:

- **Use [Nodemailer](https://nodemailer.com/about/) to send emails via SMTP (primary purpose)**,
- create a **server API route** in [Nuxt 3](https://nuxt.com/) (`/server/api/send.post.ts`),
- securely **store secrets** in an [`.env`](https://12factor.net/config) file and retrieve them,
- **trigger the email** from a basic Vue form with [`$fetch`](https://nuxt.com/docs/3/apis/nuxt#fetch).

## 2. 💡 Things You Should Know

This demo project was completed in July 2025 and won't be updated unless a bug is found. The date matters because it indicates the latest versions of all modules listed in the `package.json` file.

I created this project using **macOS Sequoia** `v15.6 Beta` M1. If you're using [Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) or [Linux](https://www.geeksforgeeks.org/node-js/installation-of-node-js-on-linux/) and have no prior experience with JavaScript frameworks or Node.js projects, please familiarize yourself with these technologies before continuing.

## 3. ✅ Prerequisites

Before you begin, you need a few things:

1. [Node.js](https://nodejs.org/en/download) `v22.17.0` (LTS)[^2] or newer (test with the command `node -v`).
2. Node package manager like `npm`, `yarn`, or `bun` (recommended, [download here](https://bun.sh/package-manager)).
3. A **Gmail** account with an **app-specific password** that you can [create here](https://myaccount.google.com/apppasswords).
4. Basic familiarity with the terminal/command line.

## 4. 📦 Setup & Installation

1. **Clone this repository:**

```bash
git clone https://gitlab.com/thaikolja/nuxt-nodemailer-example
cd nuxt-nodemailer-example
```
2. **Install dependencies:**
```bash
bun i # Recommended
# or
npm install
# or
yarn install
# or
pnpm install
```

3. **Understand the project structure:**
```
├─ assets/          			# CSS & static assets (Tailwind CSS)
├─ components/						# ← Header, footer, and form partials
├─ pages/           			# ← The single index.vue (front-end form) file
├─ node_modules/					# Ignore. Packages from package.json are installed here
├─ public/								# Public-facing stuff, like Nuxt's favicon
├─ server/
│   └─ api/
│       └─ send.post.ts  	# ← Our email-sending endpoint
├─ .env             			# ← You’ll create this (secrets live here)
├─ .env.example						# You can copy the example content into your .env
├─ nuxt.config.ts   			# Nuxt configuration
└─ package.json     			# Modules and scripts (never delete)
```

## 5. 🔐 E-Mail Setup

### 5.1 Generate a Gmail App-Specific Password

1. Go to Google Account → **Security** → [App passwords](https://myaccount.google.com/apppasswords).
2. Give the password a name (e.g., "Nuxt Nodemailer Example").
3. Click **Generate**, then **copy** the 16-character password for the next step.

> [!WARNING]
>
> **Do not** use your main Gmail password. **App-specific passwords** are required for email access over SMTP.

### 5.2 Create `.env`

In the project root, there is a file named `.env.example`. Copy the content of this file (or the one shown below), paste it into your `.env` file, and replace the example values with the right ones.

> [!TIP]
>
> Depending on your OS, you might not see files starting with a `.`. On macOS, toggle the visibility by pressing `⌘` + `.`.

```env
# Enter the email address the message will be sent to (example)
EMAIL_TO=emil.sinclaire@gmail.com

# The Gmail username of your email account (example)
EMAIL_USERNAME=peter.pan@gmail.com

# The app-specific password for your email account (example)
EMAIL_PASSWORD="pdvz pfdl yalf hmyw"
```

> [!IMPORTANT]
>
>  `.env` is listed in `.gitignore` to exclude it from [version control systems](https://stackoverflow.com/questions/30696930/how-to-hide-env-file-from-github) (GitHub, GitLab, etc.). Otherwise, your passwords are publicly visible to everyone.

## 6. ▶️ Run the Example

After all dependencies have been installed, you can start the Nuxt **development** server:

```bash
bun dev
# or `npm run dev`, `yarn dev`, `pnpm dev`
```

Open your browser at [http://localhost:3000](http://localhost:3000). Fill out the form and hit **"Send Message"**—then check your inbox (including your spam folder).

## 7. 🎉 Done!

🎉 You’re all set! This example should provide a solid foundation for sending emails in your Nuxt 3 applications. Feel free to fork, experiment, and build your next Nuxt.js project—with or without Nodemailer.

## 8. 🔍 Learn From the Code

The project has tons of comments. They're not AI-generated and written to help you understand what goes on, step by step. You find them in these core files:

* `server/api/send.post.ts`:[^3] **This is the core of the example.** Study this file to understand how Nodemailer is configured and used. It's heavily commented to explain each step.
* `pages/index.vue`: Contains the simple form that triggers the API call. It shows how to use `$fetch` to communicate with the Nuxt server endpoint.
* `nuxt.config.ts`: The configuration file for Nuxt. Note that no special configuration is needed for the server route to work.
* `package.json`: Lists the project dependencies (modules), including the required `nodemailer` module.

## 9. 📚 Useful Resources

- 🔗 **Vue.js Official Guide:** https://vuejs.org/guide/
- 🔗 **Nuxt 3 Docs:** https://nuxt.com/docs
- 🔗 **Nodemailer Tutorial:** https://nodemailer.com/about/
- 🔗 **Tailwind CSS:** https://tailwindcss.com/
- 🔗 **Environment Variables in Node:** https://nodejs.org/api/process.html#processenv
- 🔗 **Deploying Nuxt 3:** https://nuxt.com/docs/deployment/introduction

## 10. 👨‍💻 Authors

* Kolja Nolte (kolja.nolte@gmail.com)

## Footnotes

[^1]: Nuxt `v3.17.6` is used
[^2]: Older versions might work as well, but by using `v22.17.0`, you're on the safe side 
[^3]: Despite being programmed with [TypeScript](https://www.w3schools.com/typescript/typescript_intro.php) files `.ts`, TS is used only very sparingly
# Nuxt 3 Nodemailer Example

![GitLab Release](https://img.shields.io/gitlab/v/release/thaikolja%2Fnuxt-nodemailer-example) ![GitLab Last Commit](https://img.shields.io/gitlab/last-commit/thaikolja%2Fnuxt-nodemailer-example) ![GitLab License](https://img.shields.io/gitlab/license/thaikolja%2Fnuxt-nodemailer-example)

This is a **minimal**, **well-commented**, and **easy-to-understand** educational starter template showing you **how to send emails** from a [**Nuxt 3**](https://nuxt.com/docs/getting-started/installation)[^1] (and **Nuxt 4**) app using [**Nodemailer**](https://www.npmjs.com/package/nodemailer) and [Google Mail](https://mail.google.com/mail/u/0/), which requires an `@gmail.com` address. This demo project is designed for beginners and learners and includes numerous comments in every file to explain each step.

Please note that **emails can only be sent through [SSR](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering)-rendered sites**, not [static or client-side](https://nuxt.com/docs/guide/concepts/rendering#client-side-rendering) sites. However, your local development server will work just fine! Simply follow the instructions, read the commented source code, and find out how to send emails with Nuxt.js!

> [!NOTE]
>
> This project uses Nuxt `v3.17.7`. Recently, Nuxt has released `v4.0.0`. However, the implementation process remains the same, and if you like, you can update this project to `v4.0.0` in your `package.json` without any issues.

[TOC]

## 1. What Is This?

A **simple demo** for Nuxt learners with minimal code and a lot of inline comments that teaches you quickly how to:

- **Use [Nodemailer](https://nodemailer.com/about/) to send emails via SMTP (primary purpose)**,
- create a **server API route** in [Nuxt 3](https://nuxt.com/) (`/server/api/send.post.ts`),
- securely **store secrets** in an [`.env`](https://12factor.net/config) file and retrieve them,
- **trigger the email** from a basic Vue form with [`$fetch`](https://nuxt.com/docs/3/apis/nuxt#fetch).

## 2. Prerequisites

Before you begin, you need a few things:

1. [Node.js](https://nodejs.org/en/download) `v22.17.0` (LTS)[^2] or newer (test with the command `node -v`).
2. Node package manager like `npm`, `yarn`, or `bun` (recommended, [download here](https://bun.sh/package-manager)).
3. A **Gmail** account with an **app-specific password** that you can [create here](https://myaccount.google.com/apppasswords).
4. Basic familiarity with the terminal/command line.

## 3. Installation

You can install and use Nuxt 3 Nodemailer Example in two different ways. However, both require a basic understanding of using a command-line interface (CLI) and differ only slightly.

### 3.1 Install Through Git (recommended)

1. **Clone this repository to your local machine:**

   ```bash
   # Downloads the source code
   git clone https://gitlab.com/thaikolja/nuxt-nodemailer-example
   
   # Switches into the automatically-created repository folder
   cd nuxt-nodemailer-example
   ```

2. **Install dependencies**:

   Use one of your Node.js package managers to install the dependencies. `npm` is the default manager, while `bun` is faster. It can be [installed easily in multiple ways](https://bun.com/docs/installation).

   ```bash
   # Assumining you're using bun
   bun i
   
   # If not, use other available managers:
   npm i
   
   # Or Yarn
   yarn
   
   # Or pnpm
   pnpm i
   ```

### 3.2 Install Through `.zip` File

If you don't have Git or have no need for a version control system to track your changes, you can download the latest version of the source code as a `.zip` file by [clicking on this link](https://gitlab.com/thaikolja/nuxt-nodemailer-example/-/archive/main/nuxt-nodemailer-example-main.zip).

1. Download and extract the files into your source folder.
2. Continue following the steps of the Git installation from step 2.

---

## 4. Set Up Environmental Variables

Environmental files contain **sensitive** variables, such as your password, API keys, and, in this project, your email address. It's listed in the `.gitignore` file, so it won't be pushed to your repository. However, be cautious about where you upload it.

1. Copy the file `.env.example` and rename it to `.env`
   1. Via CLI: `cp .env.example .env`
2. Fill out the following variables:
   1. `EMAIL_TO` *(string)*: The email address to which the form sends the email (you)
   2. `EMAIL_USERNAME` *(string)*: The email address of the account the email is being sent from.
   3. `EMAIL_PASSWORD` *(string)*: A so-called app-specific password that only works for this project. You can [create it quickly using this link](https://myaccount.google.com/apppasswords).

> [!TIP]
>
> macOS and Linux operating systems may not display files that start with a period or double period (`.` and `..`). In macOS, you can toggle to see these files in your Finder by pressing `⌘` + `.` at the same time.
>
> Alternatively, use your command line and execute 'open .env' to open the file with your preferred file editor.

## 5. Usage

After you've installed all necessary packages and filled out the `.env` file in the root of your directory, run `bun dev` (or `npm run dev`, etc.) to start your local development server. **You can now view your Nuxt 3 website via** http://localhost:3000.

<img src="https://p.ipic.vip/4wck0y.jpg" alt="sending-email-with-nuxt-nodemailer-form" width="800px;" height="auto" />

Once you see the form, it's already set to work. You can test it by sending yourself an email with made-up content.

> [!IMPORTANT]
>
> In some cases, **Google doesn't allow you to be the sender *and* receiver at the same time**. If you don't have a spare email address, you can use [free throwaway services like TempMail](https://temp-mail.org/).

If an **error** occurs during email sending, a red alert box will appear underneath the textarea field. If everything was **successful**, you should see the following screen:

<img src="https://p.ipic.vip/9jat0q.jpg" width="800px" height="auto" alt="nuxt-nodemailer-email-form-sent-confirmation-message" />

## 6. Study The Project

🎉 You’re all set! This example should provide a solid foundation for sending emails in your Nuxt 3 applications using Nodemailer. Feel free to fork, experiment with, or use this code as a boilerplate to build your next Nuxt.js project with email functionality.

**Now it's time to learn.**

> [!NOTE]
>
> All relevant files include extensive comments that provide clear explanations of what's happening. Make sure to read them to get a better understanding of the workflow.

### 6.1 Project Structure

This is a tree view of all **essential** files and folders. For other files (i.e., `eslint.config.mjs`, etc.), please look them up on your own.

Files and folders marked with `←` are items you can learn from.

```
├─ assets/          			# CSS & static assets (Tailwind CSS)
├─ components/						# ← Header, footer, and form partials
├─ pages/           			# ← The single index.vue (front-end form)
├─ node_modules/					# Ignore. Packages from package.json are installed here
├─ public/								# Public-facing stuff, like Nuxt's favicon
├─ server/
│   └─ api/
│       └─ send.post.ts  	# ← Our email-sending endpoint
├─ (.env)             		# ← You’ll create this (secrets live here)
├─ .env.example						# An example of the variables needed in the .env file
├─ nuxt.config.ts   			# ← Nuxt configuration (already set up for you)
└─ package.json     			# Modules and scripts (never delete)
```

Browse through these files and review the comments within the code to gain a deeper understanding of the workflow.

### 6.2 Essential Files

The project contains numerous comments that are not AI-generated, written to help you understand the process step by step. You can find them in the following crucial files:

| File                           | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| `/server/api/send.post.ts`[^3] | In this file, Nodemailer is being used to send an email.     |
| `/pages/index.vue`[^4]         | The user-facing front-end that combines the header, the main file, and the footer. |
| `/nuxt.config.ts`              | Nuxt's config file defines a lot of things, e.g., which modules are active. Nuxt has [a broad repository of useful modules](https://nuxt.com/modules). |
| `/package.json`                | The file that tells the package manager *what* dependencies it needs (in our case: `nodemailer`). This creates the `node_modules` directory upon installation. |

## 7. Useful Resources

Depending on your skills, these links might help you move forward with Nuxt projects.

- 🔗 **Vue.js Official Guide:** https://vuejs.org/guide/
- 🔗 **Nuxt 3 Docs:** https://nuxt.com/docs
- 🔗 **Nodemailer Tutorial:** https://nodemailer.com/about/
- 🔗 **Tailwind CSS:** https://tailwindcss.com/
- 🔗 **Environment Variables in Node:** https://nodejs.org/api/process.html#processenv
- 🔗 **Deploying Nuxt 3:** https://nuxt.com/docs/deployment/introduction

## 8. License

MIT

## 9. Authors

* Kolja Nolte (kolja.nolte@gmail.com)

## 10. Footnotes

[^1]: Nuxt `v3.17.7` is used; `v4.0.0` was released after this project was built
[^2]: Older versions might work as well, but by using `v22.17.0`, you're on the safe side
[^3]: Despite being programmed with [TypeScript](https://www.w3schools.com/typescript/typescript_intro.php) files `.ts`, TS is used only very sparingly
[^4]: When using `<NuxtPage />` in `/app.vue`, it automatically looks for a file named `index.vue`
# OscarERH's Blog

Hello 👋, this is my personal blog built with [**NextJS**](https://nextjs.org/) and [**Markdoc**](https://markdoc.io/).

## How to start

```bash
git clone git@github.com:OscarERH/oscarerh.github.io.git
```

```bash
yarn
```

```bash
yarn run dev
```

## How to create a post

Create a file in `./posts` folder in kebab-case with `.md` extension, example: `./posts/welcome-to-my-new-blog.md`, add the following structure to the top of the `.md` file:

```markdown
---
title: Welcome to my new blog
date: 2022-09-01
cover: https://i.imgur.com/gR7obHn.jpeg
---

Paragraph goes here
```

Commit your changes, push to `main` and GitHub Actions will deploy your post on `https://your-user.github.io/blog/welcome-to-my-new-blog`

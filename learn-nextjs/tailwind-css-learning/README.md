This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

We're here to cover Tailwind CSS steps i.e., 01-03 of the Panaverse [learn-nextjs Styling directory](https://github.com/panaverse/learn-nextjs/tree/main/step07_styling)

We're using pnpm for this particular app. PNPM is 3 times faster and more efficient in terms of space and memory than npm and other node package managers available.
For detailed comparison of node package managers see [Choosing the Right Package Manager: NPM, Yarn, or PNPM?](https://hackernoon.com/choosing-the-right-package-manager-npm-yarn-or-pnpm)

## Installation/Startup

First we need to install the package manager i.e., pnpm. Run command

```
npm install -g pnpm
```

Confirm installation by

```
pnpm -v
```

Install dependencies using pnpm with

```
pnpm i
```

Now, we're good to run the application.

```
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> **Note:** If you wish to run the application using npm, you'll have to delete the pnpm-lock.yaml file first. And then run the commands necessary for npm.

## Project workflow

The route `app/css-basics/page.tsx` covers the CSS styling basics including

- Styling types i.e., inline, internal, external
- Basic styling selectors in CSS e.g, tag selector, class selector, id selector.
- The route also shows how to use a separate css file for any particular route. View usage of `app/css-basics/style.css`.

The route `app/page.tsx` covers the Tailwind CSS styling basics including

- Tailwind styling types i.e., inline, component based, external
- Basic styling selectors in Tailwind CSS also work same as CSS selectors e.g, tag selector, class selector, id selector.

The `src/components/` folder includes the components used in the project
The `src/views` folder includes a sidebar component to understand why tailwind CSS is not working in the folder.

## Tailwind CSS basic Topics

Covering [step01 of Panaverse styling directory](https://github.com/panaverse/learn-nextjs/tree/main/step07_styling/01.tailwindCSS)

- Tailwind CSS Configuration
- Tailwind CSS Pre-flight
- Tailwind CSS Directives
- Tailwind CSS Usage

The details for these topics can be found on [Taiwlind CSS website](https://tailwindcss.com/docs) and Chapter 2 of [Modern CSS with Tailwind, Second Edition](https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/) Book.

# Important Links

[Modern CSS with Tailwind, Second Edition](https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/)\
[Flex Box & Grid Official Documentation](https://tailwindcss.com/docs/flex-basis)\
[Flex Box and Grid Book](https://shrutibalasa.gumroad.com/l/css-flex-and-grid)\
Other links can be found in the [panaverse styling repository](https://github.com/panaverse/learn-nextjs/tree/main/step07_styling)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

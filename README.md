# Craft CMS Nuxt Blog Starter

This blog starter project is based on the official [Craft CMS Blog Starter](https://github.com/craftcms/starter-blog). Although suitable for all audiences, it's mainly intended for those who are new to Craft CMS and/or Nuxt.

## Craft CMS

### Installation

Visit the official Craft CMS Blog Starter repo and follow the [installation instructions](https://github.com/craftcms/starter-blog#installation).

I'm using Craft Nitro as my local development environment. To learn more, including how to set it up, read the [Craft Nitro documentation](https://craftcms.com/docs/nitro/2.x/#what-is-nitro).

After completing the installation, you can populate Craft with some sample content by running the `m210104_175929_sample_content.php` content [migration](https://craftcms.com/docs/3.x/extend/migrations.html) located in the `migrations` directory in your Craft project root.

## Nuxt Headless Front End

The Nuxt headless front end uses the following NPM packages.

- [Nuxt 3 beta](https://v3.nuxtjs.org/)
- [Nuxt Tailwind CSS](https://tailwindcss.nuxtjs.org)
- [Tailwind CSS Typography plugin](https://tailwindcss.com/docs/typography-plugin)
- [Prettier](https://prettier.io)
- [Prettier plugin for Tailwinds CSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

### Installation

1. From the Craft project root, run `cd headless-nuxt` to switch to the `headless-nuxt` directory.
2. Run `npm install` to install the NPM packages.
3. Run `npm run dev` to start the local development server.

:warning: If you are using Craft Nitro for local development, the default port 3000 may be already be taken by Nitro. If so, you can run the local development server on a different port. For example, port 5001 via `PORT=5001 npm run dev`.

## Contributing

If you would like to contribute to the TODOs below, or have any suggestions for improvement, please open an issue or submit a pull request. Please keep in mind that the project is meant to be beginner friendly.

## TODO

This project is a work in progress.

> Perfect is the enemy of good.

- [ ] Add support for remaining Matrix fields to templates.
- [ ] Fix issue with `Bearer ${config.CRAFTGQL_TOKEN}` not working as expected.
- [ ] Add support for GraphQL mutations to `Blog` Section.
- [ ] Add front-end forms to enable CRUD of Blog entries from the front end.
- [ ] Other stuff I can't remember at the moment. :laughing:

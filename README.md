![Screenshot](https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/9945/1ehOwnFksDydRVlFeiEQ1sjLWmVmMAbvmZl81qvU.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaDGV1LWNlbnRyYWwtMSJIMEYCIQCIZtfrSLlscxJQyZJjGBpJ67Jl41U8rjKUQH8jB6RHpQIhAJYA4gtmO4SxP7Snx6NgMa4eWjRT3OPJjOcIN4lK00tWKqECCHkQABoMOTE5NTE0NDkxNjc0IgyIbq9K%2B%2FhI8EvFl30q%2FgGx%2BfW%2BnsbZIhDvpyhlB28sySKQnzHmOeBXD2c06%2Fd7lc1Jh89QIxm64tpeI4H9R9JVSzntU%2FvkvAjgg%2FErGsLUXI8rql3mSfsCzLKBNfUqOkbKq6hZE%2Br%2BV9S4An5mRc7mx23b6G2%2BqYWm8IKzGfEHbZiOOTEW7v9paAu0C8AWoHu39WNlHI3XXxsSsSMwWFPpqNswWk6d3KgsaG9hVjwF3dGnG1CbhQ0Tu7HQVigA09jpVFCeygY7memKKnq37RqmnwUOItLec4OZkEPwi0ab2Zxnybpfkp50HEwiUereskKEGNLZ2xAbCpI4ty1e6s7L7NrZdlti4eS6AqgKGTCQqtmQBjqZAZbtuLnRZ6VnqBIaaIz4XCPh7GtB0qqSA6IZZpn%2Fqi%2FHlOtClaKFCny9XxU%2FhMsMSGdphMbNKcx%2BuNPJIYCZBH%2FXpmyJeTTHidBDajEKF9GS3nbXPOnIbarONg8OfkuOKrMh4kKHqNmqQAaymfU4JzLHIO4dNm4Qk%2BYhg%2B7z1Be5Xmc8uBM5H4Usk3BwgTcXtSkufKJY%2FnoSCg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5MF2VVMND4AWH5UL%2F20220223%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220223T154229Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=1e1f5b7205dcf9d5a079582f7a08007a5e7eb021cdde50f063a9491332b67de4)

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

If you would like to contribute to the TODOs below, or have any suggestions for improvement, please open an issue or submit a pull request. Please keep in mind that the project is meant to be beginner-friendly.

## TODO

This project is a work in progress.

> Perfect is the enemy of good.

### Nuxt

- [ ] Add support for remaining Matrix fields to templates/components.
- [ ] Fix issue with `Bearer ${config.CRAFTGQL_TOKEN}` not working as expected.
- [ ] Add support for GraphQL mutations to **Blog** Section.
- [ ] Add front-end forms to enable CRUD of **Blog** Section entries from the front end.
- [ ] Set up a public demo site.
- [ ] Other stuff I can't remember at the moment. :laughing:

### Craft

- [ ] Move from Webpack to Vite when Nitro 3 released.

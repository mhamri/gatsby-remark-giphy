# gatsby-remark-giphy
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Gatsby Remark plugin to embed gifs with `![](giphy:yay_a_gif)`

## The problem

Looking for gifs disrupts your writing flow. Use `![](giphy:search_term)` and let gatsby-remark-giphy do the hard work for you.

For example, this line anywhere in your markdown:

`![](giphy:yay_a_gif`)

Creates a gif like this:

![](https://media0.giphy.com/media/1APaqOO5JHnWKLc7Bi/giphy.gif)

First search result from Giphy's API is used. This might not return the same image every time you run Gatsby build.

## Installation

```
npm install gatsby-remark-giphy
```

or

```
yarn add gatsby-remark-giphy
```

`gatsby-remark-giphy` is meant to be used as a plugin for [`gatsby-transformer-remark`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark) or [`gatsby-plugin-mdx`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx).

## Usage

```javascript
// In your gatsby-config.js

module.exports = {
  // Find the 'plugins' array
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-giphy`,
            options: {
              giphyApiKey: `<your-api-key>`
            },
          },

          // Other plugins here...
        ],
      },
    },
  ],
};
```

```javascript
// In your gatsby-config.js

module.exports = {
  // Find the 'plugins' array
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-giphy`,
            options: {
              giphyApiKey: `<your-api-key>`
            },
          },

          // Other plugins here...
        ],
      },
    },
  ],
};
```

## Options

You can configure how `gatsby-remark-giphy` works with these helpful options:

- `giphyApiKey`: required - your [Giphy API Key](https://developers.giphy.com/). Create a Giphy developers account, request an API key, and you're ready to go. You should consider using this via an ENV variable of some sort instead of directly in your gatsby-config
- `useVideo`: optional - false by default. Whether to embed gifs as an autoplaying HTML5 video
- 

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://swizec.com"><img src="https://avatars0.githubusercontent.com/u/56883?v=4" width="100px;" alt=""/><br /><sub><b>Swizec Teller</b></sub></a><br /><a href="https://github.com/Swizec/gatsby-remark-giphy/commits?author=swizec" title="Code">💻</a> <a href="https://github.com/Swizec/gatsby-remark-giphy/commits?author=swizec" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## LICENSE

MIT
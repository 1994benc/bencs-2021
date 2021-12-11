// next.config.js
const withNextra = require('nextra')({
    theme: 'nextra-theme-blog',
    themeConfig: './theme.config.jsx',
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
module.exports = withNextra()
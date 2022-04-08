const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([],{
    reactStrictMode: true,
    images: {
        domains: ["images.unsplash.com"],
    },
});

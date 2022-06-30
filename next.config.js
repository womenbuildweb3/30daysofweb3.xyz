const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  images: {
    domains: ["cdn.hashnode.com", "images.unsplash.com"],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  reactStrictMode: true,
});

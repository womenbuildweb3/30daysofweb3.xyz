module.exports = {
  locales: ["en", "es"],
  defaultLocale: "en",
  pages: {
    "*": ["navigation"],
  },
  interpolation: {
    prefix: "${",
    suffix: "}",
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./locales/${locale}/${namespace}`).then((m) => m.default),
};

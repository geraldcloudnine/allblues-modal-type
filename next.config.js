/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['sv', 'en'],
    defaultLocale: 'en'
  },
  reactStrictMode: true,
  experimental: {
    styledComponents: true // TODO: Fix displayNames
  },
  images: {
    domains: [
      'fakestoreapi.com',
      'a.storyblok.com',
      'demo2.centracdn.net',
      'davida9056.centraqa.com'
    ]
  }
};

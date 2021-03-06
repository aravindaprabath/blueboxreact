module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    'storybook-dark-mode',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    'storybook-addon-designs'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
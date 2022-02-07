import '../src/styles/index.scss';
export const parameters = {

  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#E5E5E5',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },

  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
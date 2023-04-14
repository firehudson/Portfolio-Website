import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://aditya-vaishnav.netlify.app/icon.svg',
    brandTitle: 'Aditya Vaishnav Components',
    brandUrl: 'https://aditya-vaishnav.netlify.app',
  },
});

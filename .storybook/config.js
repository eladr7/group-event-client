import { configure } from '@storybook/react';

import '../src/style.css';
// import '../src/components/scss/style.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.story.jsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);




// import { configure } from '@storybook/react';

// // automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);

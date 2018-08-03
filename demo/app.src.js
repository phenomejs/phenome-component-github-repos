import React from 'react';
import ReactDOM from 'react-dom/cjs/react-dom.production.min';
import Vue from 'vue';

import GitHubReposReact from '../dist/react/github-repos';
import GitHubReposVue from '../dist/vue/github-repos';

ReactDOM.render(
  React.createElement(GitHubReposReact, {
    username: 'framework7io',
    amount: 5,
  }),
  document.getElementById('react')
);

new Vue({
  el: '#vue > div',
  render: (h) => h(GitHubReposVue, {
    props: {
      username: 'framework7io',
      amount: 5,
    }
  })
});
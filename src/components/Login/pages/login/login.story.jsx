import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Login from './';
import Store from './store';

const store = new Store();
store.onSubmit = e =>
  store.form.onSubmit(e, {
    onSuccess(form) {
      action('Submit')(form.values());
    },

    onError(form) {
      action('Error')(form.errors());
    },
  });

storiesOf('Pages', module).add('Login', () => <Login store={store} />);

/**
 * Created by Scott on 6/26/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h1>Test</h1>
  );
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.render-target'))
});
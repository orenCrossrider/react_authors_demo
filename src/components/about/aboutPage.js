"use strict";

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (!confirm("Want to navigate after all?")) {
        transition.abort();
      } else {
        callback();
      }
    },

    willTransitionFrom: function(transition, component) {
      if (!confirm("Want to leave after all?")) {
        transition.abort();
      }
    }
  },

  render: function() {
    return (
      <div>About page</div>
    );
  }
});

module.exports = About;
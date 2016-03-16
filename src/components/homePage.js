"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({

  render: function() {
    return (
      <div className="jumbotron">
        <h1>Hi there</h1>
        <p>Jus testing</p>
        <Link to="about" className="btn btn-primary btn-lg">About</Link>
      </div>
    );
  }
});

module.exports = Home;
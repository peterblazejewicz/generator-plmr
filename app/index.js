'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    this.log(yosay(
      'Welcome to the slick ' + chalk.red('Plmr') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'createStarterKitProject',
      message: 'Would you like to create starter kit project?',
      default: true
    }];

    this.prompt(prompts, function(props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    starterKitProject: function() {}
  },

  install: function() {
    this.installDependencies();
  }
});

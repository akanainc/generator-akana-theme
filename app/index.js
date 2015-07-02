'use strict';
var path = require('path');
var generators = require('yeoman-generator');
var yosay = require('yosay');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('atmotool', {
      type: Boolean,
      required: false,
      defaults: false,
      desc: 'When specified, will create a local.conf for use with atmotool'
    });

  },

  initializing: function () {
    this.generatorsPrefix = this.options.flat ? '' : 'generators/';
  },

  prompting: {
    askFor: function () {
      var done = this.async();
      this.log(yosay('Hello! Let\'s create an Akana Community Manager Theme customization.'));

      var prompts = [
      /*
        {
          type: 'list',
          name: 'defaultVersion',
          message: 'Customization option',
          choices: ['hero', 'showcase'],
          default: 'hero'
        },
        */
        {
          type: 'input',
          name: 'companyName',
          message: 'Please provide a company name',
          default: 'Custom Starter'
        },
        {
          type: 'input',
          name: 'author',
          message: 'Author',
          default: 'you'
        },
        {
          type: 'input',
          name: 'cmSiteTitle',
          message: 'Title for CM site',
          default: 'API Catalog'
        },
        {
          type: 'input',
          name: 'mainColor',
          message: 'Base color for theme',
          default: '#2683b4'
        },
        {
          type: 'input',
          name: 'landingHeadline',
          message: 'Landing page Headline',
          default: 'Extend your Reach'
        },
        {
          type: 'input',
          name: 'landingTagline',
          message: 'Landing page Tagline',
          default: 'APIs you can trust'
        },
        {
          type: 'list',
          name: 'headerType',
          choices: ['transparent', 'dark'],
          message: "Header type",
          default: 'transparent'
        },
        {
          type: 'input',
          name: 'headerGradientTop',
          message: 'dark gradient top',
          default: '#5a5b5d',
          when: function (answers) {
            return answers.headerType === 'dark';
          }
        },
        {
          type: 'input',
          name: 'headerGradientMiddle',
          message: 'dark gradient middle',
          default: '#47474a',
          when: function (answers) {
            return answers.headerType === 'dark';
          }
        },
        {
          type: 'input',
          name: 'headerGradientBottom',
          message: 'dark gradient bottom',
          default: '#3e3f41',
          when: function (answers) {
            return answers.headerType === 'dark';
          }
        }
      ];

      // check for atmotool option / flag
      // Note: could use the inquire.js question object's 'when'
      if (this.options.atmotool) {
        prompts.push(
          {
            type: 'input',
            name: 'cmUrl',
            message: 'base url for CM',
            default: 'http://ent.akana-dev.net:9900'
          },
          {
            type: 'input',
            name: 'cmEmail',
            message: 'admin email for CM',
            default: 'administrator@cm.akana.demo'
          },
          {
            type: 'password',
            name: 'cmPassword',
            message: 'admin password for CM',
            default: 'password'
          }
        );
      }

      this.prompt(prompts, function (props) {
        this.props = props;
        this.config.set(props);
        this.companyName = props.companyName;
        done();
      }.bind(this));
    }

  },

  writing: {
    projectfiles: function () {
      this.companyDir = 'CM_' + this.companyName.replace(/\s/g, '') + '/';

      this.template('README.md', this.companyDir + 'README.md');
      this.template('custom.less', this.companyDir +  'custom.less');
      this.directory('resources',  this.companyDir + 'resources');
      this.directory('content', this.companyDir + 'content');
      if (this.options.atmotool) {
        this.template('local.conf', this.companyDir + 'local.conf');
        this.template('.gitignore', this.companyDir + '.gitignore');
      }
    },

    config: function () {
      this.directory('config');
    }
  }

});
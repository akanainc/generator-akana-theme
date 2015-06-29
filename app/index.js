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

    this.option('flat', {
	  type: Boolean,
	  required: false,
	  defaults: false,
	  desc: 'When specified, custom starter will be created at the top level of the project.'
	});
  },

  initializing: function () {
    this.generatorsPrefix = this.options.flat ? '' : 'generators/';
  },

  prompting: {
  	askFor: function () {
	  	var done = this.async();
	  	this.log(yosay('Hello! Let\'s create an Akana Community Manager Theme customization.'));

	  	var prompts = [{
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
        name: 'cmUrl',
        message: 'base url for CM',
        default: 'http://ent.akana-dev.net:9900'
      },
      {
        type: 'input',
        name: 'cmEmail',
        message: 'admin email for CM',
        default: 'administrator@cm.akana.demo'
      }
      ];

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
      }
  	 },

     config: function() {
      this.directory('config');
     }
  }

});
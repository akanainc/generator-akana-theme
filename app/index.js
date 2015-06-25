'use strict';
var path = require('path');
var generators = require('yeoman-generator');
var yosay = require('yosay');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

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
	  	this.log(yosay('Hello! Let\'s create an Akana Community Manager Default Theme customization.'));

	  	var prompts = [{
	  		name: 'companyName',
	  		message: 'Please provide a company name',
	  		default: 'CustomStarter'
	  	}];

	  	this.prompt(prompts, function (props) {
        this.companyName = props.companyName.replace(/\s/g,'');
	  		done();
	  	}.bind(this));
	  }

  },

  writing: {
    projectfiles: function () {
    	this.companyDir = 'CM_' + this.companyName + '/';

      this.bulkDirectory('content', this.companyDir + 'content');
      this.template('custom.less', this.companyDir +  'custom.less');
      this.bulkDirectory('resources',  this.companyDir + 'resources');
      this.template('local.conf', this.companyDir + 'local.conf');
  	 }
  }

});
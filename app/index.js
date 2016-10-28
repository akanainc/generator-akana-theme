'use strict';
var path = require('path');
var generators = require('yeoman-generator');
var yosay = require('yosay');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('theme', {
      type: String,
      required: false,
      defaults: "hermosa",
      desc: "When specified, switches to an alternate theme than the default. Default: hermosa"
    });

    this.option('atmotool', {
      type: Boolean,
      required: false,
      defaults: false,
      desc: 'When specified, will create a local.conf and uploadall script for use with atmotool cli'
    });

  },

  initializing: function () {
    this.generatorsPrefix = this.options.flat ? '' : 'generators/';
    this.themeDir = "theme-" + this.options.theme;
  },

  prompting: {

    // basic questions
    askFor: function () {
      var done = this.async();
      this.log(yosay('Hello! Let\'s create an Akana API Portal Theme customization.'));

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
          choices: ['default-transparent', 'default-dark', 'default-wide'],
          message: "Header type",
          default: 'default-transparent'
        },
        { type: 'input',
          name: 'containerHeaderColor',
          message: 'solid header color',
          default: '#2683b4',
          when: function(answers) {
            return answers.headerType === 'default-wide';
          }
        },
        {
          type: 'input',
          name: 'resourceMenuHeaderAppsHover',
          message: 'Hover on Apps Menu Title',
          default: 'My Apps',
          when: function(answers) {
            return answers.headerType === 'default-wide';
          }
        },
        {
          type: 'input',
          name: 'resourceMenuHeaderGroupsHover',
          message: 'Hover on Groups Menu Title',
          default: 'My Groups',
          when: function(answers) {
            return answers.headerType === 'default-wide';
          }
        },
        {
          type: 'input',
          name: 'resourceMenuHeaderApisHover',
          message: 'Hover on APIs Menu Title',
          default: 'My APIs',
          when: function(answers) {
            return answers.headerType === 'default-wide';
          }
        },
        {
          type: 'input',
          name: 'resourceMenuHeaderAdminHover',
          message: 'Hover on Admin Menu Title',
          default: 'Admin',
          when: function(answers) {
            return answers.headerType === 'default-wide';
          }
        },
        {
          type: 'input',
          name: 'headerGradientTop',
          message: 'dark gradient top',
          default: '#5a5b5d',
          when: function (answers) {
            return answers.headerType === 'default-dark';
          }
        },
        {
          type: 'input',
          name: 'headerGradientMiddle',
          message: 'dark gradient middle',
          default: '#47474a',
          when: function (answers) {
            return answers.headerType === 'default-dark';
          }
        },
        {
          type: 'input',
          name: 'headerGradientBottom',
          message: 'dark gradient bottom',
          default: '#3e3f41',
          when: function (answers) {
            return answers.headerType === 'default-dark';
          }
        },
        {
          type: 'input',
          name: 'logoImage',
          message: 'logo image name',
          default: 'atmologo.png'
        },
        {
          type: 'input',
          name: 'logoW',
          message: 'width of the logo (px), max 295px',
          default: 202,
          validate: function (width) {
            return width <= 295;
          }
        },
        {
          type: 'input',
          name: 'landingHeroImage',
          message: 'hero image name',
          default: 'starter_industries.jpg'
        }
      ];

      this.prompt(prompts, function (props) {
        this.props = props;
        this.config.set(props);
        this.companyName = props.companyName;
        this.props.theme = this.options.theme;
        done();
      }.bind(this));

    },

    /* atmotool */
    askAboutAtmotool: function () {

      // if there's --atmotool, continue
      if (!this.options.atmotool) {
        return;
      }

      var done = this.async();
      var prompts = [
        {
          type: 'input',
          name: 'lcCompanyName',
          message: 'a company name',
          default: this.companyName.replace(/\s/g, '').toLowerCase()
        },
        {
          type: 'input',
          name: 'cmUrl',
          message: 'base url for API Portal',
          default: 'http://ent.akana-dev.net:9900'
        },
        {
          type: 'input',
          name: 'cmEmail',
          message: 'admin email for API Portal',
          default: 'administrator@cm.akana.demo'
        },
        {
          type: 'password',
          name: 'cmPassword',
          message: 'admin password for API Portal',
          default: 'password'
        }
      ];

      this.log('Atmotool questions...');
      this.prompt(prompts, function (props) {
        var source = this.props;
        var key;
        // combine new props to existing
        for (key in props) {
          if (props.hasOwnProperty(key)) {
            source[key] = props[key];
          }
        }
        this.config.set(source);
        this.lcCompanyName = props.lcCompanyName;
        done();
      }.bind(this));

    }, /* atmotool end */

  },

  writing: {
    projectfiles: function () {
      /*
      may want to check if dir exists and bail, otherwise
      !fs.existsSync(this.themeDir)
      */

      this.companyDir = 'CM_' + this.companyName.replace(/\s/g, '') + '/';

      this.template('README.md', this.companyDir + 'README.md');
      this.template(this.themeDir + '/' + 'custom.less', this.companyDir +  'custom.less');
      this.directory(this.themeDir + '/' + 'resources',  this.companyDir + 'resources');
      this.directory(this.themeDir + '/' + 'content', this.companyDir + 'content');

      // atmotool
      if (this.options.atmotool) {
        var addInDir = "addin-atmotool";
        this.template(addInDir + '/' + 'template_local.conf', this.companyDir + 'local.conf');
        this.template(addInDir + '/' + 'template_gitignore', this.companyDir + '.gitignore');
        // https://github.com/yeoman/yeoman/issues/1235
        // https://github.com/yeoman/generator/pull/489
        // modern way of copying, as opposed to the above convenience
        // - use either: fs.copy(templatePath, destinationPath) 
        // - or: fs.copyTpl(templatePath, destinationPath, modelObject)
        this.fs.copyTpl(
          this.templatePath(addInDir + '/' + 'template_uploadall'),
          this.destinationPath(this.companyDir + 'uploadall'),
          this,
          {
            interpolate: /<%=([\s\S]+?)%>/g
          }
        );
      }

    },

    config: function () {
      this.directory('config');
    }
  },

  end: function () {
    if (this.props.logoImage !== "atmologo.png") {
      this.log('Please remember to place ' + this.props.logoImage + ' in the ' + this.companyDir + 'resources/theme/' + this.options.theme + '/style/images directory.');
    }
    if (this.props.landingHeroImage !== "starter_industries.jpg") {
      this.log('Please remember to place ' + this.props.landingHeroImage + ' in the ' + this.companyDir + 'content/home/landing/images directory.');
    }
    this.log(yosay('Happy Community Managing! - Akana http://akana.com @akanainc'));
  }

});

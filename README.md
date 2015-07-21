# Generator for Akana Community Manager Default Theme

> [Yeoman](http://yeoman.io) generator

[![NPM](https://nodei.co/npm/generator-akana-theme.png)](https://www.npmjs.com/package/generator-akana-theme)

This generator provides a set of starter customization files for customizing the Default Theme of Akana's Community Manager.

Once the starter project has been created, you will need Platform Admin access to a Community Manager instance to upload them to the appropriate place within the CM CMS.

For more information on Akana's API Manager Developer Portal, Community Manager, see the following:

* [Community Manager - API Developer Portal](https://www.akana.com/products/api-portal)
* [Community Manager docs](http://docs.akana.com/cm/index.html)
* [Customizing the User Interface](http://docs.akana.com/cm/share/cm_customizing_ui.htm) 

### Install

Use yeoman to search for and install the generator: `yo` and pick "Install a generator", then search for "akana," and choose "akana-theme".

or...

```
npm install -g generator-akana-theme
```
### Run

Use yeoman and pick `akana-theme`

or ...

```
yo akana-theme
```

You'll be prompted for a company name (ex. `Custom Starter`) and a directory named `CM_` plus the company name (ex.`CM_CustomStarter`) will be created with the following contents:


* `contents/`: a directory that contains a landing page customization, and can be uploaded to `contents/home/landing`
* `resources/`: a directory that contains resources (favicon, site title, images), and can be uploaded to `resources/theme/default`
* `custom.less`: a `custom.less` file ready for editing

# Development

See [Authoring Yeoman Generators](http://yeoman.io/authoring/index.html) as well as the [generator-generator](https://github.com/yeoman/generator-generator) for more info.

For local development usage, to allow `yo` to look locally rather than npm:

* clone this repo
* cd `generator-akana-theme`
* `npm link`

Now `yo` will look for the cloned repo, local copy, of the generator.

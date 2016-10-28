# Generator for Akana API Portal Theme Customizations

> [Yeoman](http://yeoman.io) generator

[![NPM](https://nodei.co/npm/generator-akana-theme.png)](https://www.npmjs.com/package/generator-akana-theme)

This generator provides a set of starter customization files for customizing a theme for Akana's API Platform Portal, also known as Community Manager.

Once the starter project has been created, you will need Platform Admin access to a Portal  instance to upload them to the appropriate place within the API Portal CMS.

For more information on Akana's API Manager Developer Portal, Community Manager, see the following:

* [Akana API Platform Developer Portal](https://www.akana.com/products/api-portal)
* [API Portal / Community Manager docs](http://docs.akana.com/cm/index.html)
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
* `resources/`: a directory that contains resources (favicon, site title, images), and can be uploaded to `resources/theme/[theme_name]` - theme_name defaults to `hermosa` but can be changed with the `--theme` flag (ex. `yo akana-theme --theme default`)
* `custom.less`: a `custom.less` file ready for editing

## Theme CSS Variations

* `transparent` - the default API Portal theme, with a transparent header and fixed width wide layout (900px) 
* `dark` - the top header is a solid gradient, you choose the top middle and bottom colors for the gradient
* `solid-wide` - solid top header (single color), and full-width layout; a variation on `transparent` - also note `atmologo_transparent.png` Akana logo is included (179 px width)

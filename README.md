# Generator for Akana Community Manager Default Theme


Description:
    This generator provides a set of starter customization files for customizing the Default Theme of Akana's Community Manager.

Example:
    `yo akana-community-manager-default-theme`

You'll be prompted for a company name (ex. `Custom Starter`) and a directory named `CM_` plus the company name (ex.`CM_CustomStarter`) will be created with the following contents:


* `contents/`: a directory that contains a landing page customization, and can be uploaded to `contents/home/landing`
* `resources/`: a directory that contains resources (favicon, site title, images), and can be uploaded to `resources/theme/default`
* `custom.less`: a `custom.less` file ready for editing
* `local.conf`: for use with atmotool

# Development

See [Authoring Yeoman Generators](http://yeoman.io/authoring/index.html) as well as the [generator-generator](https://github.com/yeoman/generator-generator)


# Usage

```
npm install -g generator-akana-community-manager-default-theme
yo akana-community-manager-default-theme
```

# Generator for Akana Community Manager Default Theme


Description:
    This generator provides a set of starter customization files for customizing the Default Theme of Akana's Community Manager.

Example:
    `yo akana-theme`

You'll be prompted for a company name (ex. `Custom Starter`) and a directory named `CM_` plus the company name (ex.`CM_CustomStarter`) will be created with the following contents:


* `contents/`: a directory that contains a landing page customization, and can be uploaded to `contents/home/landing`
* `resources/`: a directory that contains resources (favicon, site title, images), and can be uploaded to `resources/theme/default`
* `custom.less`: a `custom.less` file ready for editing
* `local.conf`: for use with atmotool

# Development

See [Authoring Yeoman Generators](http://yeoman.io/authoring/index.html) as well as the [generator-generator](https://github.com/yeoman/generator-generator) for more info.


# Usage

```
npm install -g generator-akana-theme
yo akana-theme
```

# Changelog

## 0.1.1 20150626
* added `README.md` with template info
* added yo questions for custom.less's `main-color`, local.conf's e-mail and cm url
* modifications for templating company name in resources/theme/default/i18n and in content/home/landing
* renamed from `generator-akana-community-manager-default-theme` to `generator-akana-theme`

## 0.1.0 20150625
* Creation

# Development

Some notes on development and extending this generator.


See [Authoring Yeoman Generators](http://yeoman.io/authoring/index.html) as well as the [generator-generator](https://github.com/yeoman/generator-generator) for more info.

For local development usage, to allow `yo` to look locally rather than npm:

* clone this repo
* cd `generator-akana-theme`
* `npm link`

Now `yo` will look for the cloned repo, local copy, of the generator.

If you don't know where npm keeps its files, try `npm config get prefix` + `/lib/node_modules`.

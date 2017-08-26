# vue-template-for-hbuilder

> 使用Vue单文件，开发Html5+应用

## 说明：

> 该模板生成自 vue-cli，对其dev模式进行了修改，用来使用hbuilder的开发
>
> 项目背景，自己之前开发了一个 app，使用的mui，后来引入了Vue，由于Hbuilder，还没编译es6的功能，及hbuilder有自己的web服务器，如果我们自己启动web服务的话，又不能将编译结果实时的推送到真机调试模式下，所以产生了修改vue项目模板的需求。

## 使用方法：
``` bash
$ npm install -g vue-cli
$ vue init aOrz/vue-template-for-hbuilder my-project
$ cd my-project
$ npm install
$ npm run dev
```
使用Hbuilder打开`my-project/dist`中的目录，打开 `manifest.json` 点击云端获取，获取appid，并同步到 `src/manifest.json` 中，然后真机运行。
npm run dev 后代码会自动更新到 `dist` 目录，请不要用 `Hbuilder` 打开编译后的文件，以免影响真机测试
## Build Setup

``` bash
# install dependencies
npm install

# 自动编译结果到指定文件夹
npm run dev

# serve with hot reload at localhost:8080
npm run webdev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# vue-webpack-boilerplate

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

> This template is Vue 2.0 compatible. For Vue 1.x use this command: `vue init webpack#1.0 my-project`

## Documentation

- [For this template](http://vuejs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init aOrz/vue-template-for-hbuilder my-project
$ cd my-project
$ npm install
$ npm run dev
```

If port 8080 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015+ in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```

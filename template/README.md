# {{ name }}

> {{ description }}
## 模板文档
[使用文档](https://github.com/aOrz/vue-template-for-hbuilder/edit/master/README.md)
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
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

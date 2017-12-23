<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}
    <button type="button" class="mui-btn">默认</button>
    <button type="button" class="mui-btn mui-btn-primary">蓝色</button>
    <button type="button" class="mui-btn mui-btn-success">绿色</button>
    <button type="button" class="mui-btn mui-btn-warning">黄色</button>
    <button type="button" class="mui-btn mui-btn-danger">红色</button>
    <button type="button" class="mui-btn mui-btn-royal">紫色</button>
  </div>
</template>

<script>
{{#unless router}}
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
import plus from 'plus'{{#if_eq lintConfig "airbnb"}};{{/if_eq}} // use plus
import mui from 'mui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}} // use mui
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<!--
  -- --------------------------------------------------------
  -- @file App.vue
  -- @author wenkanglin <wenkang_lin@kingdee.com>
  -- @date 2018-03-07 17:26:40
  -- @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
  -- @last_modified_date 2018-03-22 09:53:40
  -- @copyright (c) 2018 @yfe/aldnoah-spa
  -- --------------------------------------------------------
 -->

<template>
  <main id="app">
    <transition name="fade" mode="out-in">
      <keep-alive :include="/alive$/i">
        <router-view/>
      </keep-alive>
    </transition>
  </main>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style src="styles/reset.css"></style>
<style src="styles/common.css"></style>
<style src="styles/animation.css"></style>

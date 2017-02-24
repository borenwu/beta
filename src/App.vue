<template>
  <div>
    <app-header></app-header>
    <div class="row">
      <side-nav></side-nav>
      <middle-content></middle-content>
    </div>
  </div>
</template>

<script>
  import AppHeader from 'components/AppHeader.vue'
  import SideNav from 'components/SideNav.vue'
  import MiddleContent from 'components/MiddleContent.vue'

  export default {
    name: 'app',
    components: {
      AppHeader,
      SideNav,
      MiddleContent
    },
  }
</script>

<style>
  html{
    font-family: "Microsoft JhengHei";
  }
</style>

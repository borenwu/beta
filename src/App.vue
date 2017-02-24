<template>
  <div>
    <app-header></app-header>
    <side-nav></side-nav>
  </div>
</template>

<script>
  import AppHeader from 'components/AppHeader.vue'
  import SideNav from 'components/SideNav.vue'

  export default {
    name: 'app',
    components: {
      AppHeader,
      SideNav
    },
  }
</script>

<style>

</style>

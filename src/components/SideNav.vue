<template>
  <aside class="side-nav white fixed z-depth-4">
    <div class="side-nav-wrapper">
      <ul class="collection side-menu">
        <li><a href="#">home</a></li>
        <li><a href="#">work</a></li>
        <li><a href="#">order</a></li>
      </ul>
    </div>
  </aside>
</template>

<style>
  @media only screen and (max-width: 992px) {
    .side-nav.fixed {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  .side-nav.fixed {
    padding: 0!important;
    height: calc(100% - 60px)!important;
    margin-top: 60px;
    z-index: 0;
    width: 220px;
  }
  .collection.side-menu{
    border:0px;
  }
</style>

<script>
  export default{
    data(){
      return {
        msg: 'hello side nav'
      }
    },
    components: {}
  }
</script>

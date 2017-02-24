<template>
  <header>
    <div class="navbar-fixed">
      <nav class="navi">
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down" id="appBarMenu">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul class="side-nav" id="mobile-demo">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">Javascript</a></li>
      <li><a href="mobile.html">Mobile</a></li>
    </ul>
  </header>


</template>

<style>
  .brand-logo {
    margin-left: 20px;
  }

  .navi {
    height: 60px;
    background-color: rgb(0, 172, 193);
  }
  #appBarMenu{
    margin-right: 20px;
  }
</style>

<script>
  export default{
    data(){
      return {
        msg: 'hello app header'
      }
    },
    components: {},
    mounted(){
      $(".button-collapse").sideNav();
    }

  }
</script>

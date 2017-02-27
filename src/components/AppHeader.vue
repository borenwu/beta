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
    <ul class="side-nav collapsible" data-collapsible="accordion" id="mobile-demo" >
      <li class="no-padding">
        <router-link class="collapsible-header waves-effect waves-grey" to="/home">
          <i class="small material-icons">dashboard</i> 主页
        </router-link>
      </li>

      <li class="no-padding">
        <router-link class="collapsible-header waves-effect waves-grey" to="/order">
          <i class="small material-icons">apps</i>
          订单
        </router-link>
      </li>

      <li class="no-padding">
        <a class="collapsible-header waves-effect waves-grey">
          <i class="small material-icons">code</i>
          工作
          <i class="nav-drop-icon material-icons">keyboard_arrow_right</i>
        </a>
        <div class="collapsible-body">
          <ul>
            <router-link class="waves-effect waves-grey" to="/task">
              任务
            </router-link>
          </ul>
        </div>
      </li>

      <li class="no-padding">
        <a class="collapsible-header waves-effect waves-grey">
          <i class="tiny material-icons">store</i>
          仓库
          <i class="nav-drop-icon material-icons">keyboard_arrow_right</i>
        </a>
        <div class="collapsible-body">
          <ul>
            <li><a href="miscellaneous-sweetalert.html">Sweet Alert</a></li>
            <li><a href="miscellaneous-code-editor.html">Code Editor</a></li>
            <li><a href="miscellaneous-nestable.html">Nestable List</a></li>
            <li><a href="miscellaneous-masonry.html">Masonry</a></li>
            <li><a href="miscellaneous-idle-timer.html">Idle Timer</a></li>
          </ul>
        </div>
      </li>

      <li class="no-padding">
        <a class="collapsible-header waves-effect waves-grey">
          <i class="material-icons">desktop_windows</i>
          财务
          <i class="nav-drop-icon material-icons">keyboard_arrow_right</i>
        </a>
        <div class="collapsible-body">
          <ul>
            <router-link class="waves-effect waves-grey" to="/sale">
              销售日报
            </router-link>
          </ul>
        </div>
      </li>
    </ul>
    <!--<ul class="side-nav" id="mobile-demo">-->
      <!--<li><a href="sass.html">Sass</a></li>-->
      <!--<li><a href="badges.html">Components</a></li>-->
      <!--<li><a href="collapsible.html">Javascript</a></li>-->
      <!--<li><a href="mobile.html">Mobile</a></li>-->
    <!--</ul>-->
  </header>


</template>

<style>
  .brand-logo {
    margin-left: 20px;
  }

  .navi {
    height: 60px;
    /*background-color: rgb(0, 172, 193);*/
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
      $('.collapsible').collapsible();
    }

  }
</script>

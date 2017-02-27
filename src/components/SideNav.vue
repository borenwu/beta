<template>
  <div class="side-nav white fixed z-depth-4 col s12 m4 l3">
    <div class="side-nav-wrapper">
      <ul class="side-menu collapsible collapsible-accordion" data-collapsible="accordion">
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
    </div>
  </div>
</template>

<style>
  @media only screen and (max-width: 992px) {
    .side-nav.fixed {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  .side-nav.fixed {
    padding: 0 !important;
    height: calc(100% - 60px) !important;
    margin-top: 60px;
    z-index: 0;
    max-width: 15%;
  }

  .side-nav.fixed ul li.active > a.collapsible-header,
  .side-nav.fixed ul li.active > a {
    font-weight: 500;
  }

  .side-nav .collapsible-header {
    margin: 0;
    line-height: 1em;
  }

  .side-nav .collapsible-body,
  .side-nav.fixed .collapsible-body {
    background-color: transparent;
  }

  .collapsible-header i {
    width: auto;
    font-size: 20px;
    line-height: inherit;
    display: inline-block;
    text-align: left;
    margin-right: 15px;
  }

  .side-menu {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .nav-drop-icon {
    float: right !important;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }

  li.active .nav-drop-icon {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=-3);
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

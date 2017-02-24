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
            <i class="nav-drop-icon material-icons">keyboard_arrow_right</i>
          </router-link>
          <!--<a class="collapsible-header waves-effect waves-grey">-->
          <!--<i class="material-icons">apps</i>-->
          <!--Apps-->
          <!--<i class="nav-drop-icon material-icons">keyboard_arrow_right</i>-->
          <!--</a>-->
          <div class="collapsible-body">
            <ul>
              <li><a href="mailbox.html">Mailbox</a></li>
              <li><a href="search.html">Search</a></li>
              <li><a href="todo.html">Todo</a></li>
            </ul>
          </div>
        </li>

        <li class="no-padding">
          <router-link class="collapsible-header waves-effect waves-grey" to="/work">
            <i class="small material-icons">code</i>
            工作
            <i class="nav-drop-icon material-icons">keyboard_arrow_right</i>
          </router-link>
          <div class="collapsible-body">
            <ul>
              <li><a href="ui-accordions.html">Accordion</a></li>
              <li><a href="ui-badges.html">Badges</a></li>
              <li><a href="ui-buttons.html">Buttons</a></li>
              <li><a href="ui-typography.html">Typography</a></li>
              <li><a href="ui-cards.html">Cards</a></li>
              <li><a href="ui-carousel.html">Carousel</a></li>
              <li><a href="ui-chips.html">Chips</a></li>
              <li><a href="ui-color.html">Color</a></li>
              <li><a href="ui-collections.html">Collections</a></li>
              <li><a href="ui-dropdown.html">Dropdown</a></li>
              <li><a href="ui-dialogs.html">Dialogs</a></li>
              <li><a href="ui-grid.html">Grid</a></li>
              <li><a href="ui-helpers.html">Helpers</a></li>
              <li><a href="ui-modals.html">Modals</a></li>
              <li><a href="ui-media.html">Media</a></li>
              <li><a href="ui-icons.html">Icons</a></li>
              <li><a href="ui-parallax.html">Parallax</a></li>
              <li><a href="ui-preloader.html">Preloader</a></li>
              <li><a href="ui-shadow.html">Shadow</a></li>
              <li><a href="ui-tabs.html">Tabs</a></li>
              <li><a href="ui-waves.html">Waves</a></li>
            </ul>
          </div>
        </li>

        <li class="no-padding">
          <router-link class="collapsible-header waves-effect waves-grey" to="/warehouse">
            <i class="tiny material-icons">store</i>
            仓库
            <i class="nav-drop-icon material-icons">keyboard_arrow_right</i>
          </router-link>
          <div class="collapsible-body">
            <ul>
              <li><a href="miscellaneous-sweetalert.html">Sweet Alert</a>
              <li><a href="miscellaneous-code-editor.html">Code Editor</a>
              <li><a href="miscellaneous-nestable.html">Nestable List</a>
              <li><a href="miscellaneous-masonry.html">Masonry</a>
              <li><a href="miscellaneous-idle-timer.html">Idle Timer</a>
            </ul>
          </div>
        </li>

        <li class="no-padding">
          <router-link class="collapsible-header waves-effect waves-grey" to="/finance">
            <i class="material-icons">desktop_windows</i>
            财务
            <i class="nav-drop-icon material-icons">keyboard_arrow_right</i>
          </router-link>
          <div class="collapsible-body">
            <ul>
              <li><a href="layout-blank.html">Blank Page</a></li>
              <li><a href="layout-boxed.html">Boxed Layout</a></li>
              <li><a href="layout-hidden-sidebar.html">Hidden Sidebar</a></li>
              <li><a href="layout-right-sidebar.html">Right Sidebar</a></li>
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

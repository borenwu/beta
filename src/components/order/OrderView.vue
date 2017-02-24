<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card">
        <div class="card-content">
          <p>This is card</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .input-field label{
    font-family: Microsoft JhengHei;
    font-size: 18px;
    color: #000000;
  }
  input, label, textarea {
    font-family: Microsoft JhengHei;
    font-size: 16px;
  }

  .cardTitle {
    font-family: Microsoft JhengHei;
    font-size: 20px;
  }
</style>

<script>
  import $ from 'jquery'
  export default{
    data(){
      return {
        msg: 'hello order'
      }
    },
    components: {},
    mounted() {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
      // Select
      $('select').material_select();
    }
  }
</script>

<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card">
        <div class="card-content">
          <h4>订单</h4>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input id="client" type="text">
                  <label for="client">客户</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <input id="task" type="text">
                  <label for="task">任务名称</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <input id="amount" type="number">
                  <label for="amount">印刷量</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <select>
                    <option value="" disabled selected>请选择装订方式</option>
                    <option value="1">平钉</option>
                    <option value="2">骑马钉</option>
                    <option value="3">无线胶装</option>
                    <option value="4">锁线胶装</option>
                    <option value="5">精装</option>
                    <option value="6">无</option>
                  </select>
                  <label>装订方式</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <textarea id="description" class="materialize-textarea" data-length="120"></textarea>
                  <label for="description">任务描述</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <button class="btn cyan waves-effect waves-light right" type="submit" name="action">提交
                    <i class="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
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
      $('select').material_select();
    }
  }
</script>

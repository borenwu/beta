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
                  <input id="client" type="text" v-model="clientname">
                  <label for="client">客户</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <input id="task" type="text" v-model="taskname">
                  <label for="task">任务名称</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <input id="amount" type="number" v-model="amount">
                  <label for="amount">印刷量</label>
                </div>
              </div>

              <div class="input-field col s12">
                <span>交付日期</span>
                <input type="date" class="datepick">
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <span>装订方式</span>
                  <select v-model="bookbind" class="browser-default book-bind">
                    <option>平钉</option>
                    <option>骑马钉</option>
                    <option>无线胶装</option>
                    <option>锁线胶装</option>
                    <option>精装</option>
                    <option>无</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <textarea id="description" class="materialize-textarea" data-length="120" v-model="description"/>
                  <label for="description">任务描述</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <button class="btn cyan waves-effect waves-light right" v-on:click="handleSubmit">提交
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
  .book-bind {
    border-color: gray;
  }

  .input-field label {
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
        msg: 'hello order',
        clientname: "",
        taskname: "",
        amount: 0,
        duedate: "",
        bookbind: "",
        description: "",
      }
    },
    methods: {
      handleSubmit(e){
        e.preventDefault();
        this.addOrder(this.clientname,this.taskname,this.amount,this.duedate,this.bookbind,this.description)
      },

      addOrder(clientname, taskname, amount, duedate, bookbind, description){
        $.ajax({
          type: 'post',
          url: 'http://192.168.1.131:5000/order/add',
          data: {
            clientname: clientname,
            taskname: taskname,
            amount:amount,
            duedate:duedate,
            bookbind:bookbind,
            description:description
          }
        }).done(function (resp) {
          if (resp.status == "success") {
            console.log('success')
          }
        })
      }
    },
    components: {},
    mounted() {
      var vm = this;
      $('select').material_select();
      $('.datepick').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        format: 'yyyy-mm-dd',
        weekdaysLetter: ['日', '一', '二', '三', '四', '五', '六'],
        today: '今天',
        clear: '清除',
        close: '关闭',
        monthsFull: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        weekdaysFull: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        weekdaysShort: ['日', '一', '二', '三', '四', '五', '六'],
        onSet: function () {
          var date = this.get();
          vm.duedate = date;
          this.close();
        }
      })
    }
  }
</script>

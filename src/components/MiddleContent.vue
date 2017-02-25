<template>
  <div class="main col s12 m8 l9 offset-l3">
    <div class="middle-content container ">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .middle-content.container{
    margin-top: 35px;
  }
</style>

<script>
    export default{
        data(){
            return{
                msg:'hello middle content'
            }
        },
        components:{

        }
    }
</script>

<template>
  <div id="app">
    <v-header :seller="seller" v-if="seller">
    </v-header>

    <div class="tab border-1px">

          <div class="tab-item">
            <router-link to="/goods">商品</router-link>
          </div>
              <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
             </div>
            <div class="tab-item">
              <router-link to="/seller">商家</router-link>
            </div>
    </div>

          <router-view></router-view>

  </div>
</template>

<script>
  import header from './components/header/header'
  import axios from 'axios'
  const ERR_OK=0;
  export default{
    components:{
      'v-header':header,
    },
    data() {
      return {
        seller:{}
      };
    },
     created(){
       axios.get('http://localhost:8080/api/seller')
         .then(response=>{
           this.seller=response.data;
         })
         .catch(error=>{
           // console.log(error);
           alert('网络错误，不能访问');
         })
     },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  #app
    .tab
      display:flex
      width: 100%
      height:40px
      line-height:40px
      border-1px(rgb(7,17,27,0.1))
      .tab-item
          flex:1
          text-align: center
          & > a
            display: block
            font-size:14px
            color: rgb(77,85,93)
            &.active
              color:rgb(240,20,20)

</style>

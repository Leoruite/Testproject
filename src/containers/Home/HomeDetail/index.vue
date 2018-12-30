<template>
  <div class="detail">
    <SubPageHeader tag="首页推荐"/>
    <p class="hot">热门</p>
    <DetailInfo  
    :userInfo='userInfo'
    />
    <DetailCommand />
    <DetailChat 
    :chat="chat"
    />
    <UserDetail />
  </div>
</template>

<script>
import SubPageHeader from "@/components/SubPageHeader/index"
import DetailInfo from "@/components/DetailInfo/index"
import DetailCommand from "@/components/DetailCommand/index"
import DetailChat from "@/components/DetailChat/index"
import UserDetail from "@/components/UserDetail/index"
  export default {
    name:"HomeDetail",
    data(){
      return{
        userInfo:[],
        chat:[],
        img:"",
      }
    },
    components:{
      SubPageHeader,
      DetailInfo,
      DetailCommand,
      DetailChat,
      UserDetail
    },
    mounted(){
      this.$axios
      .get(this.HOST + "/detailHot")
      .then(res => {
        this.userInfo = res.data;
      })
      .catch(error => new Error(error));

      this.$axios
      .get(this.HOST + "/detailChat")
      .then(res => {
        this.chat = res.data;
        console.log(res);
      })
    }
  }
</script>

<style lang="less" scoped>
.detail{
  box-sizing: border-box;
  .hot{
    width: 100%;
    height: 20px;
    background: #fff;
    text-align: left;
    padding: 2%;
  }
}
</style>
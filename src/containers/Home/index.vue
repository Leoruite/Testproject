<template>
  <div>
    <Banner :bannerImg="bannerImg" path="homedetail"/>

    <HomeList 
    :title="title1" 
    :list="list"   
    :imgs1="imgs1" 
    path="homemore"/>

    <HomeList 
    :title="title2" 
    :list="list"   
    :imgs2="imgs2" 
    path="homemore"/>

    <HomeList 
    :title="title3" 
    class="pastoral" 
    :list="list"    
    :imgs3="imgs3" 
    path="homemore"/>
    
    <FooterNav />
  </div>
</template>
<script>
import FooterNav from "../../components/FooterNav/index";
import Banner from "../../components/HomeBanner/index";
import HomeList from "../../components/Home/HomeList";
export default {
  name: "Home",
  components: {
    FooterNav,
    Banner,
    HomeList
  },
  data() {
    return {
      bannerImg: [],
      list: [],
      title1: "",
      title2: "",
      title3: "",
      imgs1:"",
      imgs2:"",
      imgs3:"",
    };
  },
  mounted() {
    this.$axios
      .get(this.HOST + "/homeBanner")
      .then(res => {
        this.bannerImg = res.data;
        console.log(this.bannerImg);
      })
      .catch(error => new Error(error));

    this.$axios
      .get(this.HOST + "/homeList")
      .then(res => {
        this.list = res.data;
        this.title1 = res.data[0].title;
        this.title2 = res.data[1].title;
        this.title3 = res.data[2].title;
        this.imgs1 = res.data[0].img;
        this.imgs2 = res.data[1].img;
        this.imgs3 = res.data[2].img;
        console.log(this.imgs1)
      })
      .catch(error => new Error(error));
  }
};
</script>
<style lang="less" scoped>
.pastoral {
  margin-bottom: 25%;
}
</style>

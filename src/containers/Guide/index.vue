<template>
   <!-- 引导页 -->
   <div>
      <IndexBanner :banners='guideArr' path="home" />
   </div>
</template>

<script>
import IndexBanner from '@/components/IndexBanner'
   export default {
      name: 'Guide',
      data() {
         return{
            // 引导页轮播图片
            guideArr: [
            require('../../assets/imgs/boot page01.png'),
            require('../../assets/imgs/boot page02.png'),
            require('../../assets/imgs/boot page03.png'),
            ]
         }
      },
      components:{
         IndexBanner
      }
   }
</script>

<style scoped>

</style>
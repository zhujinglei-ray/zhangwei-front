<template>
  <el-container class="main_container">
    <el-header>
      <Header></Header>
    </el-header>

    <el-main class="main">
      <div>介绍</div>
      <div>这里你自己写一点东西: 在正式申请 行用卡前 用户可以快速看一下 自己的成功率</div>
      <Application></Application>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>

  </el-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Footer from './footer.vue'
import Header from './header.vue'
import Application from './application.vue'

export default defineComponent({
  setup() {
  },
  components: { Footer, Header, Application }
})

</script>
<style scoped>
.main_container {
  height: 100%;
  width: 100%;
  background-color: rgb(224, 225, 235);
}

.main {
  height: 100%;
}

.main_form {
  background-color: white;
}
</style>
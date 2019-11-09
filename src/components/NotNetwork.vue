<template>
	<div class="network" v-if="!networkSuccess">
		<h3>我没网了!!!</h3>
		<div class="btn" @click="onRefresh">点击刷新</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "NotNetwork",
  computed: {
    ...mapGetters([
      'networkSuccess',
    ])
  },
  methods: {
    // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
    onRefresh () {
      //获取断网前用户所在路由
      //回退到原路由
      console.log(this.networkSuccess)
      if (window.navigator.onLine) {
        let path = this.$route.query.redirect;
        console.log(path);
        this.$router.replace('/' || path);
      }
    }
  }
}
</script>

<style scoped>
.network {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 3000;
	width: 50%;
	height: 200px;
	background: gray;
}
.btn {
	width: 200px;
	background: yellow;
}
</style>
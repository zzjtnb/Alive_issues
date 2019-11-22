<!--  -->
<template>
	<div class="site-content">
		<div class="container">
			<div class="breadcrumbs">
				当前位置：
				<a href="https://www.microeco.net">百码云</a>
				<small>&gt;</small>
				<a href="https://www.microeco.net/module">微信应用</a>
				<small>&gt;</small>
				<a href="https://www.microeco.net/module/xch">小程序源码</a>
				<small>&gt;</small> 志汇叮咚同城微圈小程序 V11.3.8 开源+前端
			</div>
		</div>
	</div>
</template>

<script>
import { getIssues } from '@/api/issue'
export default {
  data () {
    return {
      id: this.$route.params.id,
    }
  },
  created () {
    console.log(this.id);
    getIssues(this.id).then((res) => {
      console.log(res);
      console.log(this.id);

    })
  },
  mounted () {

  },
  methods: {

  },
  components: {

  },
}
</script>

<style scoped>
</style>
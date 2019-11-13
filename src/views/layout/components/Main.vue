<!--  -->
<template>
	<div class="site-content">
		<main class="site-main">
			<div class="bgcolor-fff lazyloaded" :class="{section:isSection}">
				<transition name="fade">
					<router-view></router-view>
				</transition>
			</div>
		</main>
	</div>
	<!-- end sitecoent -->
</template>

<script>
export default {
  data () {
    return {
      isSection: true
    }
  },
  mounted () {


  },
  created () {
    if (this.$route.path == '/worshipheroes') {
      this.isSection = false
      console.log(this.$route.path)
    }
  },
  methods: {

  },
  components: {

  },
}
</script>

<style scoped>
.site-content {
	padding-bottom: 0;
	padding-top: 0;
}
.site-main {
	display: block;
}

.lazyloaded {
	opacity: 1;
	transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
}
.section {
	padding-bottom: 40px;
	padding-top: 40px;
	background: url("/images/main/bg-2.png");
}
.bgcolor-fff {
	background-color: #fff;
}
@media (max-width: 767px) {
	.site-content {
		padding-bottom: 30px;
		padding-top: 30px;
	}
}
@media (max-width: 575px) {
	.container {
		max-width: 460px;
		padding-left: 10px;
		padding-right: 10px;
	}
}
</style>
<template>
	<div class="site">
		<Header msg="Welcome to Your Vue.js App" />
		<div class="header-gap"></div>
		<Main />
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Main
  }
}
</script>
<style  scoped>
.site {
	position: relative;
	overflow: hidden;
}
.header-gap {
	height: 80px;
}
</style>

<!--  -->
<template>
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
		<article class="article-content">
			<!-- <div v-html="getMainDes"></div> -->
			<!-- <mavon-editor :ishljs="true" codeStyle="monokai-sublime" v-html="blog.content"></mavon-editor> -->
			<mavon-editor :ishljs="true" :codeStyle="true" codeStyle="agate" v-html="blog.content"></mavon-editor>
		</article>
	</div>
</template>

<script>
import { getIssues } from '@/api/issue'
export default {
  data () {
    return {
      content: {},
      id: this.$route.params.id,
      blog: {
        id: '',
        title: '',
        content: '',
        description: ''
      },
    }
  },
  created () {
    console.log(this.id);
    getIssues(this.id).then((res) => {
      this.content = res.data
      this.blog['content'] = this.$markdown(res.data.body)
    })
  },
  mounted () {

  },
  methods: {

  },
  computed: {
    getMainDes () {
      let a = this.content.body;
      console.log(this.content)
      if (typeof a !== 'undefined' && a !== 'null') {//解决marked出现参数为空的问题，实际a有值，但不加这判断就报错
        return this.$markdown(a);
      }
    },
    // getTime () {
    //   return friendlytimejs.FriendlyTime(dayjs(this.content.updated_at).add(8, "hour").format('YYYY-MM-DD HH:mm:ss'), dayjs());
    // }
  },
  components: {

  },
}
</script>

<style scoped>
.container {
	max-width: 1440px;
	margin: 0 auto;
	height: auto !important;
	padding-top: 60px;
}
.breadcrumbs {
	font-size: 13px;
	text-align: left;
	margin-bottom: 30px;
	margin-top: -30px;
	color: #999;
	padding: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.breadcrumbs a {
	color: #999;
}
.article-content {
	border-radius: 4px;
	background-color: #fff;
	word-wrap: break-word;
	/* padding: 20px; */
}
</style>
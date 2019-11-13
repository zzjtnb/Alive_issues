<!--  -->
<template>
	<div class="site-content">
		<div class="container">
			<Labels />
			<main class="site-main">
				<h3 class="section-title">
					<span>
						<i class="fa fa-list-alt"></i>
						<svg class="icon">
							<use xlink:href="#zuixinwenzhang_huaban" />
						</svg>
						<span>最新文章</span>
					</span>
				</h3>
				<vs-row vs-w="12" class="row posts-wrapper" style="width: auto;">
					<vs-col vs-lg="6" v-for="(item,index) in list" :key="index">
						<article class="post post-list">
							<div class="entry-media">
								<div class="placeholder" style="padding-bottom: 75%;">
									<a>
										<img class="lazyloaded" :src="getMainImage[index]" />
									</a>
								</div>
								<div class="entry-star">
									<a href="javascript:;" title="收藏文章" etap="star" data-postid="9639" class="ripro-star">
										<svg class="icon">
											<use xlink:href="#xingxing" />
										</svg>
									</a>
								</div>
								<div class="entry-format">
									<svg class="icon">
										<use xlink:href="#tuku" />
									</svg>
								</div>
							</div>
							<div class="entry-wrapper">
								<header class="entry-header">
									<div class="entry-meta">
										<svg class="icon" v-if="item.labels">
											<use xlink:href="#biaoqian" />
										</svg>
										<label v-for="(items,index) in item.labels" :style="{background:`#${items.color}`}" :key="index">{{items.name}}</label>
									</div>

									<h2 class="entry-title">
										<a>{{item.title}}</a>
									</h2>
								</header>
								<div class="entry-excerpt u-text-format">
									<p v-html="getMainDes[index]"></p>
								</div>
								<div class="entry-footer">
									<a>
										<svg class="icon">
											<use xlink:href="#shijian" />
										</svg>
										{{getTime[index]}}
									</a>
									<a>
										<span>
											<svg class="icon">
												<use xlink:href="#yanjing" />
											</svg>
											<span>032</span>
										</span>
									</a>
									<a>
										<span>
											<svg class="icon">
												<use xlink:href="#xiaoxi" />
											</svg>
											<span>032</span>
										</span>
									</a>
									<a>
										<span style="color: #fd721f">
											<svg class="icon">
												<use xlink:href="#redu" />
											</svg>
											<span>032</span>
										</span>
									</a>
								</div>
							</div>
						</article>
					</vs-col>
				</vs-row>

				<div class="infinite-scroll-action">
					<div class="infinite-scroll-button button">加载更多</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
import { getIssues } from '@/api/issue'
import Labels from './Labels';
export default {
  data () {
    return {
      list: [],
      labeles: [],
    }
  },
  created () {
    this.issueList();
  },
  mounted () {

  },
  computed: {
    getMainImage () {
      let arr = [];
      for (let item of this.list) {
        if (this.$markdown(item.body).match(/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/)) {
          arr.push(this.$markdown(item.body).match(/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/)[1]);
        } else {
          arr.push('http://via.placeholder.com/200x200');
        }
      }
      return arr;
    },
    getMainDes () {
      let arr = [];
      for (let item of this.list) {
        arr.push(this.$markdown(item.body).replace(/<[^>]+>/g, "").substring(0, 200));
      }
      return arr;
    },
    getTime () {
      let arr = [];
      for (let item of this.list) {
        console.log(item.updated_at)
        arr.push(this.$util.utcToLocalTime(item.updated_at));
      }
      return arr;
    }
  },
  methods: {
    issueList () {
      getIssues().then((response) => {
        this.list = response.data;
      })
    },
  },
  components: {
    Labels
  },
}
</script>

<style scoped>
.icos {
	width: 0.7rem;
	height: 1rem;
}
.entry-meta label {
	float: left;
	background: #00b1ff;
	color: #606266;
	padding: 0px 4px;
	margin-right: 10px;
	font-size: 12px;
	display: inline-block;
	max-width: 100%;
}
.site-content {
	padding-top: 60px;
	padding-bottom: 60px;
}
.container {
	margin: 0 auto;
	max-width: 825pt;
}
.section-title {
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.2px;
	margin-bottom: 40px;
	position: relative;
	text-align: left;
	text-transform: uppercase;
}
.section-title:before {
	background-color: #e6e6e6;
	content: "";
	height: 1px;
	left: 0;
	margin-top: -1px;
	position: absolute;
	top: 50%;
	width: 100%;
}
.section-title span {
	background-color: #f6f6f6;
	padding: 4px 15px;
	position: relative;
	letter-spacing: 2px;
	font-weight: 600;
	background: #fff;
	border-radius: 4px;
}
/**
文章部分
 */
.vs-row > .vs-col {
	position: relative;
	float: left;
	padding-right: 15px;
	padding-left: 15px;
}
.posts-wrapper,
.navbar .menu-item-mega > .sub-menu {
	display: flex;
	flex-wrap: wrap;
	margin-left: -15px;
	margin-right: -15px;
}
.post-list {
	display: flex;
	margin-bottom: 30px;
	position: relative;
	padding: 10px;
	background: #ffffff;
	border-radius: 4px;
}
.post-list,
.category-box,
.vip-cell {
	transition: box-shadow 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-box-shadow 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
	transform: translate(0, 0);
}
.entry-media {
	margin-bottom: 10px;
	position: relative;
}
.post-list .entry-media {
	flex-shrink: 0;
	margin-bottom: 0;
	margin-right: 20px;
	width: 220px;
}
.entry-media .placeholder {
	background-color: #ffffff;
	height: 0;
	overflow: hidden;
	/* border-radius: 4px 4px 0 0; */
}
.entry-media a::before {
	bottom: 0;
	content: "";
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 1;
	opacity: 0.33;
	-webkit-transition: all 1s ease 0s;
	-moz-transition: all 1s ease 0s;
	-o-transition: all 1s ease 0s;
	transition: all 1s ease 0s;
}
img {
	display: block;
	height: auto;
	max-width: 100%;
	vertical-align: middle;
}
.lazyloaded {
	opacity: 1;
	transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
}
.entry-media img {
	margin: 0 auto;
	width: 100%;
	overflow: hidden;
}
.entry-media a img,
.entry-media a-img {
	max-width: 100%;
	-webkit-transition: all 444ms ease-in-out;
	-moz-transition: all 444ms ease-in-out;
	transition: all 444ms ease-in-out;
	-ms-flex-negative: 0;
	flex-shrink: 0;
}
.entry-star {
	display: block;
	border-radius: 50%;
	font-size: 15px;
	height: 25px;
	right: 10px;
	line-height: 25px;
	position: absolute;
	text-align: center;
	top: 10px;
	width: 25px;
	opacity: 0;
	visibility: hidden;
	background-color: #ffc107;
}
.ripro-star {
	color: #ffffff;
	border-color: #ffffff;
}
.entry-media a::before {
	bottom: 0;
	content: "";
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 1;
	opacity: 0.33;
	-webkit-transition: all 1s ease 0s;
	-moz-transition: all 1s ease 0s;
	-o-transition: all 1s ease 0s;
	transition: all 1s ease 0s;
}
.entry-format {
	background-color: rgba(0, 0, 0, 0.4);
	border-radius: 50%;
	color: #fff;
	font-size: 15px;
	height: 25px;
	left: 10px;
	line-height: 25px;
	position: absolute;
	text-align: center;
	top: 10px;
	width: 25px;
}
article,
aside,
footer,
header,
nav,
section {
	display: block;
}
.entry-header {
	word-break: break-word;
}
.entry-excerpt {
	font-size: 13px;
	margin-top: 10px;
	color: #aaa;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	white-space: normal;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	margin-bottom: 10px;
}
.entry-footer {
	white-space: nowrap;
	display: flex;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.2px;
	margin-top: 10px;
	text-transform: uppercase;
}
.entry-footer a {
	position: relative;
	margin-right: 5px;
	color: #aaaaaa;
	padding: 4px 6px;
	border-radius: 4px;
	font-weight: 500;
	background: rgb(246, 246, 246);
	line-height: 1;
}
</style>
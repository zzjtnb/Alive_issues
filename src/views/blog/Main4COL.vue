<!--  -->
<template>
	<div class="site-content">
		<div class="container">
			<div class="filter_content">
				<form class="mb-0" method="get" action="https://www.microeco.net">
					<input type="hidden" name="s" />
					<div class="form-box search-properties mb-0">
						<!-- 相关标签 -->
						<div class="filter-item">
							<ul class="filter-tag">
								<span>
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#biaoqian1" />
									</svg>
									<span>标签</span>
								</span>
								<li v-for="(item,index) in labeles">
									<a :href="item.url" target="_blank" :style="{background:`#${item.color}`}">{{item.name}}</a>
								</li>
							</ul>
						</div>
						<!-- 自定义筛选 -->
						<div class="filter-tab">
							<vs-row style="display: block;overflow: inherit;">
								<div class="col-12 col-sm-6"></div>
								<vs-col vs-w="12">
									<!-- 排序 -->
									<ul class="filter-tag">
										<div class="right">
											<li class="rightss">
												<svg class="icon icos" aria-hidden="true">
													<use xlink:href="#xiajiantou" />
												</svg>
												<a href="/code?order=date" class="on">发布日期</a>
											</li>
											<li class="rightss">
												<svg class="icon icos" aria-hidden="true">
													<use xlink:href="#xiajiantou" />
												</svg>
												<a href="/code?order=modified" class>修改时间</a>
											</li>
											<li class="rightss">
												<svg class="icon icos" aria-hidden="true">
													<use xlink:href="#xiajiantou" />
												</svg>
												<a href="/code?order=comment_count" class>评论数量</a>
											</li>
											<li class="rightss">
												<svg class="icon icos" aria-hidden="true">
													<use xlink:href="#xiajiantou" />
												</svg>
												<a href="/code?order=rand" class>随机</a>
											</li>
											<li class="rightss">
												<svg class="icon icos" aria-hidden="true">
													<use xlink:href="#xiajiantou" />
												</svg>
												<a href="/code?order=hot" class>热度</a>
											</li>
										</div>
									</ul>
								</vs-col>
							</vs-row>
						</div>

						<!-- .row end -->
					</div>
					<!-- .form-box end -->
				</form>
			</div>

			<main class="site-main">
				<vs-row vs-w="12" class="row posts-wrapper" style="width: auto;">
					<vs-col vs-w="6" vs-xs="6" vs-sm="4" vs-lg="3" v-for="(item,index) in list" :key="index">
						<article id="post-9628" class="post post-grid post-9628">
							<div class="entry-media">
								<div class="placeholder" style="padding-bottom: 75%;">
									<a>
										<img class="lazyloaded" :src="getMainImage[index]" />
									</a>
								</div>
								<div class="entry-star">
									<a href="javascript:;" title="收藏文章" class="ripro-star">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#xingxing" />
										</svg>
									</a>
								</div>
								<div class="entry-format">
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#tuku" />
									</svg>
								</div>
							</div>
							<div class="entry-wrapper">
								<!-- <a class="grid_author_avt">
									<div class="grid_author_bggo avatar bg-cover" style="background-image: url(/images/main/avatar-1.jpg);"></div>
								</a>-->
								<header class="entry-header">
									<div class="entry-meta">
										<!-- <span class="meta-category" v-for="(items,index) in item.labels">
											<a href="https://www.microeco.net/code/php" rel="category">
												<i class="dot"></i>
												{{items.name}}
											</a>
										</span>-->
										<svg class="icon" aria-hidden="true" v-if="item.labels">
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
										<time datetime="2019-10-28T22:21:48+08:00">
											<svg class="icon" aria-hidden="true">
												<use xlink:href="#shijian" />
											</svg>
											{{getTime[index]}}
										</time>
									</a>
									<a>
										<span>
											<svg class="icon" aria-hidden="true">
												<use xlink:href="#yanjing" />
											</svg>
											<span>032</span>
										</span>
									</a>
									<!-- <a>
										<span>
											<svg class="icon" aria-hidden="true">
												<use xlink:href="#xiaoxi" />
											</svg>
											<span>032</span>
										</span>
									</a>-->
									<a>
										<span style="color: #fd721f">
											<svg class="icon" aria-hidden="true">
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
import { getIssues, getLabels } from '@/api/issue'
export default {
  data () {
    return {
      list: [],
      labeles: [],
    }
  },
  created () {
    this.issueList();
    this.labelesList()
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
    labelesList () {
      getLabels().then((response) => {
        this.labeles = response.data;
      })
    },
  },
  components: {

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
.filter_content {
	position: relative;
	z-index: 1;
	display: block;
	margin-top: -90px;
	margin-bottom: 30px;
	padding: 20px;
	width: 100%;
	border: 1px solid #f3f3f3;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 34px 20px -24px rgba(0, 36, 100, 0.06);
}
.filter_content .form-box {
	padding: 0;
	padding-bottom: 0;
}
.form-box {
	margin-bottom: 30px;
	padding: 40px;
	border-radius: 4px;
	background-color: #fff;
}
.filter_content .filter-item {
	margin-top: 10px;
}
.filter_content .filter-item span {
	margin-right: 10px;
	padding: 2px 6px;
	border: 1px solid transparent;
	border-radius: 4px;
	background-color: #eee;
	color: #7b8695;
}
.filter_content .filter-tag li {
	display: inline-block;
	margin: 0;
	margin-bottom: 5px;
	padding: 0;
	list-style: none;
}
.filter_content .filter-item a {
	position: relative;
	display: inline-block;
	margin-top: 0;
	margin-right: 10px;
	padding: 0 10px;
	border: 1px solid transparent;
	border-bottom: 1px solid transparent;
	border-radius: 0;
	border-radius: 4px;
	color: white;
}
.filter_content .filter-tab {
	margin-top: 10px;
	margin-bottom: -10px;
	padding-top: 13px;
	border-top: 1px solid #e9e9e9;
}
.navbar .menu-item-mega > .sub-menu,
.row {
	display: flex;
	margin-right: -15px;
	margin-left: -15px;
	flex-wrap: wrap;
}
.filter_content .filter-tag {
	position: relative;
	display: inline-block;
	margin: 0;
	padding: 0;
	list-style: none;
}
.filter_content .filter-tab li {
	display: inline-block;
	margin: 0;
	margin-bottom: 5px;
	padding: 0;
	list-style: none;
}
.filter_content .filter-tab li.rightss {
	float: right;
}
.filter_content .filter-tab a {
	position: relative;
	display: inline-block;
	margin-top: 0;
	margin-right: 20px;
	color: grey;
}
.filter_content .filter-tab a.on {
	color: #ff9800;
}
/**
文章部分
 */
.navbar .menu-item-mega > .sub-menu,
.row {
	display: flex;
	margin-right: -15px;
	margin-left: -15px;
	flex-wrap: wrap;
}

.post-grid .entry-media {
	position: relative;
	margin-bottom: 0;
}

.post-grid .entry-media img {
	margin: 0 auto;
	width: 100%;
	height: 187px;
	border-radius: 4px 4px 0 0;
}

.entry-media {
	position: relative;
	margin-bottom: 10px;
}

.entry-media .placeholder {
	overflow: hidden;
	height: 0;
	background-color: #fff;
}

.entry-media img {
	overflow: hidden;
	margin: 0 auto;
	width: 100%;
}

.entry-media img:hover {
	transition: all 0.3s ease;
}

.entry-star {
	position: absolute;
	top: 10px;
	right: 10px;
	display: block;
	visibility: hidden;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color: #ffc107;
	text-align: center;
	font-size: 15px;
	line-height: 25px;
	opacity: 0;
}

.post-grid:hover .entry-star,
.post-list:hover .entry-star {
	z-index: 99;
	visibility: visible;
	opacity: 1;
	transition: all 0.2s;
}

.ripro-star {
	border-color: #fff;
	color: #fff;
}

.entry-media a:before {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	content: "";
	opacity: 0.33;
	transition: all 1s ease 0s;
}

.entry-format {
	position: absolute;
	top: 10px;
	left: 10px;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.4);
	color: #fff;
	text-align: center;
	font-size: 15px;
	line-height: 25px;
}

.post-grid .entry-wrapper {
	padding: 10px 10px 20px;
}

.grid_author_avt {
	position: relative;
	z-index: 9;
	display: block;
	margin-top: -24px;
	margin-left: -10px;
	width: 75pt;
	height: 36px;
	transform: translateZ(0);
}

.grid_author_bggo {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: 9;
	margin: auto;
	width: 30px;
	height: 30px;
	border-radius: 50%;
}

.bg-cover {
	background-position: 50% 50%;
	background-size: cover;
}

/*头像旋转的效果*/
.avatar {
	padding: 1px;
	border: 1px solid #cfd9e1;
	width: 24px;
	height: 24px;
	-webkit-border-radius: 100% !important;
	transition: transform 0.4s ease-out;
}
.avatar:hover {
	box-shadow: 0 0 10px #fff;
	transform: rotateZ(360deg);
	-webkit-transform: rotateZ(360deg);
}

.grid_author_avt:after {
	position: absolute;
	left: 50%;
	z-index: -1;
	width: 100%;
	height: 100%;
	top: -3px;
}

article,
aside,
footer,
header,
nav,
section {
	display: block;
}

.post-grid .entry-header .entry-title {
	display: -webkit-box;
	overflow: hidden;
	height: 36px;
	text-overflow: ellipsis;
	white-space: normal;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.entry-header .entry-title {
	margin-top: 0.65rem;
	margin-bottom: 0.65rem;
	font-size: 0.975rem;
}

.entry-header {
	word-break: break-word;
}

.entry-header .entry-meta {
	margin-bottom: 5px;
	color: #aaa;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.2px;
	font-size: 11px;
	align-items: center;
}

.entry-header .entry-meta,
.entry-header .entry-meta .meta-category {
	display: flex;
	flex-wrap: wrap;
}

.entry-header .entry-meta .meta-category a {
	display: flex;
	align-items: center;
}

.entry-header .entry-meta a {
	color: #aaa;
}

.entry-header .entry-meta .meta-category .dot {
	margin-right: 5px;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: var(--accent-color);
	background-color: #fd721f;
}

.entry-excerpt {
	display: -webkit-box;
	overflow: hidden;
	margin-top: 10px;
	margin-bottom: 10px;
	color: #aaa;
	text-overflow: ellipsis;
	white-space: normal;
	font-size: 13px;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.entry-footer {
	display: flex;
	margin-top: 10px;
	text-transform: uppercase;
	white-space: nowrap;
	letter-spacing: 0.2px;
	font-weight: 700;
	font-size: 11px;
	justify-content: center;
	align-content: center;
}

.entry-footer a {
	position: relative;
	margin-right: 5px;
	padding: 4px 6px;
	border-radius: 4px;
	background: #f6f6f6;
	color: #aaa;
	font-weight: 500;
	line-height: 1;
}

.col-6 {
	position: relative;
	width: 100%;
	max-width: 50%;
	flex: 0 0 50%;
}

.vs-row > .vs-col {
	position: relative;
	float: left;
	padding-right: 15px;
	padding-left: 15px;
}

.infinite-scroll-action {
	display: flex;
	justify-content: center;
}

.button,
.navigation .nav-next a,
.navigation .nav-previous a,
button[type="submit"],
input[type="submit"] {
	display: inline-block;
	padding: 9pt 20px;
	outline: 0;
	border: none;
	border-radius: 4px;
	background-color: #34495e;
	color: #fff;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 500;
	font-size: 11px;
	font-family: Lato, sans-serif;
	line-height: 1;
	cursor: pointer;
}

.infinite-scroll-button {
	padding: 1pc;
	min-width: 200px;
	background: linear-gradient(-125deg, #2f49fd 0, #0295f9 100%);
	box-shadow: 0 8px 10px rgba(32, 160, 255, 0.3);
}

.button:hover {
	opacity: 0.8;
	transition: all 0.3s ease-in-out;
	transform: scale(0.95);
}

.post-grid {
	margin-bottom: 30px;
	border: 1px solid #eee;
	border-radius: 4px;
	background-color: #fff;
	transition: box-shadow 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-box-shadow 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
	transform: translate(0, 0);
}

.post-grid:hover {
	box-shadow: 0 34px 20px -24px rgba(136, 161, 206, 0.3);
	transform: translateY(-5px);
	-ms-transform: translateY(-5px);
}

@media (max-width: 575px) {
	.post-grid {
		margin-bottom: 20px;
	}

	.article-content .entry-header .entry-title,
	.entry-header .entry-title {
		padding-bottom: 10px;
		font-weight: 600;
		font-size: 14px;
	}

	.container {
		padding-right: 10px;
		padding-left: 10px;
		max-width: 460px;
	}
}

@media (max-width: 767px) {
	.filter_content {
		display: block;
		margin-top: -10px;
		padding: 10px;
	}

	.site-content {
		padding-top: 30px;
		padding-bottom: 30px;
	}

	.filter_content .filter-item a {
		margin-right: 5px;
		padding: 0 5px;
		font-size: 13px;
		line-height: 20px;
	}

	.filter_content .filter-tab a {
		margin-right: 5px;
		font-size: 13px;
	}

	.filter_content .filter-item span,
	.filter_content .filter-tab span {
		display: inline-block;
		margin-bottom: 10px;
		width: 100%;
	}
}
/* 全站文章特色图版封面缩放效果 */

.entry-media a img,
.entry-media a-img {
	max-width: 100%;
	-webkit-transition: all 444ms ease-in-out;
	-moz-transition: all 444ms ease-in-out;
	transition: all 444ms ease-in-out;
	-ms-flex-negative: 0;
	flex-shrink: 0;
}

.entry-media a:hover img,
.entry-media a:hover .entry-media a-img {
	-webkit-transform: scale(1.05);
	-moz-transform: scale(1.05);
	-ms-transform: scale(1.05);
	transform: scale(1.05);
}
</style>
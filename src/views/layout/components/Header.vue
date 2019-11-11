<!-- 头部 -->
<template>
	<header :class="{ slide_now : headerShow }" class="site_header" ref="siteHeader">
		<div class="container">
			<div class="navbar">
				<div class="logo-wrapper">
					<a class="site-logo" href>
						<img class="logo regular tap-logo" src="/images/header/logo-light.png" />
					</a>
				</div>
				<div class="sep" v-if="!Mobile"></div>
				<nav v-if="!Mobile">
					<ul id="menu" class="nav-list u-plain-list">
						<li class="menu-item" v-for="menu in $router.options.routes" v-if="menu.children">
							<router-link :to="menu.path">
								{{ menu.meta.title}}
								<vs-icon icon="keyboard_arrow_down" class="nav-icon" v-if="menu.meta.submenu"></vs-icon>
							</router-link>
							<ul class="sub-menu" v-if="menu.meta.submenu">
								<li class="menu-item" v-for="(submenu,index) in menu.children">
									<router-link :to="submenu.path">{{submenu.meta.title}}</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<div class="main-search">
					<form method="get" class="search-form inline" action="https://www.microeco.net/">
						<input type="search" class="search-field inline-field" placeholder="输入关键词，回车..." autocomplete="off" value name="s" required="required" />
						<button type="submit" class="search-submit">
							<i class="mdi mdi-magnify"></i>
						</button>
					</form>
					<div class="search-close navbar-button">
						<i class="mdi mdi-close"></i>
					</div>
				</div>

				<div class="actions">
					<!-- user -->
					<div class="login-btn navbar-button">登录</div>
					<!-- user end -->
					<div class="search-open navbar-button">
						<vs-icon icon="search" size="small" round></vs-icon>
					</div>
					<div class="burger navbar-button">
						<vs-icon icon="menu" size="small" round></vs-icon>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
// import { meanu } from '@/api/common'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      list: [],
      headerShow: false
    }
  },
  computed: {
    ...mapGetters([
      'Mobile',
      'token',
      'mini'
    ]),

  },
  created () {
    // console.log(this.$store.getters.Mobile)
  },
  mounted () {
    // handleScroll为页面滚动的监听回调
    window.addEventListener('scroll', this.handleScroll);
  },
  /**
   * 在destroyed回调中移除监听
   */
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    /**
     * 判断页面滚动距离：
     */
    handleScroll () {
      // 监听dom渲染完成
      this.$nextTick(function () {
        let siteHeader = this.$refs.siteHeader;
        // 这里要得到top的距离
        this.offsetTop = siteHeader.offsetTop;
        //和元素自身的高度
        this.offsetHeight = siteHeader.offsetHeight;
        console.log("offsetTop:" + this.offsetTop + "," + "offsetHeight:" + this.offsetHeight);
      });
      // 得到页面滚动的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // 判断页面滚动的距离是否大于吸顶元素的位置
      this.headerShow = scrollTop > this.offsetHeight;
    },

    // getScroll () {      window.addEventListener('scroll', () => {
    //     this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //     //获取高度值
    //     var height = this.$refs.siteHeader.offsetHeight; //100

    //     //获取元素样式值,element 为元素ref="element"
    //     var heightCss = window.getComputedStyle(this.$refs.element).height; // 100px

    //     //获取元素内联样式值
    //     var heightStyle = this.$refs.element.style.height; // 100px
    //     console.log(st);
    //   }, true)    },
  },
  components: {

  },
}
</script>

<style scoped>
.site_header {
	position: fixed !important;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	background-color: #fff;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.07);
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	transition: background-color 0.5s cubic-bezier(0.77, 0, 0.175, 1), box-shadow 0.5s cubic-bezier(0.77, 0, 0.175, 1),
		-webkit-transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
	transition: background-color 0.5s cubic-bezier(0.77, 0, 0.175, 1), box-shadow 0.5s cubic-bezier(0.77, 0, 0.175, 1),
		transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
	transition: background-color 0.5s cubic-bezier(0.77, 0, 0.175, 1), box-shadow 0.5s cubic-bezier(0.77, 0, 0.175, 1),
		transform 0.6s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
	z-index: 99;
}
.slide_now {
	box-shadow: none;
	-webkit-transform: translateY(-80px);
	transform: translateY(-80px);
}
.container {
	max-width: 1440px;
	margin: auto;
}
.navbar {
	align-items: center;
	display: flex;
	height: 80px;
	position: relative;
}
.logo-wrapper {
	position: relative;
}
.site-logo {
	position: relative;
	overflow: hidden;
	float: left;
	max-height: 50px;
}

.site-logo:before {
	/**根据logo外div样式名称修改before前名称**/
	content: "";
	position: absolute;
	left: -665px; /**第一个数字参数控制扫光速度，数字越大越慢**/
	top: -460px;
	width: 200px;
	height: 10px; /**光标的宽度，可根据实际调整**/
	background-color: rgba(255, 255, 255, 0.5);
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	transform: rotate(-45deg);
	-webkit-animation: searchLights 1s ease-in 1s infinite;
	-o-animation: searchLights 1s ease-in 1s infinite;
	animation: searchLights 1s ease-in 1s infinite; /**第一个数字参数控制扫光速度，数字越大越慢**/
}
@-webkit-keyframes searchLights {
	0% {
		left: -100px;
		top: 0;
	}
	to {
		left: 120px;
		top: 100px;
	}
}
@-o-keyframes searchLights {
	0% {
		left: -100px;
		top: 0;
	}
	to {
		left: 120px;
		top: 100px;
	}
}
@-moz-keyframes searchLights {
	0% {
		left: -100px;
		top: 0;
	}
	to {
		left: 120px;
		top: 100px;
	}
}
@keyframes searchLights {
	0% {
		left: -100px;
		top: 0;
	}
	to {
		left: 120px;
		top: 100px;
	}
}
.logo:not(.text) {
	transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
.logo {
	margin-right: 12px;
	max-width: 120px;
	height: auto;
}
.sep {
	display: flex;
	height: 100%;
	margin: 0 20px;
	width: 1px;
}
.sep:after {
	background-color: #e6e6e6;
	content: "";
	height: 50%;
	margin: auto;
	transition: background-color 0.5s cubic-bezier(0.77, 0, 0.175, 1);
	width: 100%;
}
.u-plain-list {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
.navbar .menu-item {
	display: inline-block;
	position: relative;
}
.nav-icon {
	font-size: 12px;
}
.navbar .nav-list > .menu-item > a {
	font-size: 14px;
	line-height: 81px;
	margin: 0 12px;
	transition: color 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
.navbar .menu-item > a {
	display: block;
	font-weight: 700;
	letter-spacing: 0.2px;
	text-transform: uppercase;
}
.navbar .menu-item.menu-item-has-children > a:after {
	color: #aaa;
	content: "";
	font-family: "Material Design Icons";
	font-size: 13px;
	font-weight: 400;
	margin-left: 5px;
	transition: color 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
.navbar .menu-item:hover > .sub-menu {
	opacity: 1;
	-webkit-transform: translateY(0);
	transform: translateY(0);
	visibility: visible;
}
.navbar .sub-menu {
	background-color: #fff;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.07);
	list-style-type: none;
	margin: -1px 0 0 -18px;
	min-width: 220px;
	opacity: 0;
	padding: 20px 0;
	position: absolute;
	top: 100%;
	-webkit-transform: translateY(5px);
	transform: translateY(5px);
	transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
	visibility: hidden;
	z-index: 80;
}
.navbar .sub-menu .menu-item {
	display: block;
}
.navbar .sub-menu .menu-item > a {
	align-items: center;
	display: flex;
	font-size: 11px;
	line-height: 18px;
	padding: 9px 30px;
	transition: -webkit-transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
	transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
	transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}
.navbar .sub-menu .menu-item > a:hover {
	opacity: 1;
	-webkit-transform: translateX(5px);
	transform: translateX(5px);
}

.navbar .actions {
	display: flex;
	flex-grow: 1;
	justify-content: flex-end;
}
.navbar .navbar-button,
.off-canvas .canvas-close {
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	font-size: 16px;
	height: 30px;
	justify-content: center;
	width: 30px;
	margin-right: 10px;
	background-color: #f6f6f6;
	border: 0;
	color: #34495e;
}
.navbar .login-btn {
	align-items: center;
	border-radius: 4px;
	color: #ffffff;
	cursor: pointer;
	display: flex;
	font-size: 14px;
	height: 30px;
	justify-content: center;
	width: 80px;
	margin-right: 10px;
	background-color: #f6f6f6;
	border: 0;
	color: #34495e;
}
.navbar .navbar-button {
	background-color: #f7f7ff;
	border: 1px solid #f7f7ff;
	color: #1890ff;
	background-image: none;
	-webkit-animation: none;
}
.main-search {
	bottom: 0;
	display: none;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
}
.main-search .search-form {
	height: 100%;
}
form.inline {
	position: relative;
}
form.inline .inline-field {
	margin-bottom: 0;
	padding-right: 20px;
	text-overflow: ellipsis;
	outline: none;
}
.main-search .search-field {
	background-color: transparent;
	font-size: 20px;
	font-weight: 700;
	height: 100%;
	margin: 0;
	padding: 0;
	text-align: center;
	text-transform: uppercase;
	border: 0;
}
form.inline button[type="submit"] {
	background-color: transparent;
	border: 0;
	color: #1a1a1a;
	font-size: 16px;
	height: 30px;
	line-height: 30px;
	margin-top: -15px;
	padding: 0;
	position: absolute;
	right: 0;
	text-align: center;
	top: 50%;
	width: 30px;
}
.main-search .search-submit {
	display: none;
}
/*
*链接按钮缩放效果
*/
.navbar .user-pbtn:hover {
	transform: scale(0.95);
	box-shadow: 0 0px 0px rgba(32, 160, 255, 0.3);
	color: blue !important;
}
.navbar-button:hover {
	transform: scale(0.95);
	box-shadow: 0 0px 0px rgba(32, 160, 255, 0.3);
}
.button:hover {
	transform: scale(0.95);
	box-shadow: 0 0px 0px rgba(32, 160, 255, 0.3);
	color: #fff !important;
}
.btn--block:hover {
	transform: scale(0.95);
	box-shadow: 0 0px 0px rgba(32, 160, 255, 0.3);
	color: #fff !important;
}
.burger:hover {
	transform: scale(0.95);
	box-shadow: 0 0px 0px rgba(32, 160, 255, 0.3);
}

.author-name span {
	font-size: 12px;
	color: #fff;
	padding: 2px 6px;
	margin-left: 5px;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	position: relative;
}

.label-warning {
	transition: background-color 0.5s cubic-bezier(0.77, 0, 0.175, 1), border-color 0.5s cubic-bezier(0.77, 0, 0.175, 1);
	width: 100px;
	margin-right: 10px;
	color: #fff;
	background-image: -webkit-linear-gradient(45deg, #f35626, #feab3a);
	-webkit-animation: hue 6s infinite linear;
}

.label-default {
	background-color: #f3f7ff;
	color: #5f9bf8;
	border: 1px dotted #5f9bf8;
	border-radius: 16px;
	padding: 0px 11px;
}

.rollbar .rollbar-item {
}

.widget-comments small {
	background-color: #03a9f4;
	width: 100%;
	display: block;
	border-radius: 4px;
	padding: 4px 10px;
	position: relative;
	font-size: 14px;
	color: #fff;
}
.hidden {
	display: none;
}
</style>
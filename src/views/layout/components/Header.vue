<!-- 头部 -->
<template>
	<div>
		<header :class="{ slide_now: headerShow }" class="site_header" ref="siteHeader">
			<div class="container">
				<div class="navbar">
					<div class="logo-wrapper" v-if="!searchShow">
						<a class="site-logo" href>
							<img class="logo regular tap-logo" src="/images/header/logo-light.png" />
						</a>
					</div>
					<div class="sep" v-if="!Mobile"></div>
					<!-- 导航栏 -->
					<nav v-if="!Mobile" v-show="!searchShow">
						<ul id="menu" class="nav-list u-plain-list">
							<li class="menu-item" v-for="menu in $router.options.routes" v-if="menu.children && menu.path !== '/login'">
								<router-link :to="menu.path">
									{{ menu.meta.title }}
									<i class="material-icons nav-icon" v-if="menu.meta.submenu">keyboard_arrow_down</i>
								</router-link>
								<ul class="sub-menu" v-if="menu.meta.submenu && menu.path !== '/login'">
									<li class="menu-item" v-for="(submenu, index) in menu.children">
										<router-link :to="submenu.path">{{submenu.meta.title }}</router-link>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
					<div class="actions" v-if="!searchShow">
						<div class="login-btn navbar-button">
							<i class="material-icons">account_circle</i>
							<a href="#/user">登录</a>
							<!-- <span>登录</span> -->
						</div>
						<div class="search-open navbar-button" @click="showSearch(true)">
							<i class="material-icons">search</i>
						</div>
						<div class="burger navbar-button" @click="showSideBar(true)">
							<i class="material-icons">menu</i>
						</div>
					</div>
					<div class="main-search" v-if="searchShow">
						<form class="search-form inline">
							<input type="search" class="search-field inline-field" placeholder="输入关键词，回车..." autocomplete="off" value name="s" required="required" />
						</form>
						<div class="search-close navbar-button" @click="showSearch(false)">
							<i class="icon-scale material-icons">close</i>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
// import { meanu } from '@/api/common'
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      list: [],
      headerShow: false,
      searchShow: false,
    };
  },
  computed: {
    ...mapGetters(["Mobile", "token", "mini"])
  },
  created () {
    // console.log(this.$store.getters.Mobile)
  },
  mounted () {
    // handleScroll为页面滚动的监听回调
    window.addEventListener("scroll", this.handleScroll);
  },
  /**
   * 在destroyed回调中移除监听
   */
  destroyed () {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    showSideBar (value) {
      this.$store.dispatch('ShowSide', value)
    },
    showSearch (value) {
      this.searchShow = value;
      // this.$store.dispatch("Mobile", value);
    },
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
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 判断页面滚动的距离是否大于吸顶元素的位置
      this.headerShow = scrollTop > this.offsetHeight;
    }

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
  components: {}
};
</script>

<style scoped>
.site_header {
	position: fixed !important;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: 99;
	background-color: #fff;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.07);
	transition: background-color 0.5s cubic-bezier(0.77, 0, 0.175, 1), box-shadow 0.5s cubic-bezier(0.77, 0, 0.175, 1), transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
	transition: background-color 0.5s cubic-bezier(0.77, 0, 0.175, 1), box-shadow 0.5s cubic-bezier(0.77, 0, 0.175, 1), transform 0.6s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
	backface-visibility: hidden;
}
.slide_now {
	box-shadow: none;
	transform: translateY(-80px);
}
.container {
	margin: auto;
	max-width: 90pc;
}
.navbar {
	display: flex;
	height: 5pc;
	align-items: center;
}
.logo-wrapper,
.navbar,
.site-logo {
	position: relative;
}
.site-logo {
	float: left;
	overflow: hidden;
	max-height: 50px;
	margin-left: 20%;
}
.site-logo:before {
	position: absolute;
	top: -460px;
	left: -665px;
	width: 200px;
	height: 10px;
	background-color: hsla(0, 0%, 100%, 0.5);
	content: "";
	transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	animation: searchLights 1s ease-in 1s infinite;
}
@keyframes searchLights {
	0% {
		top: 0;
		left: -75pt;
	}
	to {
		top: 75pt;
		left: 90pt;
	}
}
.logo:not(.text) {
	transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
.logo {
	margin-right: 9pt;
	height: auto;
	max-width: 50px;
}
.sep {
	display: flex;
	margin: 0 20px;
	width: 1px;
	height: 100%;
}
.sep:after {
	margin: auto;
	width: 100%;
	height: 50%;
	background-color: #e6e6e6;
	content: "";
	transition: background-color 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
.u-plain-list {
	margin: 0;
	padding: 0;
	list-style-type: none;
}
.menu-item {
	position: relative;
	display: inline-block;
}
.nav-icon {
	font-size: 9pt;
}
.nav-list > .menu-item > a {
	margin: 0 9pt;
	font-size: 14px;
	line-height: 81px;
	transition: color 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
.menu-item > a {
	display: block;
	text-transform: uppercase;
	letter-spacing: 0.2px;
	font-weight: 700;
}
.menu-item.menu-item-has-children > a:after {
	margin-left: 5px;
	color: #aaa;
	content: "";
	font-weight: 400;
	font-size: 13px;
	font-family: Material Design Icons;
	transition: color 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
.menu-item:hover > .sub-menu {
	visibility: visible;
	opacity: 1;
	transform: translateY(0);
}
.sub-menu {
	position: absolute;
	top: 100%;
	z-index: 80;
	visibility: hidden;
	margin: -1px 0 0 -18px;
	padding: 20px 0;
	min-width: 220px;
	background-color: #fff;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.07);
	list-style-type: none;
	opacity: 0;
	transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
	transform: translateY(5px);
}
.sub-menu .menu-item {
	display: block;
}
.sub-menu .menu-item > a {
	display: flex;
	padding: 9px 30px;
	font-size: 11px;
	line-height: 18px;
	transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
	transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
	align-items: center;
}
.sub-menu .menu-item > a:hover {
	opacity: 1;
	transform: translateX(5px);
}
.actions {
	display: flex;
	flex-grow: 1;
	justify-content: flex-end;
}
.navbar-button {
	display: flex;
	margin-right: 10px;
	width: 30px;
	height: 30px;
	border: 0;
	border-radius: 50%;
	background-color: #f6f6f6;
	color: #34495e;
	font-size: 1pc;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	transition: transform 0.4s ease-out;
}

.main-search .search-close {
	position: absolute;
	top: 50%;
	right: 0;
	margin-top: -15px;
	font-size: 15px;
}
.main-search .search-close:hover {
	box-shadow: 0 0 10px #fff;
	transform: rotateZ(360deg);
	-webkit-transform: rotateZ(360deg);
}
.login-btn {
	display: flex;
	margin-right: 10px;
	width: 5pc;
	height: 30px;
	border: 0;
	border-radius: 4px;
	background-color: #f6f6f6;
	color: #fff;
	color: #34495e;
	font-size: 14px;
	cursor: pointer;
	align-items: center;
	justify-content: center;
}
.main-search {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
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
	width: 100%;
	outline: 0;
	text-overflow: ellipsis;
	transition: border-color cubic-bezier(0.77, 0, 0.175, 1);
}
.main-search .search-field {
	margin: 0;
	height: 100%;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 20px;
}
.main-search .search-field,
form.inline button[type="submit"] {
	padding: 0;
	border: 0;
	background-color: transparent;
	text-align: center;
}
form.inline button[type="submit"] {
	position: absolute;
	top: 50%;
	right: 0;
	margin-top: -15px;
	width: 30px;
	height: 30px;
	color: #1a1a1a;
	font-size: 1pc;
	line-height: 30px;
}

.navbar-button {
	border: 1px solid #f7f7ff;
	background-color: #f7f7ff;
	background-image: none;
	color: #1890ff;
}

.navbar-button:hover {
	box-shadow: 0 0 0 rgba(32, 160, 255, 0.3);
	transform: scale(0.95);
}

.button:hover {
	color: #fff !important;
}

.burger:hover,
.button:hover {
	box-shadow: 0 0 0 rgba(32, 160, 255, 0.3);
	transform: scale(0.95);
}

.hidden {
	display: none;
}
</style>

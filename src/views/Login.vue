<!--  -->
<template>
	<div id="swal2-content" class="swal2-content fade">
		<div class="register-login-modal" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs">
						<li class="active">
							<a href="#login" data-toggle="login">登录</a>
						</li>
						<li>
							<a href="#signup" data-toggle="signup">注册</a>
						</li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content">
						<div class="tab-pane fade in active" id="login">
							<div class="signup-form-container text-center">
								<form class="mb-0">
									<div class="open-oauth text-center">
										<a href="https://www.microeco.net/oauth/qq" class="btn btn-qq">
											<i class="fa fa-qq"></i>
										</a>
									</div>
									<div class="or-text">
										<span>or</span>
									</div>
									<div class="form-group">
										<input type="text" class="form-control" name="username" placeholder="*用户名或邮箱" />
									</div>
									<div class="form-group">
										<input type="password" class="form-control" name="password" placeholder="*密码" />
									</div>
									<button type="button" class="go-login btn btn--primary btn--block">
										<i class="fa fa-bullseye"></i>
										安全登录
									</button>
									<a href="wp-login.php?action=lostpassword" target="_bank" class="forget-password">忘记密码?</a>
								</form>
								<!-- form  end -->
							</div>
							<!-- .signup-form end -->
						</div>
						<div class="tab-pane fade in" id="signup">
							<form class="mb-0">
								<div class="open-oauth text-center">
									<a href="https://www.microeco.net/oauth/qq" class="btn btn-qq">
										<i class="fa fa-qq"></i>
									</a>
								</div>
								<div class="or-text">
									<span>or</span>
								</div>
								<div class="form-group">
									<input type="text" class="form-control" name="user_name" placeholder="输入英文用户名" />
								</div>
								<!-- .form-group end -->
								<div class="form-group">
									<input type="email" class="form-control" name="user_email" placeholder="绑定邮箱" />
								</div>
								<!-- .form-group end -->
								<div class="form-group">
									<input type="password" class="form-control" name="user_pass" placeholder="密码最小长度为6" />
								</div>
								<div class="form-group">
									<input type="password" class="form-control" name="user_pass2" placeholder="再次输入密码" />
								</div>
								<div class="form-group">
									<div class="input-group">
										<input type="text" class="form-control" name="captcha" placeholder="邮箱验证码" />
										<span class="input-group-btn">
											<button class="go-captcha_email btn btn--secondary" type="button">发送验证码</button>
										</span>
									</div>
								</div>
								<button type="button" class="go-register btn btn--primary btn--block">
									<i class="fa fa-bullseye"></i>
									立即注册
								</button>
							</form>
							<!-- form  end -->
						</div>
					</div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>
		<!-- /.modal -->
	</div>
</template>

<script>
// import { query } from '@/api/index'
export default {
  data () {
    return {
      select1: 3,
      options1: [
        { text: 'IT', value: 0 },
        { text: 'Blade Runner', value: 2 },
        { text: 'Thor Ragnarok', value: 3 },
      ],
      token: '',
      popupActivo2: true,
    }
  },

  mounted () {

  },
  methods: {
    randomCenter () {
      function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`
      this.$vs.notify({ text: "fdasf", color: color, position: 'top-center' })
    },
    onSubmit () {
      this.$store.dispatch("Authentication", this.token)
      // let params = { userName: 'admin', password: '123456' }
      // query(params).then(res => {
      //   console.log(res, '这是响应的结果')
      // })
    }
  },
  components: {

  },
}
</script>

<style scoped>
.swal2-content {
	z-index: 1;
	margin: 0;
	padding: 0;
	color: #545454;
	text-align: center;
	word-wrap: break-word;
	font-weight: 300;
	font-size: 1.125em;
	line-height: normal;
	justify-content: center;
}

.register-login-modal .modal-content {
	position: relative;
	border: none;
	background-color: transparent;
	box-shadow: none;
}

.modal-body {
	position: relative;
	padding: 15px;
}

.register-login-modal .nav-tabs {
	margin: 0;
	padding: 10px;
	padding-left: 0;
	border-bottom: none;
	list-style: none;
	text-align: center;
}

.register-login-modal .nav-tabs > li {
	float: none;
	display: inline-block;
}

.register-login-modal .nav-tabs > li.active > a,
.register-login-modal .nav-tabs > li.active > a:focus,
.register-login-modal .nav-tabs > li.active > a:hover,
.register-login-modal .nav-tabs > li > a:active,
.register-login-modal .nav-tabs > li > a:focus,
.register-login-modal .nav-tabs > li > a:hover {
	border: none;
	background-color: transparent;
	opacity: 1;
}

.register-login-modal .nav-tabs > li > a {
	padding: 0 10px;
	border: none;
	text-transform: capitalize;
	font-weight: 500;
	font-weight: 600;
	font-size: 15px;
	opacity: 0.3;
}

.swal2-content a {
	color: #007fff;
}

.register-login-modal .tab-content {
	padding: 20px;
	border-radius: 4px;
	background-color: #fff;
}

.fade.in {
	opacity: 1;
}

.tab-content > .tab-pane {
	display: none;
}

.fade {
	opacity: 0;
	transition: opacity 0.15s linear;
}

.text-center {
	text-align: center;
}

.mb-0 {
	margin-bottom: 0 !important;
}

.register-login-modal .open-oauth {
	margin-bottom: 20px;
}

.register-login-modal .open-oauth .btn-qq {
	background-color: #1296db;
}

.register-login-modal .open-oauth .btn {
	position: relative;
	display: inline-block;
	margin: 0;
	margin-right: 10px;
	margin-left: 10px;
	padding: 0;
	width: 2pc;
	height: 2pc;
	-webkit-border-radius: 50%;
	-moz-border-radius: 2px;
	color: #fff !important;
	text-align: center;
	letter-spacing: 0;
	font-weight: 400;
	font-size: 14px;
	line-height: 2pc;
	cursor: pointer;
}

.register-login-modal .or-text {
	position: relative;
	margin-bottom: 25px;
	text-align: center;
	line-height: 1;
}

.register-login-modal .or-text span {
	position: relative;
	z-index: 2;
	display: inline-block;
	padding: 0 8px;
	background-color: #fff;
}

.register-login-modal .or-text:after {
	position: absolute;
	top: 9px;
	left: 0;
	width: 100%;
	height: 1px;
	background-color: #e5e5e5;
	content: "";
}

.form-group {
	position: relative;
	margin-bottom: 30px;
}

input[type="email"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="tel"],
input[type="text"],
textarea {
	margin-bottom: 10px;
	padding: 0 9pt;
	width: 100%;
	border: 0;
	border: 1px solid #f1f1f1;
	border-radius: 0;
	font-family: Lato, sans-serif;
	line-height: 36px;
	transition: border-color cubic-bezier(0.77, 0, 0.175, 1);
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
	-webkit-appearance: button;
}

.btn--primary,
.button {
	background: linear-gradient(-125deg, #0295f9 0, #2f49fd 100%);
	box-shadow: 0 8px 10px rgba(32, 160, 255, 0.3);
}

.btn--block {
	width: 100% !important;
}

.btn--primary {
	background-color: #34495e;
	color: #fff;
}

.btn {
	position: relative;
	display: inline-block;
	padding: 0 18px;
	outline: 0;
	border: none;
	border-radius: 4px;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 600;
	font-size: 11px;
	line-height: 36px;
	cursor: pointer;
}

.register-login-modal .forget-password {
	display: block;
	margin-top: 20px;
	color: #aaa;
	text-align: center;
	text-decoration: underline;
	font-size: 13px;
}

.tab-content > .active {
	display: block;
}

.register-login-modal .form-group {
	margin-bottom: 15px;
}

.input-group {
	position: relative;
	display: table;
	border-collapse: separate;
}

.input-group .form-control {
	position: relative;
	z-index: 2;
	float: left;
	margin-bottom: 0;
	width: 100%;
}

.input-group-btn {
	display: table-cell;
	width: 1%;
	vertical-align: middle;
	white-space: nowrap;
}

.btn--secondary {
	background-color: #2196f3;
	color: #fff;
}
</style>
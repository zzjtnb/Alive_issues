<!--  -->
<template>
	<div class="tab-pane fade in active" id="login" v-show="login">
		<div class="signup-form-container text-center">
			<form class="mb-0" :model="tokenForm" ref="tokenForm">
				<userNav />
				<div class="form-group">
					<input type="text" class="form-control" name="username" placeholder="*用户名或邮箱" />
				</div>
				<div class="form-group">
					<input type="password" class="form-control" name="password" placeholder="*密码" v-model="tokenForm.token" />
				</div>
				<button type="button" class="btn btn--primary btn--block" @click="onSubmit">
					<i class="fa fa-bullseye"></i> 安全登录
				</button>
				<a href="wp-login.php?action=lostpassword" target="_bank" class="forget-password">忘记密码?</a>
			</form>
		</div>
	</div>
</template>

<script>
// import { query } from '@/api/index'
import userNav from './userNav';
export default {
  /*   // props的对象形式
    props: {
      login: {
        type: Boolean,
        default: true
      }
    }, */
  props: ['login'],
  data () {
    return {
      tokenForm: {
        token: ""
      }
    }
  },
  mounted () {

  },
  methods: {
    onSubmit () {
      this.$store.dispatch("Authentication", this.tokenForm.token)
    }
  },
  components: {
    userNav
  },
}
</script>

<style scoped>
.forget-password {
	margin-top: 20px;
	display: block;
	text-align: center;
	text-decoration: underline;
	color: #aaaaaa;
	font-size: 13px;
}
</style>
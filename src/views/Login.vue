<!--  -->
<template>
	<div class="centerx">
		<vs-button @click="popupActivo2=true" color="primary" type="filled">Open Popup</vs-button>
		<vs-popup classContent="popup-example" title="Lorem ipsum dolor sit amet" :active.sync="popupActivo2">
			<vs-input class="inputx" placeholder="Placeholder" v-model="token" />
			<vs-button @click="onSubmit" color="primary" type="filled">登录</vs-button>
		</vs-popup>
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
.popup-example .vs-input {
	float: left;
	width: 50%;
	margin: 10px;
	margin-top: 5px;
}
</style>
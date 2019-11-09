<!--  -->
<template>
	<div>
		<div class="box hidden-xs">
			<div class="ly">
				<a href="javascript:void(0)" onclick="_toggle('m1')">
					<img src="/images/Heroes/picture/pic.jpg" width="71" height="77" />
				</a>
			</div>
		</div>
		<div class="bgimg">
			<div class="container">
				<div class="chang_b">
					<div class="xiahua" id="m2" v-show="xianhua">
						<img src="/images/Heroes/picture/pic1.png" width="525" height="148" />
					</div>
					<div class="gongan">
						<div class="lazu" id="m3" v-show="lazhu">
							<img id="m3_img" src="/images/Heroes/picture/lazhu.png" width="155" height="123" />
							<div id="m3_swf_container"></div>
						</div>
						<div class="jinjiu" id="m4" v-show="jinjiu">
							<img src="/images/Heroes/picture/pic8.png" width="155" height="123" />
						</div>
					</div>
					<div class="jinli" id="m5" v-show="jinli">
						<img id="m5_img" src="/images/Heroes/picture/jingli.gif" width="102" height="155" />
						<div id="m5_swf_container"></div>
					</div>
					<div class="jugong" id="m6" v-show="jugong">
						<img id="m6_img" src="/images/Heroes/picture/jugong.gif" width="102" height="155" />
						<div id="m6_swf_container"></div>
					</div>
					<div class="coi_p" id="jidian_op_tips_container" v-show="tips"></div>
				</div>
				<div id="musicbox" class="yin">
					<audio id="audio" loop="loop">
						<source src="/music/ylzg.mp3" type="audio/mp3" />
					</audio>
					<span id="MusicCtl" :class="{ muted : isMuted }" @click="playMusic"></span>
				</div>

				<div class="nav_l">
					<ul v-for="item in dataNUm">
						<li>
							<a @click="show('m2',1)">献 花</a>
							<span id="xianhua_num">{{item.xianhua_num}}</span>
						</li>
						<li class="io">
							<a @click="show('m3',1)">点 烛</a>
							<span id="dianzhu_num">{{item.dianzhu_num}}</span>
						</li>
						<li class="io1">
							<a @click="show('m4',1)">敬 酒</a>
							<span id="jingjiu_num">{{item.jingjiu_num}}</span>
						</li>
						<li class="io2">
							<a @click="show('m5',1)">敬 礼</a>
							<span id="jingli_num">{{item.jingli_num}}</span>
						</li>
						<li class="io3">
							<a @click="show('m6',1)">鞠 躬</a>
							<span id="jugong_num">{{item.jugong_num}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getRecode, editRecode } from '@/api/common'
export default {
  data () {
    return {
      isMuted: true,
      xianhua: true,
      lazhu: true,
      jinjiu: true,
      jinli: true,
      jugong: true,
      tips: true,
      dataNUm: []
    }
  },
  created () {

  },
  mounted () {
    console.log(this.isMuted)
  },
  methods: {
    playMusic () {
      this.isMuted = !this.isMuted

      console.log(this.isMuted)
      var audio = document.getElementById("audio");
      if (this.isMuted != false) {
        //停止
        audio.pause();
        audio.load();
      } else {
        //播放(继续播放)
        audio.play();
      }

    }
  },
  components: {

  },
}
</script>

<style scoped>
@import "/css/global.css"; /*引入公共样式*/
.box {
	width: 100%;
	height: auto;
	background: url("/images/Heroes/bg_1.jpg") no-repeat center top;
	margin: 0 auto;
	overflow: hidden;
}
.ly {
	width: 1000px;
	height: 77px;
	margin: 0 auto;
	text-align: right;
}
.ly img {
	margin-right: 24px;
	float: right;
}
.bgimg {
	background: url("/images/Heroes//wmls-bg.jpg") no-repeat scroll center 0;
	width: 100%;
	height: 773px;
	position: relative;
	z-index: 0;
}
.container {
	width: 682px;
	height: auto;
	position: absolute;
	bottom: 1%;
	left: 50%;
	margin-left: -341px;
}
.chang_b {
	width: 682px;
	height: 242px;
	position: relative;
}
.xiahua {
	width: 525px;
	height: 128px;
	top: 0;
	margin: 10px auto;
	padding: 0 8px 0 0;
}
img {
	max-width: 100%;
	height: auto;
	border: none;
	box-sizing: border-box;
}
.gongan {
	width: 155px;
	height: 123px;
	top: 0;
	margin: 0 auto;
	padding: 0 8px 0 0;
}
.lazu {
	width: 155px;
	height: 100px;
	top: 60px;
	position: absolute;
}
.jinjiu {
	width: 155px;
	height: 57px;
	position: absolute;
	top: 60px;
}
.jinli {
	width: 99px;
	height: 220px;
	position: absolute;
	top: 60px;
	left: 50%;
	margin: 0 auto;
	margin-left: -55px;
}
.jugong {
	width: 110px;
	height: 220px;
	margin: 0 auto;
	position: absolute;
	top: 60px;
	left: 50%;
	margin-left: -55px;
}
.coi_p {
	bottom: 50%;
	width: 50%;
	height: 18%;
	margin: 0 auto;
	background: url("/images/Heroes//bg7.png") no-repeat;
	line-height: 31px;
	text-align: center;
	color: #fff;
	font-size: 14px;
	position: absolute;
	left: 50%;
	margin-left: -76px;
	top: 190px;
}
.yin {
	position: absolute;
	right: 0;
	bottom: 22%;
	float: right;
	width: 69px;
	height: 69px;
}
#MusicCtl {
	display: block;
	width: 60px;
	height: 60px;
	cursor: pointer;
	background: url(/images/Heroes/player.png) 0 0;
}

#MusicCtl.muted {
	background: url("/images/Heroes/player.png") -60px 0;
}
.nav_l {
	width: 679px;
	height: 69px;
	margin-top: 40px;
	background: url("/images/Heroes/bg1.png") no-repeat;
}
.nav_l li {
	float: left;
	width: 68px;
	height: 56px;
	border-right: 1px solid #555557;
	background: url("/images/Heroes/bg2.png") no-repeat 22px 9px;
	padding: 10px 0 0 66px;
	line-height: 22px;
	color: #c70000;
	font-size: 13px;
	list-style: none;
}
.nav_l li a {
	font-family: "Microsoft yahei";
	color: #010101;
	font-size: 16px;
	display: block;
	width: 68px;
}
.nav_l li.io {
	float: left;
	width: 68px;
	height: 56px;
	border-right: 1px solid #555557;
	background: url("/images/Heroes/bg3.png") no-repeat 22px 9px;
	padding: 10px 0 0 66px;
	line-height: 22px;
	color: #c70000;
	font-size: 13px;
}
.nav_l li.io1 {
	float: left;
	width: 68px;
	height: 56px;
	border-right: 1px solid #555557;
	background: url("/images/Heroes//bg41.png") no-repeat 22px 20px;
	padding: 10px 0 0 66px;
	line-height: 22px;
	color: #c70000;
	font-size: 13px;
}
.nav_l li.io2 {
	float: left;
	width: 68px;
	height: 56px;
	border-right: 1px solid #555557;
	background: url("/images/Heroes//bg5.png") no-repeat 34px 8px;
	padding: 10px 0 0 66px;
	line-height: 22px;
	color: #c70000;
	font-size: 13px;
}
.nav_l li.io3 {
	float: left;
	width: 68px;
	height: 56px;
	border-right: none;
	background: url("/images/Heroes//bg6.png") no-repeat 27px 7px;
	padding: 10px 0 0 66px;
	line-height: 22px;
	color: #c70000;
	font-size: 13px;
}
</style>
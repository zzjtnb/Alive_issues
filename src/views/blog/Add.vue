<template>
	<div style="min-height: 600px">
		<el-card shadow="never" style="margin-bottom: 20px">
			<el-form ref="form" :model="form" label-width="80px" :rules="ruleValidate">
				<el-form-item label="标题" prop="title">
					<el-input v-model="form.title"></el-input>
				</el-form-item>
				<el-form-item label="标签" prop="labels">
					<el-tag :key="tag" v-for="tag in this.form.labels" closable :disable-transitions="false" @close="removeLabels(tag)" effect="dark">{{tag}}</el-tag>
					<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="addLabels" @blur="addLabels"></el-input>
					<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
				</el-form-item>
				<el-form-item label="正文" prop="body">
					<mavon-editor @imgAdd="imgAdd" style="max-height: 500px" ref="md" v-model="form.body" :subfield="false" :toolbars="mavonEditorToolbars" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit" :loading="submitButton.loading" :disabled="submitButton.disabled">发表</el-button>
					<el-button @click="$router.push('/user/blog/main')">返回</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { create } from '@/api/issue'
export default {
  data () {
    return {
      inputVisible: false,
      inputValue: '',
      label: '',
      form: {
        title: "",
        labels: [],
        body: "",
      },
      ruleValidate: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { type: 'string', max: 64, message: '标题长度不大于64字符', trigger: 'change' }
        ],
        labels: [
          { required: true, message: '请输入博客标签', trigger: 'blur' }
        ],
        body: [
          { required: true, message: '请输博客入正文', trigger: 'blur' }
        ],
      },
      submitButton: {
        loading: false,
        disabled: false
      },
      mavonEditorToolbars: {
        bold: true, // 粗体 
        italic: true, // 斜体 
        header: true, // 标题 
        underline: true, // 下划线 
        strikethrough: true, // 中划线 
        mark: true, // 标记 
        superscript: true, // 上角标 
        subscript: true, // 下角标 
        quote: true, // 引用 
        ol: true, // 有序列表 
        ul: true, // 无序列表 
        link: true, // 链接 
        imagelink: true, // 图片链接 
        code: true, // code 
        table: true, // 表格 
        // fullscreen: true, // 全屏编辑 
        // readmodel: true, // 沉浸式阅读 
        htmlcode: true, // 展示html源码 
        // help: true, // 帮助 /* 1.3.5 */ 
        // undo: true, // 上一步 
        // redo: true, // 下一步 
        trash: true, // 清空 
        // save: true, // 保存（触发events中的save事件） /* 1.4.2 */ 
        // navigation: true, // 导航目录 /* 2.1.8 */ 
        alignleft: true, // 左对齐 
        aligncenter: true, // 居中 
        alignright: true, // 右对齐 /* 2.2.1 */ 
        // subfield: true, // 单双栏模式 
        preview: true, // 预览
      },
    }
  },
  computed: {
    ...mapGetters([
      'token',
    ]),
  },
  methods: {
    removeLabels (tag) {
      this.form.labels.splice(this.form.labels.indexOf(tag), 1);
    },

    showInput () {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    addLabels () {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.form.labels.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    imgAdd (pos, file) {
      this.$refs.md.$img2Url(pos, file.miniurl)
    },
    onSubmit () {
      if (this.token) {
        this.publish()
      }
    },
    publish () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.submitButton.loading = true
          this.submitButton.disabled = true
          create(this.form).then((res) => {
            let result = res.data
            console.log(res);
            // console.log(JSON.stringify(result))
            if (res.status == '201') {
              this.$message({
                message: '发表成功',
                type: 'success'
              })
            }
            this.$router.push("/blog/details/" + result.number)
          }).then(() => {
            this.submitButton.loading = false
            this.submitButton.disabled = false
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.el-tag + .el-tag {
	margin-left: 10px;
}
.button-new-tag {
	margin-left: 10px;
	height: 32px;
	line-height: 30px;
	padding-top: 0;
	padding-bottom: 0;
}
.input-new-tag {
	width: 90px;
	margin-left: 10px;
	vertical-align: bottom;
}
</style>
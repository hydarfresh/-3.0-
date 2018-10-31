<template>
	<div>

		<div style="background-color: white;height: 60px;">
			<span style="line-height: 60px;margin-left: 20px;font-size:18px;color:black">资讯管理&nbsp;/&nbsp;资讯列表</span>
			<el-button type="primary" style="float: right;margin: 10px 30px 10px 0;" @click="dialogFormVisible = true">+&nbsp;&nbsp;添加资源</el-button>
			<!-- 上传 -->
			<el-dialog title="添加资源" :visible.sync="dialogFormVisible">
				<div class="addalbum_box">
					<el-form :model="form" label-width="100px">
						<el-form-item label="排序号:" >
							<el-input v-model="form.name" placeholder="请输入排序号(数值越大越靠前)" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="资源名称:">
							<el-input placeholder="请输入资源名称" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="资源源文件:">
							<el-upload
								class="upload-demo"
								ref="upload"
								action="https://jsonplaceholder.typicode.com/posts/"
								:on-preview="handlePreview"
								:on-remove="handleRemove"
								:file-list="fileList"
								:auto-upload="false">
								<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
							</el-upload>
						</el-form-item>
						<el-form-item label="所属分类:" >
							<el-input v-model="form.name" placeholder="请选择所属分类" style="width:80%"></el-input>
						</el-form-item>
					</el-form>
				</div>
				<div slot="footer" class="dialog-footer" style="margin-top:-20px;">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
				</div>
			</el-dialog>

		</div>

		<div class="cent">
			<el-table :data="tableData" style="width: 100%" stripe>
				<el-table-column prop="date" label="排序号" width="180">
				</el-table-column>
				<el-table-column prop="name" label="资源名称"></el-table-column>
				<el-table-column prop="name" label="资源ID" width="180">
				</el-table-column>
				<el-table-column prop="class" label="所属分类">
				</el-table-column>
				<el-table-column prop="address" label="添加时间">
				</el-table-column>
				<el-table-column prop="" label="预览">
					<template slot-scope="scope">
						<el-button type="text" size="small" >预览图片</el-button>
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="dialogVisible3 = true">删除</el-button>
						<span style="color:gray">|</span>
						<el-button type="text" size="small" @click="dialogFormVisible2 = true">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- 编辑 -->
			<el-dialog title="编辑分类" :visible.sync="dialogFormVisible2">
				<div class="addalbum_box">
					<el-form :model="form" label-width="100px">
						<el-form-item label="排序号:" >
							<el-input v-model="form.name" placeholder="请输入排序号(数值越大越靠前)" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="资源名称:">
							<el-input placeholder="请输入资源名称" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="资源源文件:">
							<el-upload
								class="upload-demo"
								ref="upload"
								action="https://jsonplaceholder.typicode.com/posts/"
								:on-preview="handlePreview"
								:on-remove="handleRemove"
								:file-list="fileList"
								:auto-upload="false">
								<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
							</el-upload>
						</el-form-item>
						<el-form-item label="所属分类:" >
							<el-input v-model="form.name" placeholder="请选择所属分类" style="width:80%"></el-input>
						</el-form-item>
					</el-form>
				</div>
				<div slot="footer" class="dialog-footer" style="margin-top:-20px;">
					<el-button @click="dialogFormVisible2 = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible2 = false">保 存</el-button>
				</div>
			</el-dialog>

			<el-pagination background layout="prev, pager, next" :total="100" class="myPage">
			</el-pagination>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

				tableData: [{
					date: '1',
					name: '123123',
					address: '2018.02.21 15:13',
					title:"甜蜜暴击",
					class:"电影",
					
				}, {
					date: '2',
					name: '123123123',
					address: '2018.02.21 15:17',
					title:"甜蜜暴击2",
					class:"电影2",
				}],

				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px',

				dialogTableVisible2: false,
				dialogFormVisible2: false,
				form2: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth2: '120px',
				dialogVisible3: false,
				fileList:[],
			}
		},

		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			}

		}

	}
</script>

<style>
	.cent {
		margin-top: 25px;
		background: #FFFFFF;
		margin-left: 40px;
		height: 740px;
		margin-right: 24px;
	}
	
	.myPage {
		margin-top: 40px;
	}
	.addalbum_box{
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
		padding: 20px 0px;
		margin-top:-20px
    }
</style>
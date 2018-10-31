<template>
	<div>

		<div style="background-color: white;height: 60px;">
			<span style="line-height: 60px;margin-left: 20px;font-size:18px;color:black">用户管理&nbsp;/&nbsp;用户列表</span>
			<!--<el-button type="primary" style="float: right;margin: 10px 30px 10px 0;" @click="dialogFormVisible = true">+&nbsp;&nbsp;新增专题</el-button>-->

			<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
				<el-form :model="form">
					<el-form-item label="资讯标题" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="分类" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
				</div>
			</el-dialog>

		</div>

		<div class="cent">
			<el-table :data="tableData" style="width: 100%" stripe>
				<el-table-column prop="date" label="用户昵称" width="180">

				</el-table-column>
				<el-table-column prop="name" label="用户ID" width="180">

				</el-table-column>
				<el-table-column prop="title" label="注册时间">

				</el-table-column>
				<el-table-column prop="class" label="登录方式">

				</el-table-column>
				<el-table-column prop="address" label="手机号">

				</el-table-column>
				<!--<el-table-column prop="image" label="资讯头图">
					<template slot-scope="scope">
						<el-button type="text" size="small" >预览图片</el-button>
						
					</template>
				</el-table-column>-->
				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="dialogVisible3 = true" style="color:#FB3544">禁用</el-button>
						
					</template>
				</el-table-column>
			</el-table>

			<el-dialog title="提示" :visible.sync="dialogVisible3" width="30%" :before-close="handleClose">
				<span>确定要删除该资讯吗？</span>
				<span slot="footer" class="dialog-footer">
				    <el-button @click="dialogVisible3 = false">取 消</el-button>
				    <el-button type="primary" @click="dialogVisible3 = false">确 定</el-button>
				</span>
			</el-dialog>

			<el-dialog title="编辑分类" :visible.sync="dialogFormVisible2">
				<el-form :model="form2">
					<el-form-item label="资讯标题" :label-width="formLabelWidth2">
						<el-input v-model="form2.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="分类" :label-width="formLabelWidth2">
						<el-input v-model="form2.name" autocomplete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
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

				dialogVisible3: false
			}
		},

		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
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
</style>
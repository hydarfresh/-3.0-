<template>
	<div>

		<div style="background-color: white;height: 60px;">
			<span style="line-height: 60px;margin-left: 20px;font-size:18px;color:black">资讯管理&nbsp;/&nbsp;分类管理</span>
			<el-button type="primary" style="float: right;margin: 10px 30px 10px 0;" @click="dialogFormVisible = true">+&nbsp;&nbsp;添加分类</el-button>
			<!-- 点击新增 -->
			<el-dialog title="添加分类" :visible.sync="dialogFormVisible">
				<div class="addalbum_box">
					<el-form :model="form" label-width="100px" >
						<el-form-item label="排序号:" >
							<el-input v-model="form.name" placeholder="请输入排序号(数据越大越靠前)" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="分类名称:" >
							<el-input v-model="form.name" placeholder="请输入分类名称" style="width:80%"></el-input>
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
			<el-table :data="tableData" style="width: 100%;margin-left:1%" stripe>
				<el-table-column prop="date" label="排序号" width="180">
					1
				</el-table-column>
				<el-table-column prop="name" label="分类名称" width="180">
					甜蜜暴击
				</el-table-column>
				<el-table-column prop="address" label="添加时间">
					2018.02.21 15：13
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="dialogVisible3 = true">删除</el-button>
						<span style="color:gray">|</span>
						<el-button type="text" size="small" @click="dialogFormVisible2 = true">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>

			
			<!-- 编辑弹框 -->
			<el-dialog title="编辑分类" :visible.sync="dialogFormVisible2">
				<div class="addalbum_box">
					<el-form :model="form2" label-width="100px">
						<el-form-item label="排序号:" >
							<el-input v-model="form2.name" placeholder="请输入排序号(数据越大越靠前)" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="分类名称:" >
							<el-input v-model="form2.name" placeholder="请输入分类名称" style="width:80%"></el-input>
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
					name: '甜蜜暴击',
					address: '2018.02.21 15:13'
				}, {
					date: '2',
					name: '甜蜜暴击2',
					address: '2018.02.21 15:17'
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
	.addalbum_box{
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
		padding: 20px 0px;
		margin-top:-20px;
    }
</style>
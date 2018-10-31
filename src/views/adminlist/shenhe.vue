<template>
	<div>

		<div style="background-color: white;height: 60px;">
			<span style="line-height: 60px;margin-left: 20px;font-size:18px;color:black">资讯管理&nbsp;/&nbsp;评论审核</span>
		</div>

		<div class="cent">
			<el-table :data="tableData" style="width: 100%" stripe>
				<el-table-column prop="date" label="用户昵称" width="180"></el-table-column>
				<el-table-column prop="name" label="资讯标题" width="180"></el-table-column>
				<el-table-column prop="title" label="评论时间"></el-table-column>
				<el-table-column prop="class" label="评论内容"></el-table-column>
				<el-table-column prop="address" label="审核状态">
					<template slot-scope="scope">
                        <div slot="reference">
                            <!-- <span  > <span style="color: rgba(191,191,191,1);" @click="changeStatue(scope.row.state,scope.row.id)">未审核</span></span> -->
                            <span  > <span style="color: #7ED321;" @click="changeStatue(scope.row.state,scope.row.id)">已审核</span></span>
                        </div>
                    </template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="dialogVisible3 = true">删除</el-button>
						<span style="color:gray">|</span>
						<el-button type="text" size="small" @click="dialogFormVisible2 = true">过审</el-button>
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
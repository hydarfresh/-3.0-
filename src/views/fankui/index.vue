<template>
	<div>

		<div style="background-color: white;height: 60px;">
			<span style="line-height: 60px;margin-left: 20px;font-size:18px;color:black">用户反馈管理</span>
			
		</div>

		<div class="cent">
			<div style="position:relative;left:10px;top:20px;">
				<span>状态:</span>
				<el-select placeholder="请选择投票调查类型"  style="width:20%" v-model="search.state" >
									<el-option
										v-for="option in status"
										:key="option.value"
										:value="option.value"
										:label="option.text"
										>
									</el-option>
				</el-select>
			</div>
			<el-table :data="tableData" style="width: 100%;margin-top:30px;" stripe>
				<el-table-column prop="date" label="排序号" width="180">
				</el-table-column>
				<el-table-column prop="name" label="内容" width="180">
				</el-table-column>
				<el-table-column prop="address" label="联系方式">
				</el-table-column>
				<el-table-column prop="tips" label="时间">
				</el-table-column>
				<el-table-column prop="user" label="用户名">
				</el-table-column>
				<el-table-column prop="" label="状态">
					<template slot-scope="scope">
                        <div slot="reference">
                            <!-- <span  > <span style="color: #FB3544;" @click="changeStatue(scope.row.state,scope.row.id)">未处理</span></span> -->
                            <span  > <span style="color:#1890FF;" @click="changeStatue(scope.row.state,scope.row.id)">已处理</span></span>
                        </div>
                    </template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="userdetail()">详情</el-button>
						<span style="color:gray">|</span>
						<el-button type="text" size="small" @click="dialogFormVisible2 = true">删除</el-button>
					</template>
				</el-table-column>
			</el-table>

			<!-- 点击详情 -->
			<el-dialog title="详情" :visible.sync="detail">

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
				detail:false,
				tableData: [{
					date: '1',
					name: '甜蜜暴击',
					address: '2018.02.21 15:13',
					tips:"这里是分类说明"
				}, {
					date: '2',
					name: '甜蜜暴击2',
					address: '2018.02.21 15:17',
					tips:"这里是分类说明"
					
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
				status:[
					{text:'已处理',value:'1'},
					{text:'未处理',value:'2'}
				],
				search:{
					state:''
				}
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
			userdetail(){
				this.detail = true
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
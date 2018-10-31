<template>
	<div>

		<div style="background-color: white;height: 60px;">
			<span style="line-height: 60px;margin-left: 20px;font-size:18px;color:black">投票调查&nbsp;/&nbsp;列表</span>
			<el-button type="primary" style="float: right;margin: 10px 30px 10px 0;" @click="dialogFormVisible = true">+&nbsp;&nbsp;添加投票</el-button>

			<el-dialog title="添加新投票调查" :visible.sync="dialogFormVisible">
				<div class="addalbum_box">
					<el-form :model="form" label-width="100px">
						<el-form-item label="类型:" >
							<el-select placeholder="请选择投票调查类型" v-model="form.resourse" style="width:80%">
									<el-option
										v-for="option in type"
										:key="option.value"
										:value="option.value"
										:label="option.text"
										>
									</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="分类" >
							<el-input v-model="form.name" placeholder="请输入投票调查主题" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="截止日期:">
							<el-date-picker
								v-model="value1"
								type="date"
								placeholder="选择日期">
							</el-date-picker>
						</el-form-item>
					</el-form>
				</div>	
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
				</div>
			</el-dialog>

		</div>

		<div class="cent">
			<el-table :data="tableData" style="width: 100%" stripe>
				<el-table-column prop="date" label="主题" width="180">
				</el-table-column>
				<el-table-column prop="name" label="ID" width="180">
				</el-table-column>
				<el-table-column prop="title" label="类型">
				</el-table-column>
				<el-table-column prop="address" label="添加时间">
				</el-table-column>
				<el-table-column prop="class" label="结束时间">
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="reset()">回收</el-button>
						<span style="color:gray">|</span>
						<el-button type="text" size="small" @click="addoption()">选项</el-button>
						<span style="color:gray">|</span>
						<el-button type="text" size="small" @click="dialogFormVisible2 = true">删除</el-button>
						<span style="color:gray">|</span>
						<el-button type="text" size="small" @click="dialogFormVisible2 = true">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>

			<el-dialog title="编辑分类" :visible.sync="dialogFormVisible2">
				<div class="addalbum_box">
					<el-form :model="form" label-width="100px">
						<el-form-item label="类型:" >
							<el-select placeholder="请选择投票调查类型" v-model="form.resourse" style="width:80%">
									<el-option
										v-for="option in type"
										:key="option.value"
										:value="option.value"
										:label="option.text"
										>
									</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="分类" >
							<el-input v-model="form.name" placeholder="请输入投票调查主题" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="截止日期:">
							<el-date-picker
								v-model="value1"
								type="date"
								placeholder="选择日期">
							</el-date-picker>
						</el-form-item>
					</el-form>
				</div>	
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible2 = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible2 = false">保 存</el-button>
				</div>
			</el-dialog>
			<!-- 点击选项 -->
			<el-dialog title="添加选项" :visible.sync="choosetype">
				<div class="addalbum_box">
					<el-table :data="TableData" style="width:100%">
						<el-table-column prop="" label="序号"></el-table-column>
						<el-table-column prop="" label="题目名称"></el-table-column>
						<el-table-column prop="" label="选项类型"></el-table-column>
						<el-table-column prop="" label="操作">
							<template slot-scope="scope" >
								<span style="color:#1890FF">删除</span>
								<span style="color:gray">|</span>
								<span style="color:#1890FF" @click="edit()">编辑</span>
							</template>
						</el-table-column>
					</el-table>
				</div>
				<div class="add-package-button" @click="addsmallclassify">
              		<i  style="font-size:20px"  class="el-icon-plus"></i>
          		</div>
			</el-dialog>
			<!-- 点击选项添加题目 -->
			<el-dialog title="题目" :visible.sync="subject">
				<div class="addalbum_box">
					<el-form label-width="100px">
						<el-form-item label="题目名称:">
							<el-input placeholder="请输入题目名称" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="选择类型:">
							<el-select placeholder="请选择选项类型类型" v-model="form.resourse" style="width:80%">
									<el-option
										v-for="option in type"
										:key="option.value"
										:value="option.value"
										:label="option.text"
										>
									</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="选项1:">
							<el-input placeholder="请输入选项内容" style="width:80%"></el-input>
						</el-form-item>
						<!-- <span> 选项{{index + 1}}:</span>
						<el-input placeholder="请输入选项内容"></el-input>
						<div class="add-[ackage-buttonn" @click="addRecipeNameBtn('name')">
							<i class="el-icon-plus" style="font-size:20px;"></i>
						</div> -->
					</el-form>
				</div>
				<div slot="footer" class="dialog-footer">
					<el-button @click="subject = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible2 = false">保 存</el-button>
				</div>
			</el-dialog>
			<!-- 点击选项中的编辑 -->
			<el-dialog title="题目" :visible.sync="editsubject">
				<div class="addalbum_box">
					<el-form label-width="100px">
						<el-form-item label="题目名称:">
							<el-input placeholder="请输入题目名称" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="选择类型:">
							<el-select placeholder="请选择选项类型类型" v-model="form.resourse" style="width:80%">
									<el-option
										v-for="option in type"
										:key="option.value"
										:value="option.value"
										:label="option.text"
										>
									</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="选项1:">
							<el-input placeholder="请输入选项内容" style="width:80%"></el-input>
						</el-form-item>
						<!-- <span> 选项{{index + 1}}:</span>
						<el-input placeholder="请输入选项内容"></el-input>
						<div class="add-[ackage-buttonn" @click="addRecipeNameBtn('name')">
							<i class="el-icon-plus" style="font-size:20px;"></i>
						</div> -->
					</el-form>
				</div>
				<div slot="footer" class="dialog-footer">
					<el-button @click="editsubject = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible2 = false">保 存</el-button>
				</div>
			</el-dialog>
			<!-- 点击回收 -->
			<el-dialog title="数据回收" :visible.sync="dash">

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
				choosetype:false,
				dash:false,
				subject:false,
				editsubject:false,
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
				TableData:[{

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
				
				type:[
					{text:'问卷调查',value:'1'},
					{text:'投票调查',value:'2'}
				],
				value1:''
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
			addoption(){
				this.choosetype = true
			},
			reset(){
				this.dash = true
			},
			addsmallclassify(){
				this.subject = true
			},
			edit(){
				this.editsubject = true
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
        padding: 30px 0px;
    }
	.add-package-button {
  width: calc(100% - 45px);
  margin-left: 30px;
  margin-top: 20px;
  border: 1px dashed #bbbbbb;
  height: 40px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
}
.add-package-button i {
  position: relative;
  top: 10px;
}
</style>
<template>
	<div>
		<div style="background-color: white;height: 60px;">
			<span style="line-height: 60px;margin-left: 20px;font-size:18px;color:black">首页管理 / 点播</span>
			<el-button type="primary" style="float: right;margin: 10px 30px 10px 0;" @click="dialogFormVisible = true">+&nbsp;&nbsp;上传Banner</el-button>

			<el-dialog title="上传banner" :visible.sync="dialogFormVisible" width="45%" >
				<div class="addalbum_box" >
					<el-form  :label-position="labelPosition" label-width="100px">
						<el-form-item label="排序号:" >
							<el-input v-model="form.name" placeholder="请输入排序号(数值越大越靠前)" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="banner名称:" >
							<el-input v-model="form.name" placeholder="请输入banner名称" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="banner图:">
							<el-upload
								name="file"
								class="avatar-uploader"
								ref="test"
								:file-list="fileUpload"
								:data="uploadConfig.previewImg"
								:action="config.fileUploadLink"
								:show-file-list="false"
								:limit="1"
								:on-success="updateImg"
								:beforeUpload="beforeAvatarUpload"
								multiple>
								<i class="el-icon-plus avatar-uploader-icon"></i>
								<br>
								上传图片
							</el-upload>
							<img src="" alt="" class="avatar-uploader">
						</el-form-item>
						<el-form-item label="点播资源:">
							<el-select placeholder="请选择点播资源" v-model="form.resource" style="width:80%" @change="tidyCategoryInfo">
								<el-option
									v-for="option in source"
									:key="option.value"
									:value="option.value"
									:label="option.text">
								</el-option>
							</el-select>
						</el-form-item>
					</el-form>
				</div>
				<div slot="footer" class="dialog-footer" style="margin-top:-10px;">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
				</div>
			</el-dialog>

		</div>

		<div class="cent" >
			<el-table :data="tableData" style="width: 100%;margin-left:1%" stripe>
				<el-table-column prop="date" label="排序号" width="180">

				</el-table-column>
				<el-table-column prop="name" label="banner标题" width="180">

				</el-table-column>
				<el-table-column prop="title" label="添加时间">

				</el-table-column>
				<el-table-column prop="img" label="banner封面">
					<!-- <template>
						<template slot-scope="scope">
							<el-popover>
								<img :src="scope.row.img" alt="">
								<div slot="reference" style="height:40px;width:40px;">
									<img :src="scope.row.img" alt="" style="height:100%;width:100%">
								</div>
							</el-popover>
						</template>
					</template> -->
					<template slot-scope="scope">
						<el-button type="text" size="small" >预览图片</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="class" label="点播ID">

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
			<el-dialog title="编辑分类" :visible.sync="dialogFormVisible2" width="45%">
				<div class="addalbum_box">
					<el-form  label-width="100px" :label-position="labelPosition">
						<el-form-item label="排序号:" >
							<el-input v-model="form2.name" placeholder="请输入排序号(数值越大越靠前)" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="banner名称:" >
							<el-input v-model="form2.name" placeholder="请输入banner名称" style="width:80%"></el-input>
						</el-form-item>
						<el-form-item label="banner图:">
							<el-upload
								name="file"
								class="avatar-uploader"
								ref="test"
								:file-list="fileUpload"
								:data="uploadConfig.previewImg"
								:action="config.fileUploadLink"
								:show-file-list="false"
								:limit="1"
								:on-success="updateImg"
								:beforeUpload="beforeAvatarUpload"
								multiple>
								<i class="el-icon-plus avatar-uploader-icon"></i>
								<br>
								上传图片
							</el-upload>
							<img src="" alt="" class="avatar-uploader">
						</el-form-item>
						<el-form-item label="点播资源:">
							<el-select placeholder="请选择点播资源" v-model="form.resource" style="width:80%" @change="tidyCategoryInfo">
								<el-option
									v-for="option in source"
									:key="option.value"
									:value="option.value"
									:label="option.text">
								</el-option>
							</el-select>
						</el-form-item>
					</el-form>
				</div>
				<div slot="footer" class="dialog-footer" style="margin-top:-10px;">
					<el-button @click="dialogFormVisible2 = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible2 = false">保 存</el-button>
				</div>
			</el-dialog>
			<!-- 选择点播资源跳出弹框 -->
			<el-dialog title="选择点播资源" :visible.sync="chooseresourse">
				<div style="height:20px;">
					<span>
						<el-input placeholder="请输入关键词" style="width:50%;position:relative;left:25%;top:-350%" suffix-icon="el-icon-search" size="small" class="serach_input"></el-input>
					</span>
				</div>
				
				<div class="addalbum_box">
					<el-table
						ref="multipleTable"
						:data="tableData3"
						tooltip-effect="dark"
						style="width: 100%"
						@selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55"></el-table-column>
						<el-table-column prop="" label="资源名称"></el-table-column>
						<el-table-column prop="" label="资源ID"></el-table-column>
						<el-table-column prop="" label="所属分类"></el-table-column>
						<el-table-column prop="" label="添加时间"></el-table-column>
					</el-table>
				</div>
				<div slot="footer" class="dialog-footer" style="margin-top:-20px">
					<el-button @click="chooseresourse= false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible2 = false">保 存</el-button>
				</div>
			</el-dialog>
			<el-pagination background layout="prev, pager, next" :total="100" class="myPage">
			</el-pagination>
		</div>

	</div>
</template>

<script>
	import {getlist} from '@/api/clickapi/index'
	export default {
		data() {
			return {
				labelPosition: 'right',
				chooseresourse:false,
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
				source:[
					{text:'点播资源',value:'1'},
					{text:'资讯资源',value:'2'}
				],
				uploadConfig: {
                    previewImg: {
                    type: 'bbfs_abulm',
                    comments: '测试'
                    }
				},
				config: {
					fileLink: 'http://vweizhan.test.opencodes.top:9005/',
					fileUploadLink: 'http://vweizhan.test.opencodes.top:9005/upload'
				},
				fileUpload:[],
				multipleSelection: [],
				tableData3:[]
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
			// 上传图片之前
			updateImg(response,file){},
			beforeAvatarUpload(){},
			// 获取列表
			// getlistInfo(){
			// 	getlist().then(({code,body,msg})=>{
			// 		if(code === 0){
			// 			this.tableData = body.data
			// 		}
			// 	})
			// },
			tidyCategoryInfo(){
				this.chooseresourse = true
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		},
		mounted(){
			// this.getlistInfo(0)
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
	.avatar-uploader-icon {
        /* font-size: 28px; */
        color: #8c939d;
        width: 40px;
        /* height: 30px; */
        /* line-height: 178px; */
        text-align: center;
    }
	.avatar-uploader{
    height: 40px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width:96px;
        height:92px;
        background-color:#fbfbfb;
    }
	.addalbum_box{
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
		padding: 20px 0px;
		margin-top:-20px;
		margin-top:-30px;
    }

</style>
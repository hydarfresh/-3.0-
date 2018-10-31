<template>
	<div>

		<div style="background-color: white;height: 60px;">
			<span style="line-height: 60px;margin-left: 20px;font-size:18px;color:black">收录拆条管理</span>
			

		</div>

		<div class="cent">
			<el-table :data="tableData" style="width: 100%" stripe>
				<el-table-column prop="date" label="自定义" width="180">
					
				</el-table-column>
				<el-table-column prop="name" label="自定义" width="180">
					
				</el-table-column>
				<el-table-column prop="address" label="自定义">
					
				</el-table-column>
				<el-table-column fixed="right" label="自定义操作" width="200">
					<template slot-scope="scope">
						<el-button type="text" size="small" >删除</el-button>
						<el-button type="text" size="small" >编辑</el-button>
					</template>
				</el-table-column>
			</el-table>

			

			<el-pagination background layout="prev, pager, next" :total="100" class="myPage">
			</el-pagination>
		</div>

	</div>
</template>

<script>
	
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
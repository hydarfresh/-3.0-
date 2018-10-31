<template>
	<div>

		<div style="background-color: white;height: 60px;">
			<span style="line-height: 60px;margin-left: 20px;font-size:18px;color:black">首页管理&nbsp;/&nbsp;图书</span>
			<el-button type="primary" style="float: right;margin: 10px 30px 10px 0;">+&nbsp;&nbsp;添加图书</el-button>
		</div>

		<div class="cent">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="date" label="排序号" width="180">
				</el-table-column>
				<el-table-column prop="name" label="图书名称" width="180">
				</el-table-column>
				<el-table-column prop="address" label="添加时间">
				</el-table-column>
			</el-table>
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
</style>
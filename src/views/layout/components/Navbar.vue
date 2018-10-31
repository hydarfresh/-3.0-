<template>
  <el-menu class="navbar" mode="horizontal" style="background-color:#09c">
    <!--<breadcrumb></breadcrumb>-->
    
    <span  style="margin-left:80%;color:#fff" @click="change()">跳转后台</span>

    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper" style="margin-top:-1px;">
        
        <img class="user-avatar" :src="pic">
        <span style="line-height: 50px;float: right;font-size: 20px;margin-left:10px;color:#fff">admin</span>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            首页
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import  pic from '@/assets/index/pic.png'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  data(){
    return{
      pic,
      loginForm:{
        username:'admin',
        password:'I_anyvideo@8'
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    change(){
      var m = 1;
      var timd = setInterval(function(){
        m--;
        if(m==0){
          clearInterval(timd);
          location.href="http://admin.qbitv.net/badlogin?username=admin&psw=I_anyvideo@8"
          
        }
      })
    },
    
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-top:5px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>


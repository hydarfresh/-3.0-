import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [{
    path: '/login',
    component: () =>
      import ('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () =>
      import ('@/views/404'),
    hidden: true
  },

  {
    path: '',
    component: Layout,
    name: 'dashboard',
    redirect: '/dashboard',
    meta: {
      title: '首页',
      icon: ''
    },
    children: [
    {
      path: 'dashboard',
      meta: {
        title: '点播',
        icon: ''
      },
      component: () =>
        import ('@/views/dashboard/index')
    },
    {
      path: 'Livebroadcast',
      meta: {
        title: '直播',
        icon: ''
      },
      component: () =>
        import ('@/views/dashboard/Livebroadcast')
    },
    {
      path: 'Book',
      meta: {
        title: '图书',
        icon: ''
      },
      component: () =>
        import ('@/views/dashboard/Book')
    },
    {
      path: 'news',
      meta: {
        title: '资讯',
        icon: ''
      },
      component: () =>
        import ('@/views/dashboard/news')
    }
    
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'adminlist',
    redirct: 'adminlist',
    meta: {
      title: '资讯管理',
      icon: ''
    },
    children: [
    {
      path: 'adminlist',
      meta: {
        title: '分类管理',
        icon: ''
      },
      component: () =>
        import ('@/views/adminlist/index')
    },
     {
      path: 'classification',
      meta: {
        title: '资讯列表',
        icon: ''
      },
      component: () =>
        import ('@/views/adminlist/classification')
    },
    {
      path: 'zhuanti',
      meta: {
        title: '专题管理',
        icon: ''
      },
      component: () =>
        import ('@/views/adminlist/zhuanti')
    },
    {
      path: 'shenhe',
      meta: {
        title: '评论审核',
        icon: ''
      },
      component: () =>
        import ('@/views/adminlist/shenhe')
    }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'ads',
    redirct: 'ads',
    meta: {
      title: '点播资源管理',
      icon: ''
    },
    children: [{
        path: 'banner',
        meta: {
          title: '分类管理',
          icon: ''
        },
        component: () =>
          import ('@/views/ads/banner')
      },
      {
        path: 'kaiping',
        meta: {
          title: '资源列表',
          icon: ''
        },
        component: () =>
          import ('@/views/ads/kaiping')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'act',
    redirct: 'act',
    meta: {
      title: '图书管理',
      icon: ''
    },
    children: [
    {
      path: 'act',
      meta: {
        title: '推荐管理',
        icon: ''
      },
      component: () =>
        import ('@/views/act/index')
    },
    {
      path: 'fileList',
      meta: {
        title: '资源列表',
        icon: ''
      },
      component: () =>
        import ('@/views/act/fileList')
    }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'msg',
    redirect: 'msg',
    meta: {
      title: '投票调查',
      icon: ''
    },
    children: [{
      path: 'msg',
      meta: {
        title: '投票调查',
        icon: ''
      },
      component: () =>
        import ('@/views/msg/index')
    }]
  },
  {
    path: '',
    component: Layout,
    name: 'UserManagement',
    redirect: 'UserManagement',
    meta: {
      title: '用户管理',
      icon: ''
    },
    children: [{
      path: 'UserManagement',
      meta: {
        title: '用户管理',
        icon: ''
      },
      component: () =>
        import ('@/views/UserManagement/index')
    }]
  },
  {
    path: '/user',
    component: Layout,
    name: 'user',
    redirect: '/user',
    meta: {
      title: '内容管理',
      icon: ''
    },
    children: [{
        path: 'msg',
        meta: {
          title: '资讯审核',
          icon: ''
        },
        component: () =>
          import ('@/views/user/msg')
      },
      {
        path: 'sug',
        meta: {
          title: '视频审核',
          icon: ''
        },
        component: () =>
          import ('@/views/user/sug')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'version',
    redirect: 'version',
    meta: {
      title: '收录拆条管理',
      icon: ''
    },
    children: [{
      path: 'version',
      meta: {
        title: '收录拆条管理',
        icon: ''
      },
      component: () =>
        import ('@/views/version/index')
    }]
  },
  {
    path: '/wifi',
    component: Layout,
    name: 'version',
    redirect: 'version',
    meta: {
      title: 'wifi终端管理',
      icon: ''
    },
    children: [{
      path: 'version',
      meta: {
        title: 'wifi终端管理',
        icon: ''
      },
      component: () =>
        import ('@/views/wifi/index')
    }]
  },
	 {
    path: '/tongji',
    component: Layout,
    name: 'tongji',
    redirect: '/tongji',
    meta: {
      title: '统计',
      icon: ''
    },
    children: [{
        path: 'index',
        meta: {
          title: '日活',
          icon: ''
        },
        component: () =>
          import ('@/views/tongji/index')
      },
      {
        path: 'mouth',
        meta: {
          title: '月活',
          icon: ''
        },
        component: () =>
          import ('@/views/tongji/mouth')
      },
      {
        path: 'number',
        meta: {
          title: '安装量',
          icon: ''
        },
        component: () =>
          import ('@/views/tongji/number')
      }
    ]
  },
  {
    path: '/tuisong',
    component: Layout,
    name: 'tuisong',
    redirect: 'version',
    meta: {
      title: '推送',
      icon: ''
    },
    children: [{
      path: 'index',
      meta: {
        title: '推送',
        icon: ''
      },
      component: () =>
        import ('@/views/tuisong/index')
    }]
  },
  {
    path: '/fankui',
    component: Layout,
    name: 'fankui',
    redirect: 'version',
    meta: {
      title: '用户反馈管理',
      icon: ''
    },
    children: [{
      path: 'index',
      meta: {
        title: '用户反馈管理',
        icon: ''
      },
      component: () =>
        import ('@/views/fankui/index')
    }]
  }
  // {
  //   path: '*',
  //   redirect: '/404',
  //   hidden: true
  // }
]

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

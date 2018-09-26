<template>
  <div class="container">
      <div class="userinfo">
          <img :src="userinfo.avatarUrl" alt="">
          <p>{{userinfo.nickName}}</p>
      </div>
      <YearProgress></YearProgress>
      <button v-if='userinfo.openId' class='btn' @click='scanBook'>添加图书</button>
	  <button v-else open-type='getUserInfo' lang='zh_CN' class='btn' @getuserinfo='login'>点击登录</button> 
  </div>
</template>
<script>
import qcloud from 'wafer2-client-sdk'
import YearProgress from '@/components/YearProgress'
import { showSuccess, post, showModal } from '@/util'
import config from '@/config'
export default {
  components: {
    YearProgress
  },
  data () {
    return {
      userinfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '未登录'
      }
    }
  },
  created () {
    if (wx.getStorageSync('userInfo')) {
      this.userinfo = wx.getStorageSync('userInfo')
    }

    console.log(this.userinfo)
  },
  methods: {
    async addbook (isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openId: this.userinfo.openId
      })
      console.log(res)
      showModal('添加成功', `${res.title}添加成功`)
      // if (res.code === 0 && res.data.title) {
      //   showSuccess("添加成功", `${res.data.title}添加成功`);
      // }
    },
    scanBook () {
      // 允许从相机和相册扫码
      wx.scanCode({
        success: res => {
          if (res.result) {
            this.addbook(res.result)
          }
        }
      })
    },
    login () {
      let user = wx.getStorageSync('userinfo')
      this.userinfo = user
      const self = this
      if (!user) {
        qcloud.setLoginUrl(config.loginUrl)
        console.log('run1', config.loginUrl)
        // debugger
        qcloud.login({
          success: function (userinfo) {
            qcloud.request({
              url: config.userUrl,
              login: true,
              success (userRes) {
                showSuccess('登录成功')
                wx.setStorageSync('userinfo', userRes.data.data)
                self.userinfo = userRes.data.data
              }
            })
          },
          fail: function (err) {
            console.log('登录失败', err)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 0 30rpx;
  .userinfo {
    margin-top: 100rpx;
    text-align: center;
    img {
      margin: 20rpx;
      width: 150rpx;
      height: 150rpx;
      border-radius: 50%;
    }
  }
}
</style>


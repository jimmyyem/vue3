<template>
  <div class="wapper">
    <video autoplay="autoplay" loop="loop">
      <source src="http://other.d.ireader.com/group8/M00/15/EE/wKgHil159d2EGS2MAAAAAO-RrU0533005287.mp4?v=QhYR1ZmP&t=wKgHil159d0." type="video/mp4"> <!-- 这几帧都行 -->
    </video>

    <div class="header">
      <div class="title">数字图书馆大数据展示平台</div>
    </div>
    <div class="time-wrapper">
      <p class="time">{{ time }}</p>
      <p class="data">{{ date }}</p>
    </div>

    <div class="flex">
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<script setup>
import { getList } from '@/api/home'
import { ref } from 'vue'

const date = ref('2022-06-14')
const time = ref('22:47:08')

const query = { pagenum: 1 }
getList(query)
  .then((res) => {
    console.log(res) // 调用成功返回的数据
  })
  .error((err) => {
    console.log(err) // 调用失败要执行的逻辑
  })
</script>

<style scoped>
.wapper {
    font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
  }
</style>
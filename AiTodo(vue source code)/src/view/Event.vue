<!--
Description: 显示待办事件的主界面
Date: 2022-12-07
Author: Chelly
Editor: IntelliJ IDEA 2022.3 (Ultimate Edition)
-->
<template>
  <!--  <div id="box">-->
  <!--  </div>-->
  <div id="box-one">
    <a-layout id="body" class="bg1">
      <!--    顶栏-->
      <a-layout-header class="bg1">
        <p id="text1">
          总数 {{ sum }} | 待完成 {{ count1 }} | 已完成 {{ count2 }}
          <MessageInfo></MessageInfo>
          <a v-if="username != null">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp欢迎回来 用户 {{ username }}</a>
        </p>
      </a-layout-header>
      <a-layout>
        <a-layout-content class="bg1">
          <!--        中心内容-->

          <a-card title="待完成" id="tobe" style="border-top-left-radius: 25px;">
          <span v-if="tobeVal.length !== 0" :key="timer">
            <ToBeCard v-for="data of tobeVal" :key="data" :val="data"></ToBeCard>
          </span>

            <span v-else>
              <h3>暂无数据 你可以在侧边栏点击按钮进行添加</h3>
          </span>
          </a-card>

          <a-card title="完成" id="finish" style="border-bottom-left-radius: 25px;">
          <span v-if="finishVal.length !== 0" :key="timer">
            <FinishCard v-for="data of finishVal" :key="data" :val="data"></FinishCard>
          </span>

            <span v-else>
              <h3>暂无数据</h3>
          </span>
          </a-card>

        </a-layout-content>

        <a-layout-sider id="sider1" width="100" class="bg1">
          <!--        侧边栏-->
          <a-button type="text">
            <router-link to="/">返回主页</router-link>
          </a-button>
          <PersonalSettingsButton></PersonalSettingsButton>
          <CreateButton></CreateButton>

          <br>
          <br>
          <a-anchor>
            <a class="a1" @click="scrollToSection('tobe')">待完成</a>
            <br>
            <a class="a1" @click="scrollToSection('finish')">完成</a>
          </a-anchor>

        </a-layout-sider>
      </a-layout>

      <a-layout-footer class="bg1">
        <!--      底栏-->
        <p class="text2">
          <router-link to="/about">关于</router-link>
          |
          Power of AiTodo | Made Author is Chelly
        </p>
        <p class="text2">
          {{ slogan }}
        </p>
      </a-layout-footer>
    </a-layout>
  </div>

</template>

<script lang="ts">

import ToBeCard from "../components/ToBeCard.vue";
import FinishCard from "../components/FinishCard.vue";
import PersonalSettingsButton from "../components/PersonalSettingsButton.vue";
import {ref} from "vue";

import CreateButton from "../components/CreateButton.vue";
import router from "../router";
import MessageInfo from "../components/MessageInfo.vue";


//一个箭头函数, 用于从浏览器本地拿到数据 参数为分区名
let loadData = (key: string) => {

  let list = localStorage.getItem(key)

  try {
    let keyList = list!!.split(',')
    let dataList = []

    // console.log(keyList)
    for (let key of keyList) {
      // console.log(key)
      let data = localStorage.getItem(key)

      if (data != null) {
        // console.log(JSON.parse(data!!))
        dataList.push(JSON.parse(data!!))
      }
    }
    return dataList
  } catch (e) {
    return []
  }
}

let tobeVal = ref(loadData("tobe"))
let finishVal = ref(loadData("finish"))


export default {
  components: {MessageInfo, ToBeCard, PersonalSettingsButton, CreateButton, FinishCard},
  name: "Event",

  //provide 向子孙组件提供父组件的方法或属性。provide 是一个对象或返回一个对象的函数，该对象包含了可注入其子孙的 property
  provide() {
    return {
      fatherFunc() {
        // tobeVal = ref(loadData("tobe"))
        // finishVal = ref(loadData("finish"))
        router.go(0)
        console.log("重新刷新界面")
      }
    }
  },

  // methods: {
  //定义这个方法供外部子组件调用
  // },

  data() {
    return {
      sum: tobeVal.value.length + finishVal.value.length,
      count1: tobeVal.value.length,
      count2: finishVal.value.length,

      tobeVal: tobeVal.value,
      finishVal: finishVal.value,

      slogan: localStorage.getItem("slogan"),

      timer: 0,

      username: localStorage.getItem("username"),

      //用于跳转不同的组件位置
      scrollToSection(id: string) {
        let section = document.getElementById(id)
        if (section) {
          section.scrollIntoView()
        }
      },

    }
  },

};
</script>

<style scoped>
.bg1 {
  /*background-color: rgba();*/
  background: transparent;
}

#box {
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  position: absolute;
  z-index: 2;
}

#text1 {
  text-shadow: 1px 1px rgba(255, 255, 255, 0.1);
  font-size: 16px;
  font-weight: bolder;
  font-family: "微软雅黑";
}

.text2 {
  text-align: center;
  font-size: 16px;
}

#body {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  z-index: 2;
  position: relative
}

#sider1 {
  padding-left: 2%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background: white;
}

.ant-card-head-title {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

#con {
  background: white;
  border: 1px white;
}

#box-one {
  backdrop-filter: blur(7px);
}

.a1 {
  font-size: larger;
}

h3 {
  text-align: center;
}
</style>
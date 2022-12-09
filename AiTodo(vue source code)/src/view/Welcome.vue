<template>
  <title>AiTodo</title>


  <!--    <a-layout-header>Header</a-layout-header>-->
  <div id="head">
    <h1 class="t1">Welcome to back <span v-if="username != null">{{ username }} !</span></h1>
    <p class="introduction">
      {{ slogan }}
    </p>

    <a-button>
      <router-link to="/event">让我们开始吧</router-link>
    </a-button>
  </div>
  <!--    <a-layout-footer>Footer</a-layout-footer>-->

</template>

<script lang="ts">
import router from "../router";

//检查存储分区
function checkStorage() {
  let list: string[] = []
  let b = false

  if (localStorage.getItem("tobe") == null) {
    localStorage.setItem("tobe", list.toString())
    b = true
  }

  if (localStorage.getItem("finish") == null) {
    localStorage.setItem("finish", list.toString())
    b = true
  }

  if (localStorage.getItem("username") == null) {
    localStorage.setItem("username", "Chelly")
    b = true
  }

  if (localStorage.getItem("msg") == null) {
    localStorage.getItem("")
    b = true
  }

  if (localStorage.getItem("slogan") == null) {
    localStorage.setItem("slogan", "Nothing is True, Everything is permitted.")
    b = true
  }

  if (b) {
    router.go(0)
    console.log("重新刷新界面")
  }
}

function addInfo() {
  localStorage.setItem("msg", "welcome")
}

export default {

  name: "Welcome",

  //当页面被加载时执行此函数
  mounted() {
    checkStorage()
    addInfo()
  },

  data() {
    return {
      username: localStorage.getItem("username"),
      slogan: localStorage.getItem("slogan")
    }
  }
//
}
</script>

<style scoped>
#head {
  padding-top: 10%;
  text-align: center;
  position: relative;
}

.t1 {
  font-size: 50px;
  font-weight: bold;

}

.introduction {
  font-size: 25px;
  font-style: italic;
  color: #ff0000;
}

</style>
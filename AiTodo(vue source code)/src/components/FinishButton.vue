<!--
Description: 完成按钮组件
Date: 2022-12-07
Author: Chelly
Editor: IntelliJ IDEA 2022.3 (Ultimate Edition)
-->
<template>
  <a-button type="text" @click="openNotification('bottomRight')">
    <radius-bottomright-outlined/>
    完成
  </a-button>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue';
import {RadiusBottomrightOutlined} from "@ant-design/icons-vue";

export default defineComponent({

  components: {
    RadiusBottomrightOutlined
  },

  props: {
    id: {type: String},
  },

  setup(props) {
    const func = inject("fatherFunc", Function)

    //点击按钮执行方法
    const openNotification = () => {

      //将数据从tobe 移动到finish 空间
      let l1 = localStorage.getItem("tobe")!!.split(",")
      let l3 = localStorage.getItem("finish")!!.split(",")

      let i = l1.splice(l1.indexOf(props.id!!), 1)
      l3.push(i[0])

      localStorage.setItem("tobe", l1.toString())
      localStorage.setItem("finish", l3.toString())

      localStorage.setItem("msg", "finish")
      func()
    };

    return {
      openNotification,
    };
  },
});
</script>

<style scoped>

</style>
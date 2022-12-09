<!--
Description: 新增数据的组件
Date: 2022-12-07
Author: Chelly
Editor: IntelliJ IDEA 2022.3 (Ultimate Edition)
-->
<template>

  <a-button type="text" @click="showModal">添加事件</a-button>
  <a-modal v-model:visible="visible" title="添加一条数据" @ok="handleOk">
    标题
    <a-input v-model:value="events.title" show-count :maxlength="20"/>
    <br/>
    <br/>
    设置提醒时间 (不可为空)<br/>
    <a-date-picker v-model:value="now" :format="dateFormat"/>
    <br/>
    <br/>

    事件内容
    <a-textarea v-model:value="events.content" show-count :maxlength="100"/>

  </a-modal>
</template>

<script lang="ts">
import {defineComponent, inject, ref} from 'vue';
import dayjs, {Dayjs} from 'dayjs';


export default defineComponent({
  // props: {
  //   func: {
  //     type: Function,
  //     require: true,
  //   }
  // },

  inject: [
    "fatherFunc"
  ],

  setup() {
    const func = inject("fatherFunc", Function)
    // inject.
    const dateFormat = 'YYYY-MM-DD';
    const visible = ref<boolean>(false);
    let now = ref<Dayjs>(dayjs(dayjs(), dateFormat))


    //构建随机字符串作为id并返回
    let makeString = () => {
      let outString: string = '';
      let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 20; i++) {
        outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
      }
      return outString;
    }

    let events = ref({
      id: makeString(),
      title: "",
      content: "",
      date: "",
    })

    const showModal = () => {
      visible.value = true;
    };

    //提交数据
    const handleOk = () => {
      if (now.value == null) {
        //用户输入时间为空的情况下
        // console.log(data)

      } else {
        let re = new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}")

        // let d = now.value.toISOString().split(re)[0]
        // now.value.toISOString().split(re)
        // console.log(now.value.toISOString(),)
        events.value.date = now.value.toISOString().match(re)!![0]

        let listStorage2 = localStorage.getItem("tobe")!!.split(",")
        listStorage2.push(events.value.id)
        localStorage.setItem("tobe", listStorage2.toString())

        let data = JSON.stringify(events.value)
        localStorage.setItem(events.value.id, data)
        // console.log(data)
      }

      visible.value = false;
      func()
    };

    return {
      visible,
      showModal,
      handleOk,

      events,
      dateFormat,
      now,
    };
  },
});
</script>


<style scoped>

</style>
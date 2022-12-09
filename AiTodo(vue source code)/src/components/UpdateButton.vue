<!--
Description: 更新数据组件
Date: 2022-12-07
Author: Chelly
Editor: IntelliJ IDEA 2022.3 (Ultimate Edition)
-->
<template>

  <a-button type="text" @click="showModal">更新数据</a-button>
  <a-modal v-bind:visible="visible" title="更新数据" @ok="handleOk" @cancel="close">
    标题
    <a-input v-model:value="val.title" show-count :maxlength="20"/>
    <br/>
    <br/>
    设置提醒时间 (不可为空)<br/>
    <a-date-picker v-model:value="date" :format="dateFormat"/>
    <br/>
    <br/>

    事件内容
    <a-textarea v-model:value="val.content" show-count :maxlength="100"/>
  </a-modal>
</template>

<script lang="ts">
import {defineComponent, inject, ref} from 'vue';
import dayjs, {Dayjs} from "dayjs";

export default defineComponent({

  props: {
    id: String,
    title: String,
    date: String,
    content: String,
  },

  setup(props) {

    const dateFormat = 'YYYY-MM-DD';
    const func = inject("fatherFunc", Function)

    let visible = ref<boolean>(false);
    // let b = false

    // let date: any = null
    let id = props.id

    let val = ref({
      title: props.title,
      date: props.date,
      content: props.content
    })

    // if (props.date == "") {
    //   b = true
    //   date = ref<null>()
    // } else {
    let date = ref<Dayjs>(dayjs(props.date, dateFormat))
    // }

    const showModal = () => {
      visible.value = true;
    };

    //更新数据
    const handleOk = () => {
      // if (b) {
      //   let data = JSON.stringify(val.value)
      //   localStorage.setItem(id!!, data)
      //   console.log(data)
      //  } else {
      let re = new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}")
      val.value.date = date.value.toISOString().match(re)!![0]
      let data = JSON.stringify(val.value)
      localStorage.setItem(id!!, data)
      // }
      visible.value = false;
      func()
    };

    const close = (id: string) => {
      console.log(id)

      visible.value = false;
    }

    return {
      visible,
      showModal,
      handleOk,
      close,

      val,
      date,
      dateFormat
    };
  },
});
</script>


<style scoped>

</style>
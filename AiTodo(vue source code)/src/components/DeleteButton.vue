<template>
  <a-button type="text" @click="openNotification('bottomRight')">
    删除
  </a-button>
</template>

<script lang="ts">
import {defineComponent, inject} from "_vue@3.2.45@vue";
// import {} from '@ant-design/icons-vue';

export default defineComponent({
  props: {
    id: {type: String},
  },

  setup(props) {
    const func = inject("fatherFunc", Function)

    const openNotification = () => {
      let l3 = localStorage.getItem("finish")!!.split(",")
      l3.splice(l3.indexOf(props.id!!), 1)
      localStorage.setItem("finish", l3.toString())
      func()

      /*notification.open({
        message: '',
        description: '',
        placement: "bottomRight",
        icon: () => h(DeleteOutlined)
      });*/
      localStorage.setItem("msg", "delete")
    };

    return {
      openNotification,
    };
  },
});
</script>

<style scoped>

</style>
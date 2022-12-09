<template>
  <a-button type="text" @click="showDrawer">个人设置</a-button>
  <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: white"
      title="个人设置"
      placement="left"

  >
    <div class="components-input-demo-presuffix">
      <a-form-item label="更改用户名">
        <a-input v-model:value="userName" placeholder="please input your new username">
          <template #prefix>
            <user-outlined type="user"/>
          </template>
        </a-input>
      </a-form-item>
      <br>
      <a-form-item label="更改签名">
        <a-input v-model:value="slogan" placeholder="please input content"/>
      </a-form-item>

    </div>

    <template #extra>
      <a-space>
        <a-button @click="onClose">取消</a-button>
        <a-button type="primary" @click="saveSettings">提交</a-button>
      </a-space>
    </template>
  </a-drawer>
</template>
<script lang="ts">
import {UserOutlined} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';


export default defineComponent({
  components: {
    UserOutlined,
  },

  setup() {
    let dataGet = (key: string) => {
      let a = localStorage.getItem(key)
      if (a == null) {
        return ""
      } else {
        return a
      }
    }

    const visible = ref<boolean>(false);
    let userName = ref<string>(dataGet("username"));
    let slogan = ref<string>(dataGet("slogan"))


    const saveSettings = () => {
      if (userName.value != "") {
        localStorage.setItem("username", userName.value)
      }

      if (slogan.value != "") {
        localStorage.setItem("slogan", slogan.value)
      }

      visible.value = false;
    }

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };

    return {
      visible,

      showDrawer,
      onClose,
      saveSettings,

      userName,
      slogan
    };
  },
});
</script>

<style scoped>

</style>
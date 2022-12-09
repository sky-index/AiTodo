<template>
</template>
<script lang="ts">
import {message, notification} from 'ant-design-vue';
import {h} from 'vue';
import {DeleteOutlined, ScissorOutlined, SmileOutlined} from '@ant-design/icons-vue';

function popInfo(msg: string) {
  message.info({
    content: msg,
    icon: () => h(SmileOutlined),
  });
}

function popNotification(msg: string, des: string, icon: any) {
  //显示一条通知
  notification.open({
    message: msg,
    description: des,
    placement: "bottomRight",
    icon: () => h(icon)
  });
}

function checkMessage() {
  let val = localStorage.getItem("msg")

  if (val == "welcome") {
    let un = localStorage.getItem("username")
    let m = "欢迎回来! 用户 " + un + " 你可以进行事件/待办的添加/修改/删除/完成功能 点击本界面底的关于链接获取更多详细信息"
    popInfo(m)
  }

  if (val == "finish") {
    popNotification("移动到完成状态成功", "Moving to Complete Status Successfully", ScissorOutlined)
  }

  if (val == "delete") {
    popNotification("删除成功", "Delete Success", DeleteOutlined)
  }

  localStorage.setItem("msg", "")
}

export default {

  mounted() {
    // info()
    checkMessage()
  }
}
</script>


<!--
Description: 显示数据的卡片
Date: 2022-12-07
Author: Chelly
Editor: IntelliJ IDEA 2022.3 (Ultimate Edition)
-->
<template>
  <a-card :title="val.title" class="del">
    <template #extra>
      结束日期: {{ val.date }} |
      <a-radio-group>
        <DeleteButton :id="val.id"></DeleteButton>
      </a-radio-group>
    </template>
    {{ val.content }}
  </a-card>
</template>

<script lang="ts">
import DeleteButton from "./DeleteButton.vue";

export default {
  name: "FinishCard",
  components: {DeleteButton},
  props: {
    val: {
      id: String,
      title: String,
      date: String,
      content: String,
    }
  }

}
</script>

<style scoped>
.del {
  text-decoration: line-through;
}
</style>
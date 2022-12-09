<template>
  <a-card :title="val.title">
    <template #extra>
      <a-radio-group>
        <ModalOfUpdate :id="val.id" :title="val.title" :date="val.date" :content="val.content"></ModalOfUpdate>
        <FinishButton :id="val.id" location="outer"></FinishButton>
      </a-radio-group>
    </template>
    {{ val.content }}
  </a-card>

</template>

<script lang="ts">
import ModalOfUpdate from "./UpdateButton.vue";
import FinishButton from "./FinishButton.vue";

export default {
  name: "Outer",
  components: {FinishButton, ModalOfUpdate},
  props: {
    val: {
      id: String,
      title: String,
      content: String,
    }
  }
}
</script>

<style scoped>

</style>
<script setup>
import { ref } from "vue"
const message = ref('')
const emits = defineEmits(['sendMessage'])
const send = () => {
  message.value = ''
  emits('sendMessage', message.value)
}
</script>
<template>
  <div class="operation-container">
    <input type="text" data-test="testMessage" v-model="message" />
    <button data-test="testButton" @click="send">send</button>
  </div>
</template>

<style scoped>
</style>

<script setup>
import { reactive, ref } from 'vue'
const message = ref('')
const messageList = reactive([])

const send = () => {
  messageList.push(message.value)
  message.value = ''
}
</script>

<template>
  <div class="app-container">
    <div class="operation-container">
      <input type="text" data-test="testMessage" v-model="message" />
      <button data-test="testButton" @click="send">send</button>
    </div>
    <div class="show-container">
      <ul data-test="testList">
        <li v-for="msg in messageList" :key="msg">{{ msg }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  text-align: center;
}
</style>

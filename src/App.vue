<script>
import { ref } from 'vue'

export default {
  setup() {
    const name = ref('Jake McCambley')
    const status = ref('active')
    const tasks = ref(['task 1', 'task 2', 'task 3', 'final task'])

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending'
      } else if (status.value === 'pending') {
        status.value = 'inactive'
      } else if (status.value === 'inactive') {
        status.value = 'active'
      }
    }

    return {
      name,
      status,
      tasks,
      toggleStatus,
    }
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>

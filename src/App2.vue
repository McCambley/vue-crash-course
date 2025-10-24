<script>
export default {
  data() {
    return {
      name: 'Jake Mccambley ',
      status: 'pending',
      tasks: ['task 1', 'task 2', 'task 3'],
      link: 'https://example.com',
    }
  },
  methods: {
    toggleStatus() {
      this.status = 'active'
    },
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
  <!-- <a v-bind:href="link">Click for Google</a> -->
  <a :href="link">Google Link</a>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>

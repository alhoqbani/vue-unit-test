<template>
  <div>
    <h2 class="text-center">Tasks Form</h2>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="task" class="labael-control">Enter New Task</label>
        <input type="text" class="form-control" id="task" v-model="task">
      </div>
      <input type="submit" class="btn btn-default" value="Submit">
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'tasks-form',
    data () {
      return {
        task: ''
      }
    },
    methods: {
      ...mapActions({
        addTask: 'addTask'
      }),
      onSubmit: function () {
        this.addTask(this.task)
        this.task = ''
      }
    }
  }
</script>

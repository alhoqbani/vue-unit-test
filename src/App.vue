<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-8 col-xs-offset-2">
        <h1 class="text-center">Vue-Unit-Test</h1>
        <hr>
        <ul>
          <li v-for="task in tasks" v-text="task"></li>
        </ul>
        <hr>
        <tasks-form></tasks-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import TasksForm from './components/TasksForm.vue'
  export default {
    name: 'app',
    components: {
      TasksForm
    },
    computed: {
      ...mapGetters({
        tasks: 'tasks'
      })
    }
  }
</script>

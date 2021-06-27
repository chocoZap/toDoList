<template lang="pug">
  .container
    table.table.table-hover
      thead.thead-light
        tr
          th(scope='col') #
          th(scope='col') Title
          th(scope='col') Content
          th(scope='col') Person In Charge
          th(scope='col') Show
          th(scope='col') Edit
          th(scope='col') Delete
      tbody
        tr(v-for='(task, index) in tasks' :key='index')
          th(scope='row') {{ task.id }}
          td {{ task.title }}
          td {{ task.content }}
          td {{ task.person_in_charge }}
          td
            router-link(:to="{name: 'task.show', params: {taskId: task.id }}")
              button.btn.btn-primary Show
          td
            router-link(:to="{name: 'task.edit', params: {taskId: task.id }}")
              button.btn.btn-success Edit
          td
            button.btn.btn-danger(@click='deleteTask(task.id)') Delete
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      tasks: (state) => state.task.tasks
    })
  },
  mounted() {
    this.getTasks()
  },
  methods: {
    ...mapActions({
      getTasks: 'task/index',
      deleteTask: 'task/delete'
    })
  },
}
</script>

<template lang="pug">
  .container
    .row.justify-content-center
      .col-sm-6
        form
          .form-group.row
            label.col-sm-3.col-form-label(for='title') Title
            input#title.col-sm-9.form-control(type='text' v-model='task.title')
          .form-group.row
            label.col-sm-3.col-form-label(for='content') Content
            input#content.col-sm-9.form-control(type='text' v-model='task.content')
          .form-group.row
            label.col-sm-3.col-form-label(for='person-in-charge') Person In Charge
            input#person-in-charge.col-sm-9.form-control(type='text' v-model='task.person_in_charge')
          button.btn.btn-primary(type='submit' @click='createTask') Submit
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: function () {
    return {
      task: {}
    }
  },
  methods: {
    ...mapActions({
      store: 'task/store'
    }),
    createTask() {
      this.store(this.task).then(() => {
        this.$router.push({name: 'task.list'})
      })
    }
  },
}
</script>

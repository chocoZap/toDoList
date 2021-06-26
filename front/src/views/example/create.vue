<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <form>
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label">Title</label>
            <input type="text" class="col-sm-9 form-control" id="title" v-model="task.title">
          </div>
          <div class="form-group row">
            <label for="content" class="col-sm-3 col-form-label">Content</label>
            <input type="text" class="col-sm-9 form-control" id="content" v-model="task.content">
          </div>
          <div class="form-group row">
            <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
            <input type="text" class="col-sm-9 form-control" id="person-in-charge" v-model="task.person_in_charge">
          </div>
          <button type="submit" class="btn btn-primary" @click="createTask">Submit</button>
        </form>
      </div>
    </div>
  </div>
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

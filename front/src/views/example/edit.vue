<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <form>
          <div class="form-group row">
            <label for="id" class="col-sm-3 col-form-label">ID</label>
            <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id" v-model="task.id">
          </div>
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label">Title</label>
            <input type="text" class="col-sm-9 form-control" id="title" v-model="task.title" @input="setTitle">
          </div>
          <div class="form-group row">
            <label for="content" class="col-sm-3 col-form-label">Content</label>
            <input type="text" class="col-sm-9 form-control" id="content" v-model="task.content" @input="setContent">
          </div>
          <div class="form-group row">
            <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
            <input type="text" class="col-sm-9 form-control" id="person-in-charge" v-model="task.person_in_charge" @input="setPerson">
          </div>
          <button type="submit" class="btn btn-primary" @click="editTask">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
      taskId: [Number, String]
  },
  data: function () {
    return {
      task: {}
    }
  },
  computed: {
    ...mapState({
      selectedTask: (state) => state.task.selectedTask
    })
  },
  async mounted() {
    await this.getTask(this.taskId);
  },
  watch: {
    selectedTask(val) {
      this.task = Object.assign({}, val);
    }
  },
  methods: {
    ...mapActions({
      getTask: 'task/show',
      update: 'task/update'
    }),
    editTask() {
      const task = {
        id: this.taskId,
        data: this.task
      }
      this.update(task).then(() => {
        this.$router.push({name: 'task.list'})
      })
    },
    setTitle(e) {
      this.task.title = e.target.value
    },
    setContent(e) {
      this.task.content = e.target.value
    },
    setPerson(e) {
      this.task.person_in_charge = e.target.value
    },
  },
}
</script>

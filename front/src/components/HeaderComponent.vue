<template lang="pug">
  v-card.mx-auto.overflow-hidden(width='100%')
    v-app-bar(dence)
      v-toolbar-title ToDoList
      v-spacer
      v-app-bar-nav-icon(@click.stop='drawer = !drawer')
    v-navigation-drawer(v-model='drawer' app bottom temporary right)
      v-list(nav dense)
        v-list-item-group
          template(v-for="list in lists")
            v-list-item(@click="goToPage(list.value)")
              v-list-item-icon
                v-icon  {{ list.icon }}
              v-list-item-content
                v-list-item-title {{ list.text }}
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      lists: [
        { icon: 'fas fa-home', text: 'ホーム', value: 'Home'},
        { icon: 'far fa-list-alt', text: '一覧', value: 'taskIndex'},
        { icon: 'fas fa-pen', text: '新規作成', value: 'taskCreate'}
      ]
    }
  },
  methods: {
    goToPage(val) {
      this.$router.push({name: val})
    }
  },
}
</script>

<style scoped lang="scss">
.add-btn {
  margin-left: 12px;
}
</style>

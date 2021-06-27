<template lang="pug">
  v-app
    Header
    v-main
      router-view
</template>

<script>
import Header from "./components/HeaderComponent"

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
};
</script>

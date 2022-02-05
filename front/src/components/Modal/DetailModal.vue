<template lang="pug">
  v-dialog(v-model="dialog" persistent max-width='600px')
    div メイン部分
    button(@click="dialog = false") ボタン部分
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>
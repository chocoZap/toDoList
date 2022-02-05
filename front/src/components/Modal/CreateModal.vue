<template lang="pug">
  v-dialog(v-model="dialog" persistent content-class="modal-wrap")
    div.card-wrap 登録が完了しました
    button(@click="dialog = false") 閉じる
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>

<style lang="scss">
.v-dialog {
  &.modal-wrap {
    width: 500px;
    background: #fff;
    text-align: center;
    border-radius: 15px;
    .card-wrap {
      padding: 40px 0 20px;
      font-size: 1rem;
      font-weight: 500;
      color: #313131;
      border-bottom: 1px solid #dfe5ea;
    }
    button {
      padding: 20px 0;
    }
  }
}
</style>
<template lang="pug">
  v-app
    v-card(width="400px").mx-auto.mt-5
      v-card-title
        hi.display-1 ログイン
      v-card-text
        v-form
          v-text-field(prepend-icon="mdi-account-circle")(label="ユーザー名")
          v-text-field(v-bind:type="showPassword ? 'text' : 'password'")(prepend-icon="mdi-lock")(v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'")(label="パスワード")(@click:append="showPassword = !showPassword")
          v-card-actions
            v-btn.info ログイン

</template>
<script>
  export default {
    name: 'App',
    data: () => ({
      showPassword : false
    })
  };
</script>

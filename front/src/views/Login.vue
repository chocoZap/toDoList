<template lang="pug">
  v-app
    v-card.mx-auto.mt-5(width="400px")
      v-card-title
        hi.display-1 ログイン
      v-card-text
        v-form
          v-text-field(prepend-icon="mdi-account-circle" label="ユーザー名" v-model="name")
          v-text-field(
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード" v-model="password"
            @click:append="showPassword = !showPassword"
          )
          v-card-actions
            v-btn.info(@click="submit") ログイン

</template>
<script>
  export default {
    name: 'Login',

  data(){
    return {
      showPassword : false,
      name:'',
      password:'',
    }
  },
  methods:{
    submit(){
      console.log(this.name,this.password)
    }
  }
  };

</script>

<template>
  <q-form @submit="submitForm">
      <q-input
      v-if="tab == 'register'"
      outlined
      class="q-mb-md"
      v-model="formData.name"
      label="Name" />
      <q-input
      outlined
      type="email"
      class="q-mb-md"
      v-model="formData.email"
      label="Email" />
      <q-input
      outlined
      type="password"
      class="q-mb-md"
      v-model="formData.password"
      label="Password" />
      <div class="row">
          <q-space />
      <q-btn
        color="primary"
        type="submit"
        :label="tab"
        />
    </div>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {


    props: ['tab'],
    data() {
        return {
            formData: {
                name: '',
                email: 'ayushrajmathur@gmail.com',
                password: '123456'
            }
        }
    },
    methods: {
        ...mapActions('store', ['registerUser', 'loginUser']),
        submitForm() {
            if(this.tab == "login"){
                this.loginUser(this.formData)
            }
            else{
                this.registerUser(this.formData)
            }
        }
    }
}
</script>

<style>

</style>
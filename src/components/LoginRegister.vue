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
export default {
    props: ['tab'],
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submitForm() {
            if(this.tab == "login"){
                console.log('Login')
            }
            else{
                console.log('Register')
            }
        }
    }
}
</script>

<style>

</style>
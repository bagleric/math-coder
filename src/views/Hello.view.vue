<template>
  <div class="hello">
    <h1 class="title">Hello</h1>
    <h2>What is your name?</h2>
    <FormulateForm v-model="formValues">
      <FormulateInput type="text" label="First Name" name="firstName" />
      <FormulateInput type="text" label="Last Name" name="LastName" />
    </FormulateForm>
    <v-btn color="primary"  outlined @click="submitForm">Continue</v-btn>
  </div>
</template>

<script>

export default {
  name: 'ViewHello',
  components: {},
  data: () => {
    return {
      formValues: {}
    }
  },
  methods: {
    submitForm () {
      // TODO: save user name
      this.$emit('form-complete', this.formValues)
      this.$router.push({
        name: 'PreActivity',
        params: { moduleId: '199e4bb2-04d1-4a95-9965-d74c259e17fc' }
      })
    }
  }
}
</script>

<style scoped>
.coder-text {
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  font-size: larger;
}

.v-card {
  display: grid;
  padding: 1em;
  margin: 1em;
  place-content: center;
  text-decoration: none;
}

.hello {
  display: grid;
  margin: 3em auto auto;
  justify-content: center;
}
</style>

<template>
  <div class="post-activity">
    <div class="instruction-container" v-if="showInstructions">
      <h1 class="title">Post-test instructions</h1>
      <AppTestInstructions></AppTestInstructions>
      <v-btn outlined color="primary" @click="completeInstructions()"
        >Start</v-btn
      >
    </div>
    <AppForm
      v-else
      :inputs="theModule.postModule.inputs"
      :results="theModule.postModule.results"
      :stepper="true"
      :shuffle="true"
      @form-complete="formComplete"
    ></AppForm>
  </div>
</template>

<script>
import store from '@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json'
import AppForm from '@/components/Form.component.vue'
import AppTestInstructions from '@/components/TestInstructions.component.vue'

export default {
  name: 'AppPostActivity',
  components: { AppForm, AppTestInstructions },
  props: {
    moduleId: { required: true, type: String }
  },
  data: () => ({
    showInstructions: true
  }),
  computed: {
    theModule () {
      let moduleId = this.moduleId
      let mod = store.find((item) => {
        return moduleId === item.id
      })
      return mod
    }
  },
  methods: {
    processForm () {
      // TODO: submit this information to the database.
      this.$router.push({ name: 'Goodbye' })
    },
    formComplete (data) {
      console.log({ data })
      this.processForm()
    },
    completeInstructions () {
      this.showInstructions = false
    }
  }
}
</script>

<style scoped>
.post-activity {
  height: 100%;
  padding: 2em;
  max-width: 40em;
  margin: 0 auto;
}
.instruction-container {
  display: grid;
  justify-items: center;
}
</style>

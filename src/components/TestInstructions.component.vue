<template>
  <div class="instructions">
    <v-icon x-large color="primary">mdi-account</v-icon>
    <span>
      You should do this test by yourself.
    </span>
    <v-icon x-large color="primary">mdi-file-edit-outline</v-icon>
    <span>You can use scratch paper to find your answers.</span>
    <v-icon x-large color="primary">mdi-account-question-outline</v-icon>
    <span>
      If you don't know the answer, that's okay. You can go to the next
      question.
    </span>
    <v-icon x-large color="primary">mdi-clock-outline</v-icon>
    <span> You can have as much time as you need.</span>
  </div>
</template>

<script>
export default {
  name: 'AppTestInstructions'
}
</script>

<style scoped>
.instructions {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
  margin: 1em;
  align-items: center;
}
</style>

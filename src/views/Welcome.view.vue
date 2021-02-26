<template>
  <div class="hello">
    <h1 class="title">Welcome</h1>
    <h2>Are you a</h2>
    <v-btn
      color="primary"
      outlined
      :to="{
        name: 'ParentInstructions'
      }"
    >
      Parent
    </v-btn>
    <v-btn
      color="primary"
      :to="{
        name: 'Hello'
      }"
    >
      Second-Grader
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ViewWelcome",
  components: {},
  data: () => {
    return {
      formValues: {},
      isRegistering: false
    };
  },
  beforeCreate() {
    this.$store.commit("resetUser");
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.instructions {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
  margin: 1em;
  align-items: center;
}

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
  gap: 1em;
  margin: 3em auto auto;
  justify-content: center;
  text-align: center;
}
</style>

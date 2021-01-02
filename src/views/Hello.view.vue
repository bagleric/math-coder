<template>
  <div class="hello">
    <h1 class="title">Hello</h1>
    <h2>What is your name?</h2>
    <FormulateForm v-model="formValues" @submit="submitForm">
      <FormulateInput
        validation="required"
        type="text"
        label="First Name"
        name="firstName"
      />
      <FormulateInput
        validation="required"
        type="text"
        label="Last Name"
        name="lastName"
      />
      <v-btn color="primary" type="submit" outlined>
        Continue
      </v-btn>
    </FormulateForm>
  </div>
</template>

<script>
import { CREATE_USER_URL } from "@/constants.js";
export default {
  name: "ViewHello",
  components: {},
  data: () => {
    return {
      formValues: {}
    };
  },
  computed: {
    firstName() {
      return this.$store.getters.firstName;
    }
  },
  methods: {
    createUser: function(data) {
      let store = this.$store;
      return this.$http
        .post(CREATE_USER_URL, {
          first_name: data.firstName,
          last_name: data.lastName
        })
        .then(result => {
          const user = {
            firstName: result.data.user.first_name,
            lastName: result.data.user.last_name,
            id: result.data.user.id
          };
          store.commit("updateUser", user);
        });
    },
    submitForm(data) {
      this.createUser(data)
        .then(() => {
          this.$router.push({
            name: "PreActivity",
            params: { moduleId: "199e4bb2-04d1-4a95-9965-d74c259e17fc" }
          });
        })
        .catch(err => {
          // console.log({ err });
        });
    }
  }
};
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

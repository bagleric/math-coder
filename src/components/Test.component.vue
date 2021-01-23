<template>
  <v-container>
    <div>
      <span>Settings</span>
      <span>TODO</span>
      <v-switch
        v-model="viewAllQuestions"
        @change="updateViewAllQuestions"
        label="View all questions"
      ></v-switch>
      <v-subheader class="pl-0">
        Execution Wait: {{ c_executionWait }}
      </v-subheader>
      <v-slider
        @change="updateExecuteWait"
        :thumb-label="true"
        :max="25"
        tick-size="4"
      ></v-slider>
    </div>
    <v-divider></v-divider>
    <v-card elevation="0">
      <v-card-title>Navigation</v-card-title>
      <v-list nav dense>
        <v-list-item
          :to="{
            name: 'Hello'
          }"
          link
        >
          <v-list-item-title>Hello</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-group
          v-for="mod in modules"
          :key="mod.id"
          :value="true"
          prepend-icon="mdi-folder-open"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ mod.name }}</v-list-item-title>
          </template>
          <v-list-item
            :to="{
              name: 'PreActivity',
              params: { moduleId: mod.id }
            }"
            link
          >
            <v-list-item-title> Pre-Activity </v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-file-check</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Activites</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(activity, index) in mod.activities"
              :key="index"
              link
              :to="{
                name: 'Activity',
                params: { moduleId: mod.id, activityNum: index }
              }"
            >
              <v-list-item-title>
                {{ index }} {{ activity.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-item
            :to="{
              name: 'PostActivity',
              params: { moduleId: mod.id }
            }"
            link
          >
            <v-list-item-title> Post-Activity </v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-file-check</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-item
          :to="{
            name: 'Goodbye'
          }"
          link
        >
          <v-list-item-title>Goodbye</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-exit-run</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AppTest",
  components: {},
  props: {},
  data: () => ({
    viewAllQuestions: false
  }),
  computed: {
    modules() {
      return this.$store.getters.getModules();
    },
    c_executionWait() {
      return this.$store.getters.executionWait;
    }
  },
  methods: {
    updateViewAllQuestions(value) {
      console.log(value);
      this.$store.commit("setViewAllQuestions", value);
    },
    updateExecuteWait(value) {
      console.log(value);
      this.$store.commit("setExecutionWait", value);
    }
  }
};
</script>

<style scoped></style>

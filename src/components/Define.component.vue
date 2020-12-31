<template>
  <span class="word-definition">
    <v-dialog v-model="dialog" max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-hover>
          <span class="word" v-bind="attrs" v-on="on">
            <slot></slot>
          </span>
        </v-hover>
      </template>
      <v-card>
        <v-card-title class="headline">{{ name }}</v-card-title>
        <v-card-text
          ><AppRenderHtml :html="definitionHtml"></AppRenderHtml
        ></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
import store from '@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json'
import AppRenderHtml from '@/components/RenderHtml.component.vue'
export default {
  name: 'Define',
  components: {
    AppRenderHtml
  },
  props: {
    word: { required: true, type: String }
  },
  data () {
    return { dialog: false }
  },
  computed: {
    wordDefinition () {
      const moduleId = this.$route.params.moduleId
      const theModule = store.find((item) => {
        return item.id === moduleId
      })
      if (
        theModule &&
        theModule['word-definitions'] &&
        theModule['word-definitions'][this.word]
      ) {
        return theModule['word-definitions'][this.word]
      }
      return {
        name: 'Oops',
        definitionHtml:
          "Looks like we don't know that word. Ask your teacher for help."
      }
    },
    name () {
      return this.wordDefinition.name
    },
    definitionHtml () {
      return this.wordDefinition['definition-html']
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
    })
  }
}
</script>

<style scoped>
.word {
  font: inherit;
  color: inherit;
  font-style: italic;
}
.word:hover {
  text-decoration: underline;
}
</style>

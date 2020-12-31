<template>
  <!-- usage
<AppReflection :title="" :message=""></AppReflection>
  -->
  <div class="reflection">
    <div class="message">
      <AppRenderHtml :html="c_reflection"></AppRenderHtml>
    </div>
    <div class="controls">
      <v-btn class="previous white--text" text v-show="iter != 0" @click="decrementIter()">
        <v-icon>mdi-chevron-left</v-icon>
        Previous
      </v-btn>
      <v-btn outlined class="next white--text" @click="incrementIter()">
        <span v-if="iter + 1 < reflections.length">Next</span>
        <span v-else>Done</span>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import AppRenderHtml from '@/components/RenderHtml.component.vue'

const sample = require('lodash/sample')
const isArray = require('lodash/isArray')
export default {
  name: 'AppReflection',
  components: { AppRenderHtml },
  props: {
    reflections: {
      default: function () {
        var selected = sample(['Well done!', 'Good job!', 'You did it!'])
        return [selected]
      },
      validator: function (reflections) {
        return isArray(reflections)
      }
    },
    message: String
  },
  computed: {
    c_reflection () {
      return this.reflections[this.iter]
    }
  },
  data: () => ({
    iter: 0
  }),
  methods: {
    incrementIter () {
      this.iter++
      if (this.reflections.length < this.iter + 1) {
        this.$emit('reflection-complete')
      }
    },
    decrementIter () {
      if (this.iter > 0) this.iter--
    }
  }
}
</script>

<style scoped>
.reflection-title {
  font-weight: bold;
}

.message {
  padding: 1em;
  grid-area: message;
}

.controls {
  display: grid;
  grid-area: controls;
  grid-auto-flow: column;
  justify-content: end;
  margin: 0 1em 1em;
  color:white;
}

.previous,
.next {
  color: white;
}

.reflection {
  display: grid;
  grid-template:
    "message" 1fr
    "controls" auto / auto;
  background: darkgreen;
  color: white;
}
</style>

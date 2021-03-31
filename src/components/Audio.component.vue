<template>
  <span class="app-audio" v-on:mousedown="play">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" v-if="!hideIcon" :class="iconClass">
          mdi-account-voice
        </v-icon>
      </template>
      <span>Click to hear this sound again</span>
    </v-tooltip>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "AppAudio",
  components: {},
  data() {
    return {
      sound: null,
      prevSource: this.source
    };
  },
  props: {
    showControls: { type: Boolean, required: false, default: false },
    hideIcon: { type: Boolean, required: false, default: false },
    source: { type: String, required: true },
    iconClass: { type: String, required: false, default: "white--text" },
    playOnMounted: { type: Boolean, required: false, default: false }
  },
  methods: {
    play: function() {
      this.sound.pause();
      this.sound = new Audio(this.source);
      this.sound.play();
      this.sound.onended = this.played;
    },
    played() {
      this.$emit("played");
    }
  },
  beforeMount() {
    this.sound = new Audio(this.source);
  },
  mounted() {
    if (this.playOnMounted) {
      this.play();
    }
  },
  updated() {
    if (this.prevSource === this.source) return;
    this.play();
    this.prevSource = this.source;
  },
  beforeDestroy() {
    this.sound.pause();
  }
};
</script>

<style scoped>
.app-audio {
  color: white;
}
.v-icon {
  cursor: pointer;
}

.v-icon:hover {
  -webkit-animation: jiggle 0.5s 2;
  -moz-animation-duration: 0.5s;
  -moz-animation-name: jiggle;
  -moz-animation-iteration-count: 2;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
}

@-moz-keyframes jiggle {
  0% {
    -moz-transform: rotate(-5deg);
  }
  50% {
    -moz-transform: rotate(5deg);
  }
}

@-webkit-keyframes jiggle {
  0% {
    -webkit-transform: rotate(-5deg);
  }
  50% {
    -webkit-transform: rotate(5deg);
  }
}
</style>

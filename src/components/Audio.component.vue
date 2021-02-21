<template>
  <span class="app-audio" v-on:mouseenter="play">
    <v-icon v-if="!hideIcon" :class="iconClass">
      mdi-account-voice
    </v-icon>
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
      this.sound.play();
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
    console.log(this.prevSource, this.source);
    if (this.prevSource === this.source) return;
    this.sound.pause();
    this.sound = new Audio(this.source);
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
</style>

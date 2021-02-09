<template>
  <span class="app-audio" v-on:mouseenter="play">
    <v-icon v-if="!hideIcon" :class="iconClass">
      mdi-account-voice
    </v-icon>
    <audio ref="sound" v-if="showControls" controls>
      <source :src="source" type="audio/mpeg" />
    </audio>
    <audio ref="sound" v-else>
      <source :src="source" type="audio/mpeg" />
    </audio>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "AppAudio",
  components: {},
  props: {
    showControls: { type: Boolean, required: false, default: false },
    hideIcon: { type: Boolean, required: false, default: false },
    source: { type: String, required: true },
    iconClass: { type: String, required: false, default: "white--text" },
    playOnMounted: { type: Boolean, required: false, default: false }
  },
  methods: {
    play: function() {
      console.log(this.source);
      this.$refs["sound"].play();
    }
  },
  mounted() {
    if (this.playOnMounted) {
      this.play();
    }
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

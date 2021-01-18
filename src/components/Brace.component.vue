<template>
  <div class="brace-view">
    <div v-if="type === 'top'">
      <slot name="outside"></slot>
      <div class="brace-container top right left"></div>
      <slot name="inside"></slot>
    </div>
    <div v-else-if="type === 'bottom'">
      <slot name="inside"></slot>
      <div class="brace-container"></div>
      <slot name="outside"></slot>
    </div>
    <div v-else-if="type === 'left'" class="left-right">
      <slot name="outside"></slot>
      <div class="brace-container top right bottom"></div>
      <slot name="inside"></slot>
    </div>
    <div v-else class="left-right">
      <slot name="outside"></slot>
      <div class="brace-container top bottom left"></div>
      <slot name="inside"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBrace",
  components: {},
  props: {
    type: { type: String, required: false, default: "right" }
  }
};
</script>

<style scoped>
.brace-view {
  display: grid;
  height: 100%;
}

.brace-view.div {
  display: grid;
  height: 100%;
  width: 100%;
}

p {
  margin: 1em;
  display: grid;
  place-items: center;
}

.left-right {
  grid-auto-flow: column;
  display: grid;
  gap: 1em;
  height: 100%;
}

.brace-container {
  min-width: 0.5em;
  min-height: 0.5em;
}

.top {
  border-top: 0.15em solid black;
}
.bottom {
  border-bottom: 0.15em solid black;
}
.right {
  border-right: 0.15em solid black;
}
.left {
  border-left: 0.15em solid black;
}
</style>

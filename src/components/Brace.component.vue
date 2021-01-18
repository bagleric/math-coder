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
  min-width: 1em;
  min-height: 1em;
}

.top {
  border-top: 0.25em solid black;
}
.bottom {
  border-bottom: 0.25em solid black;
}
.right {
  border-right: 0.25em solid black;
}
.left {
  border-left: 0.25em solid black;
}
/* 
.brace {
  border-bottom: 0.25em solid;
  margin: 0 10%;
  width: 30%;
  height: 0.5em;
}

.brace:before,
.brace:after {
  content: "";
  width: 10%;
  height: 1em;
  position: absolute;
}

.bottom.left:before {
  border-bottom: 0.25em solid;
  border-bottom-left-radius: 1em;
  margin-left: -10%;
  margin-top: -0.5em;
}

.bottom.left:after {
  border-top: 0.25em solid;
  border-top-right-radius: 1em;
  margin-left: 30%;
  margin-top: 0.28em;
}

.top.left:before {
  border-top: 0.25em solid;
  border-top-left-radius: 1em;
  margin-left: -10%;
  margin-top: 0.285em;
}

.top.left:after {
  border-bottom: 0.25em solid;
  border-bottom-right-radius: 1em;
  margin-left: 30%;
  margin-top: -0.5em;
}

.bottom.right:before {
  border-top: 0.25em solid;
  border-top-left-radius: 1em;
  margin-left: -10%;
  margin-top: 0.28em;
}

.bottom.right:after {
  border-bottom: 0.25em solid;
  border-bottom-right-radius: 1em;
  margin-left: 30%;
  margin-top: -0.5em;
}

.top.right:before {
  border-bottom: 0.25em solid;
  border-bottom-left-radius: 1em;
  margin-left: -10%;
  margin-top: -0.5em;
}

.top.right:after {
  border-top: 0.25em solid;
  border-top-right-radius: 1em;
  margin-left: 30%;
  margin-top: 0.28em;
}

.brace.left.d {
  width: 20%;
}

.left.d:after {
  margin-left: 20%;
}

.brace.right.d {
  width: 40%;
}

.brace.right.d:after {
  margin-left: 40%;
}

.brace-container.side {
  width: 1.5em;
  flex-direction: column;
}

.side .brace {
  border-right: 0.25em solid;
  border-bottom: 0;
  margin: 10% 0;
  height: 30%;
  width: 0.5em;
}

.side .brace:before,
.side .brace:after {
  content: "";
  height: 10%;
  width: 1em;
  position: absolute;
}

.l.t:before {
  border-right: 0.25em solid;
  border-top-right-radius: 1em;
  margin-top: -10%;
  margin-left: -0.5em;
}

.l.t:after {
  border-left: 0.25em solid;
  border-bottom-left-radius: 1em;
  margin-top: 30%;
  margin-left: 0.5em;
}

.l.b:before {
  border-left: 0.25em solid;
  border-top-left-radius: 1em;
  margin-top: -10%;
  margin-left: 0.5em;
}

.l.b:after {
  border-right: 0.25em solid;
  border-bottom-right-radius: 1em;
  margin-left: -0.5em;
  margin-top: 30%;
}

.r.t:before {
  border-left: 0.25em solid;
  border-top-left-radius: 1em;
  margin-top: -10%;
  margin-left: 0.5em;
}

.r.t:after {
  border-right: 0.25em solid;
  border-bottom-right-radius: 1em;
  margin-top: 30%;
  margin-left: -0.5em;
}

.r.b:before {
  border-right: 0.25em solid;
  border-top-right-radius: 1em;
  margin-top: -10%;
  margin-left: -0.5em;
}

.r.b:after {
  border-left: 0.25em solid;
  border-bottom-left-radius: 1em;
  margin-left: 0.5em;
  margin-top: 30%;
}

.brace-container.side {
  width: 1.5em;
  flex-direction: column;
}

.side .brace {
  border-right: 0.25em solid;
  border-bottom: 0;
  margin: 1em 0;
  height: 60%;
  width: 0.5em;
}

.side .brace:before,
.side .brace:after {
  content: "";
  height: 10%;
  width: 1em;
  position: absolute;
}

.l.t:before {
  border-right: 0.25em solid;
  border-top-right-radius: 1em;
  margin-top: -1em;
  margin-left: -0.5em;
}

.l.t:after {
  border-left: 0.25em solid;
  border-bottom-left-radius: 1em;
  margin-top: 3em;
  margin-left: 0.28em;
}

.l.b:before {
  border-left: 0.25em solid;
  border-top-left-radius: 1em;
  margin-top: -1em;
  margin-left: 0.28em;
}

.l.b:after {
  border-right: 0.25em solid;
  border-bottom-right-radius: 1em;
  margin-left: -0.5em;
  margin-top: 3em;
}

.r.t:before {
  border-left: 0.25em solid;
  border-top-left-radius: 1em;
  margin-top: -1em;
  margin-left: 0.28em;
}

.r.t:after {
  border-right: 0.25em solid;
  border-bottom-right-radius: 1em;
  margin-top: 3em;
  margin-left: -0.5em;
}

.r.b:before {
  border-right: 0.25em solid;
  border-top-right-radius: 1em;
  margin-top: -1em;
  margin-left: -0.5em;
}

.r.b:after {
  border-left: 0.25em solid;
  border-bottom-left-radius: 1em;
  margin-left: 0.28em;
  margin-top: 3em;
} */
</style>

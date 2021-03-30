<template>
  <div class="parent-view-container">
    <div class="parent-view">
      <h1>Helpful Information</h1>
      <div class="instructions">
        <v-icon color="primary">mdi-clipboard-list</v-icon>
        <span>
          The outline of the study is 1) pre-test, 2) learning
          activities, and 3) post-test.
        </span>
        <v-icon color="primary">mdi-volume-plus</v-icon>
        <span>
          The test questions and activities have audio that plays automatically.
          Remember to adjust the volume.
        </span>
        <v-icon color="primary">mdi-account-child</v-icon>
        <span>
          Please allow your child to do as much as they can by themself. How they work through the questions will help us determine the effectiveness of this teaching method.
        </span>
        <v-icon color="primary">mdi-account-voice</v-icon>
        <span>
          The activities will provide verbal hints to aid your child. Their answers will not be reported to their teacher and will not affect their academic standing.
        </span>
        <v-icon color="primary">mdi-emoticon-happy</v-icon>
        <span>
          Thank you for allowing your child to participate!
        </span>
      </div>
      <h1>Setting up Your Device</h1>
      <h2>Computer</h2>
      <div class="instructions">
        <v-icon color="primary">mdi-fullscreen</v-icon>
        <span>
          Make the browser full screen or at least large enough for your
          child to see everything on the page.
        </span>
        <v-icon color="primary">mdi-cursor-pointer</v-icon>
        <span>
          Your child may use a trackpad, mouse, or touch screen.
        </span>
        <v-icon color="primary">mdi-refresh</v-icon>
        <span>
          If you can't see everything on the page (the "Run" button or the
          "Next" button) either scroll down or refresh the page.
        </span>
      </div>
      <h2>iPad or tablet</h2>
      <div class="instructions">
        <v-icon color="primary">mdi-refresh</v-icon>
        <span>
          If you can't see everything on the page (the "Run" button or the
          "Next" button) either scroll down or refresh the page.
        </span>
        <v-icon color="red">mdi-close-octagon</v-icon>
        <span>
          Not recommended for small tablets. This activity will not be effective on a small screen.
        </span>
      </div>
      <h2>Phone</h2>
      <div class="instructions">
        <v-icon color="red">mdi-close-octagon</v-icon>
        <span>
          Not recommended. This activity will not be effective on a small screen.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInfo"
};
</script>

<style scoped>
.parent-view-container {
  overflow: auto;
  height: 100%;
}
.parent-view {
  display: grid;
  gap: 1em;
  margin: auto;
  padding: 2em;
  max-width: 40em;
}

.instructions {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
  margin: 1em;
  align-items: center;
}

.instructions > :nth-child(odd) {
  align-self: start;
}

.coder-text {
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  font-size: larger;
}
</style>

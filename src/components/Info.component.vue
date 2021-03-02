<template>
  <div class="parent-view-container">
    <div class="parent-view">
      <h1>Information and Reminders</h1>
      <div class="instructions">
        <v-icon color="primary">mdi-clipboard-list</v-icon>
        <span>
          In review, the outline of the study is 1) pre-test, 2) learning
          activities, and 3) post-test.
        </span>
        <v-icon color="primary">mdi-list-status</v-icon>
        <span>
          It is okay if your child answers a question incorrectly. Their answers
          will not be reported to their teacher and will not affect their
          academic standing.
        </span>
        <v-icon color="primary">mdi-debug-step-over</v-icon>
        <span>
          If they don't know the answer to a test question they may skip that
          question.
        </span>
        <v-icon color="primary">mdi-account-voice</v-icon>
        <span>
          The activities will provide verbal hints if they do not fully address
          the prompt or if they type in an incorrect number.
        </span>
        <v-icon color="primary">mdi-volume-plus</v-icon>
        <span>
          The test questions and activities have audio that plays automatically.
          Remember to adjust the volume.
        </span>
        <v-icon color="primary">mdi-account</v-icon>
        <span>
          Allowing your child to do as much as they can by themself will help us
          learn more about how these activities influence their learning.
        </span>
        <v-icon color="primary">mdi-account-child</v-icon>
        <span>
          If they ask for help you may guide them. If they are in distress, you
          may help them.
        </span>
        <v-icon color="primary">mdi-account</v-icon>
        <span>
          Thank you for allowing your child to participate.
        </span>
      </div>
      <h1>Setting up the Device</h1>
      <h2>On a computer</h2>
      <div class="instructions">
        <v-icon color="primary">mdi-fullscreen</v-icon>
        <span>
          Make the browser full screen or is at least large enough for your
          child to have sufficient space to see everything on the page.
        </span>
        <v-icon color="primary">mdi-cursor-pointer</v-icon>
        <span>
          If you have a touch screen your child may use the touch screen.
        </span>
        <v-icon color="primary">mdi-refresh</v-icon>
        <span>
          If you can't see everything on the page (the "Run" button or the
          "Next" button) either scroll down or refresh the page.
        </span>
        <v-icon color="primary">mdi-mouse</v-icon>
        <span>
          When deciding between a trackpad or a mouse, either will work. It just
          depends on which one your child is more comfortable using.
        </span>
      </div>
      <h2>On an Ipad or tablet</h2>
      <div class="instructions">
        <v-icon color="primary">mdi-tablet</v-icon>
        <span>
          On the activity pages, if you are unable to see the "Run" button or
          other navigation, please attempt to scroll down. If it still does not
          appear into view, attempt refreshing the page. If problems persist,
          please contact one of the researchers.
        </span>
      </div>
      <h2>On a phone</h2>
      <div class="instructions">
        <v-icon color="primary">mdi-tablet-cellphone</v-icon>
        <span>
          If possible, we recommend using a larger screen. If you can, please
          use an Ipad, tablet, or computer.
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

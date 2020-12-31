<template>
  <div class="post-activity">
    <AppPostActivity :moduleId="moduleId"></AppPostActivity>
  </div>
</template>

<script>
import store from '@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json'
import AppPostActivity from '@/components/PostActivity.component.vue'

export default {
  name: 'ViewPostActivity',
  props: {
    moduleId: { required: true, type: String }
  },
  data: function () {
    return {
      store
    }
  },
  components: { AppPostActivity }
}
</script>

<style scoped>
.post-activity {
  height: 100%;
  padding: 2em;
}
</style>

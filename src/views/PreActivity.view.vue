<template>
  <div class="pre-activity-view">
    <AppPreActivity :moduleId="moduleId"></AppPreActivity>
  </div>
</template>

<script>
// import FormulateInput from
import store from '@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json'
import AppPreActivity from '@/components/PreActivity.component.vue'

export default {
  name: 'PreActivity',
  data: function () {
    return {
      store
    }
  },
  props: {
    moduleId: { required: true, type: String }
  },
  components: { AppPreActivity }
}
</script>

<style scoped>
.pre-activity-view {
  height: 100%;
}
</style>

<script>
// import VueSanitize from "vue-sanitize";
// let defaults = VueSanitize.defaults;

export default {
  name: 'AppRenderHtml',
  props: {
    html: {
      required: true,
      type: String
    }
  },
  render (createRender) {
    // const clean = this.$sanitize(this.html, {
    //   allowedTags: defaults.allowedTags.concat(['define', 'img']),
    //   allowedAttributes: {
    //     ...defaults.allowedAttributes,
    //     define: ['word'],
    //     div: ['style']
    //   }
    // })

    const render = {
      template: `<span>${this.html}</span>`,
      data: () => ({
        framework: 'Vue'
      })
    }
    return createRender(render)
  }
}
</script>

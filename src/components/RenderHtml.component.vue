<script>
// import VueSanitize from "vue-sanitize";
// let defaults = VueSanitize.defaults;
import get from "lodash/get";

export default {
  name: "AppRenderHtml",
  props: {
    html: {
      required: true,
      type: String
    },
    parentTag: {
      type: String
    },
    hasParentTag: {
      type: Boolean,
      default: true
    }
  },
  render(createRender) {
    // const clean = this.$sanitize(this.html, {
    //   allowedTags: defaults.allowedTags.concat(['define', 'img']),
    //   allowedAttributes: {
    //     ...defaults.allowedAttributes,
    //     define: ['word'],
    //     div: ['style']
    //   }
    // })

    const parentTag = get(this, "parentTag", "span");
    if (!this.hasParentTag) {
      return createRender({
        template: `${this.html}`,
        data: () => ({
          framework: "Vue"
        })
      });
    }
    const render = {
      template: `<${parentTag}>${this.html}</${parentTag}>`,
      data: () => ({
        framework: "Vue"
      })
    };
    return createRender(render);
  }
};
</script>

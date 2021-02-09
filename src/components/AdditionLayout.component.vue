<template>
  <div class="row-column-layout">
    <div class="layout-view">
      <div
        class="addition-row"
        v-for="(row, rowIndex) in collectionRows"
        :key="rowIndex"
      >
        <span class="row-label"> {{ row.length }}</span>
        <span>
          <AppRenderHtml
            v-for="(item, itemIndex) in row"
            :key="itemIndex"
            :html="item"
            :hasParentTag="false"
          />
        </span>
      </div>
    </div>
    <!-- <div class="totals-label" v-if="c_showTotalsLabel">
      <span>
        <span>TOTAL ITEMS</span>
        <span class="label-group">
          <span class="count">{{ c_numItems }}</span>
          <span class="count-label">items</span>
        </span>
      </span>
    </div> -->
  </div>
</template>

<script>
import AppRenderHtml from "@/components/RenderHtml.component.vue";
import AdditionSentence from "@/components/AdditionSentence.component.vue";
import reduce from "lodash/reduce";

export default {
  name: "AdditionLayout",
  components: { AppRenderHtml, AdditionSentence },
  props: {
    numColumns: { type: Number, default: 0 },
    numRows: { type: Number, default: 0 },
    collectionRows: { type: Array, default: [] }
  },
  computed: {
    c_numItems() {
      return reduce(
        this.collectionRows,
        (sum, n) => {
          return sum + n.length;
        },
        0
      );
    },
    c_showTotalsLabel() {
      return this.c_numItems > 0;
    }
  },
  methods: {}
};
</script>

<style scoped>
.row-column-layout {
  display: grid;
  gap: 2em;
  grid-template: "layout-view totals-label" auto / 1fr auto;
}

.layout-view {
  width: max-content;
  grid-area: layout-view;
  align-self: start;
  gap: 0.5em;
}

.totals-label {
  padding: 0 1em;
  width: max-content;
  place-self: stretch;
  border-left: 1px solid black;
  justify-items: center;
  display: grid;
  gap: 1em;
  grid-area: totals-label;
}

.label-group {
  display: grid;
  width: min-content;
  place-items: baseline;
  height: min-content;
  grid-template: "count label" auto / auto auto;
}

.count {
  grid-area: count;
  font-size: xx-large;
  font-weight: bolder;
}

.count-label {
  grid-area: label;
  font-size: x-small;
}

.addition-row {
  display: flex;
  align-items: center;
}

.row-label {
  font-weight: bolder;
  font-size: larger;
  margin: 0 0.5em;
}
</style>

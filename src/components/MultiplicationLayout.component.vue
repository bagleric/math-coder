<template>
  <div class="layout-view">
    <div class="row-label">
      <AppBrace v-if="c_showRowLabel" type="right">
        <template v-slot:outside>
          <span class="label-group">
            <span class="count">{{ rows }}</span>
            <span class="count-label">Groups</span>
          </span>
        </template>
      </AppBrace>
    </div>
    <div class="column-label">
      <AppBrace v-if="c_showColumnLabel" type="top">
        <template v-slot:outside>
          <span class="label-group">
            <span class="count">{{ columns }}</span>
            <span class="count-label">Items</span>
          </span>
        </template>
      </AppBrace>
    </div>
    <div :class="c_itemsGridClass" :style="c_gridStyle">
      <AppRenderHtml
        :class="getItemClass(itemIndex)"
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        :html="item"
        :hasParentTag="false"
      />
    </div>
  </div>
</template>

<script>
import AppRenderHtml from "@/components/RenderHtml.component.vue";
import AppBrace from "@/components/Brace.component.vue";
export default {
  name: "MultiplicationLayout",
  components: { AppRenderHtml, AppBrace },
  props: {
    columns: { type: Number, default: 0 },
    rows: { type: Number, default: 0 },
    items: { type: Array, default: [] },
    showColumns: { type: Boolean, default: false }
  },
  computed: {
    c_itemsGridClass() {
      return `items-grid highlight-row`;
    },
    c_gridStyle() {
      let value = "";
      if (!this.showColumns) {
        value = "grid-auto-flow: columns; ";
      }

      return `${value} grid-template-columns: repeat(${this.columns}, auto);`;
    },
    c_numItems() {
      return this.items.length;
    },
    c_showColumnLabel() {
      return this.columns > 1;
    },
    c_showRowLabel() {
      return this.rows > 1;
    },
    c_showTotalsLabel() {
      return this.c_numItems > 0;
    }
  },
  methods: {
    getItemClass(index) {
      if (this.rows > 1) {
        if (this.showColumns && !(index % this.columns)) {
          return "marked-item";
        } else if (!this.showColumns && index < this.columns) {
          return "marked-item";
        }
      }
      return "";
    }
  }
};
</script>

<style scoped>
.row-column-layout {
}

.layout-view {
  width: max-content;
  display: grid;
  align-self: start;
  gap: 0.5em;
  grid-template:
    ".         column-label" auto
    "row-label items-grid  " auto / 80px auto;
}

.row-label {
  min-width: 5em;
  grid-area: row-label;
}

.column-label {
  min-height: 4em;
  grid-area: column-label;
}

.items-grid {
  grid-area: items-grid;
  row-gap: 0.5em;
  display: grid;
}
.marked-item {
  background: lightblue;
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

.equal {
  font-size: xx-large;
  font-weight: bolder;
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
</style>

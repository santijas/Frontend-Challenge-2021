<template>
  <div class="rowgrid">
    <div v-for="book in booksArray" :key="book.tittle" class="gridcard" @click="redirectGoogle(book.title)">
      <img v-bind:src="book.book_image" v-bind:alt="book.title" />
      <div class="grid_info">
        <h2>{{ formatTitle(book.title) }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: ["booksArray", "redirectGoogle"],
  methods: {
    formatTitle(book) {
      return _.startCase(book.toLowerCase());
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.rowgrid {
  width: 100%;
  display: flex;
  padding: 16px 32px;
  flex-wrap: wrap;
  justify-content: center;
}

.gridcard {
  @include base-card;
  background-color: $color-secondary;
  width: 160px;
  height: 300px;
  margin: 32px 10px;
  text-align: center;
  align-items: center;
  &:hover {
    background-color: $color-secondary-dark;
  }
  .grid_info {
    h2 {
      font-size: 16px;
      font-weight: bold;
      color: $color-font-primary;
      margin-bottom: 6px;
    }
  }
  > img {
    min-width: 160px;
    min-height: 230px;
    width: 160px;
    height: 230px;
    padding: 10px;
  }
}
</style>
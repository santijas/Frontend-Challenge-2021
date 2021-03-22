<template>
  <div>
    <ul>
      <li v-for="book in booksArray" :key="book.tittle" class="list" @click="redirectGoogle(book.title)">
        <div class="list_cover">
          <img v-bind:src="book.book_image" v-bind:alt="book.title" />
        </div>
        <div class="list_info">
          <h2>{{ formatTitle(book.title) }}</h2>
          <span>{{ book.author }}</span>
          <p>{{ book.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import startCase from 'lodash/startCase.js';

export default {
  props: ["booksArray", "redirectGoogle"],
  methods: {
    formatTitle(book) {
      return startCase(book.toLowerCase());
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;

  .list {
    padding: 0 32px;
    width: 100%;
    max-height: 176px;
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-bottom: 16px;
    &:hover {
      background-color: $color-secondary-dark;
      cursor: pointer;
    }
  }
}

.list_info {
  padding-left: 32px;
  h2 {
    font-size: 18px;
    font-weight: bold;
    color: $color-font-primary;
    margin-bottom: 6px;
  }
  span {
    font-size: 12px;
    color: $color-font-primary-light;
  }
  p {
    font-size: 12px;
    color: $color-font-primary;
    margin-top: 8px;
    margin-bottom: 16px;
    width: 85%;
  }
}

img {
  min-width: 96px;
  min-height: 144px;
  width: 96px;
  height: 144px;
  border-radius: 4px;
}
</style>
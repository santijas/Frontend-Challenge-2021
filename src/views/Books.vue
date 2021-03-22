<template>
  <div class="container">
    <div class="searchbox">
      <div class="form">
        <input type="text" placeholder="Search book by Title..." name="search" v-model="searchText" v-on:keyup.enter="search"/>
        <button type="submit" @click="search">
          <font-awesome-icon class="searchicon" icon="search" />
        </button>
      </div>
    </div>
    <div class="nav">
      <div class="index">
        <router-link to="/" class="link">Categories</router-link>
        <span>></span>
        <h1>{{ formatTextCategory() }}</h1>
      </div>
      <div class="view_buttons">
        <font-awesome-icon :class="{ active: actualView == 'list' }" class="iconview" icon="list" @click="actualView = 'list'"/>
        <font-awesome-icon :class="{ active: actualView == 'grid' }" class="iconview" icon="th"  @click="actualView = 'grid'"/>
      </div>
    </div>
    <div class="resultados">
      <GridItems :redirectGoogle="redirectGoogle" :booksArray="booksArray" v-if="actualView === 'grid'"/>
      <ListItems :redirectGoogle="redirectGoogle" :booksArray="booksArray" v-if="actualView === 'list'"/>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/api.service.js";
import Formatters from "@/utils/formatters.js";
import ListItems from "@/components/ListItems.vue";
import GridItems from "@/components/GridItems.vue";
import startCase from 'lodash/startCase.js';

export default {
  name: "Books",
  data() {
    return {
      booksArray: [],
      category: this.$store.getters.categoryCode,
      actualView: "list",
      searchText: null,
    };
  },
  components: {
    ListItems,
    GridItems,
  },
  methods: {
    async fetchBooks() {
      try {
        this.booksArray = await ApiService.getBooks(this.category);
      } catch (err) {
        this.$toasted.show(err, { type: "error", duration: "2500"});
      }
    },

    formatTextCategory() {
      return startCase(this.category);
    },

    async search() {
      await this.fetchBooks();
      this.booksArray = this.booksArray.filter((book) =>
        book.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },

    redirectGoogle(title) {
      const formatTitle = Formatters.splitAndJoin(title, " ", "+");
      window.open(`https://www.google.com/search?q=${formatTitle}`);
    },
  },

  created() {
    this.fetchBooks();
  },
};
</script>

<style scoped lang="scss">

.searchbox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  padding-left: 32px;
  padding-right: 32px;

  .form {
    width: 100%;
    display: flex;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
    border-radius: 4px;

    button {
      width: 58px;
      height: 48px;
      padding: 0;
      margin: 0;
      border: none;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      background-color: $color-primary;
      color: $color-font-secondary;
      font-size: 20px;
      display: block;
    }

    .searchicon {
      font-size: 20px;
      color: $color-font-secondary;
    }

    input {
      width: 100%;
      height: 48px;
      border: none;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
      padding-left: 16px;
      margin: 0;
      display: block;
      font-size: 13px;
      font-weight: 300;
    }
  }
}

.nav {
  width: 100%;
  display: flex;
  padding: 16px 32px;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  justify-content: space-between;

  .index {
    display: flex;
  }

  .link {
    color: $color-primary;
    margin-right: 4px;
  }
  span {
    margin-right: 4px;
  }
}

.resultados {
  width: 100%;
}

.iconview {
  color: $color-font-primary-light;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
}

.active {
  color: $color-primary;
}

.view_buttons {
  display: flex;
}
</style>

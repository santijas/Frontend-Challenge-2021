<template>
  <div class="container">
    <div class="nav">
      <h1>Categories</h1>
      <p>Select a category to search books.</p>
    </div>
    <div class="category_contenedor">
      <div class="card" v-for="(category, index) in categoriesArray" :key="category.display_name"  @click="selectCategory(category.list_name_encoded)" >
        <div class="category_title">
          <svg class="bookmark" width="11" height="23" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path :class="`categorycolor-${index}`" d="M0 23V0H11V23L5.5 17.3509L0 23Z" fill="black" />
          </svg>
          <h2 :class="`categorycolor-${index}`">{{ category.display_name }}</h2>
          <span>see books ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/api.service.js";

export default {
  name: "Home",
  data() {
    return {
      categoriesArray: [],
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const getCategories = await ApiService.getCategories();
        this.categoriesArray = getCategories.splice(0, 10);
      } catch (err) {
        this.$toasted.show(err, { type: "error", duration: "2500" });
      }
    },

    selectCategory(searchcode) {
      this.$store.commit("changeCategoryCode", searchcode);
      this.$router.push("/books");
    },
  },

  created() {
    this.fetchCategories();
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.nav {
  width: 100%;
  display: flex;
  padding: 16px 46px 0;
  font-weight: bold;
  font-size: 16px;
  flex-direction: column;

  p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
  }

  h1 {
    margin-top: 20px;
    font-size: 18px;
  }
}

.category_contenedor {
  width: 100%;
  display: flex;
  padding: 16px 32px;
  flex-wrap: wrap;
}

.card {
  @include base-card;
  background-color: $color-card;
  width: 150px;
  height: 218px;
  margin: 32px 15px;
  position: relative;

  &:hover {
    background-color: $color-card-secondary;
    box-shadow: 0px 1px 1px $color-shadow;
  }

  h2 {
    margin-top: 21px;
    font-weight: 700;
    text-align: left;
    font-size: 14px;
  }

  .bookmark {
    width: 11px;
    height: 23px;
    position: absolute;
    top: 0;
  }

  span {
    position: absolute;
    bottom: 16px;
    font-weight: 300;
    font-size: 11px;
  }
}
</style>
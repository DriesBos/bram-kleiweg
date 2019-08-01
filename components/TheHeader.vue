<template>
  <header>
    <ul
      v-if="this.$route.name === 'blog' || this.$route.name === 'category-categoryId'"
      class="header-Horizontal"
    >
      <nuxt-link class="header-Logo header-Item" tag="li" to="/">
        <p class="logo">bram kleiweg</p>
      </nuxt-link>

      <ul class="header-Filter">
        <li>
          <p>Filter</p>
        </li>
        <nuxt-link tag="li" to="/blog" v-bind:class="{active: !selectedCategory}">
          <a>All Projects</a>
        </nuxt-link>
        <li
          v-for="category in categories"
          v-bind:class="{active: selectedCategory == category.id}"
          v-bind:key="category.id"
        >
          <router-link tag="a" :to="'/category/' + category.id">{{ category.name }}</router-link>
        </li>
      </ul>

      <nuxt-link class="header-About header-Item" tag="li" to="/about">
        <p>About</p>
      </nuxt-link>
    </ul>
    <ul
      v-if="this.$route.name === 'blog-postId' || this.$route.name === 'about'"
      class="header-Vertical"
    >
      <nuxt-link class="header-Item" tag="li" to="/blog">
        <img class="icon icon-Close" src="@/assets/images/close.svg" />
      </nuxt-link>
    </ul>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    categories: state => state.categories.list,
    selectedCategory(state) {
      return this.$route.params.categoryId
    }
  })
}
</script>

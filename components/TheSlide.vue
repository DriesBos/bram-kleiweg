<template>
  <section class="view-Landing">
    <div>
      <h1 class="logo">bram kleiweg</h1>
    </div>

    <div class="menu-Toggle menu-Collapsed">
      <ul>
        <li>
          <p class="logo">bram kleiweg</p>
        </li>
        <li>
          <img class="icon icon-Close" src="@/assets/images/close.svg" />
        </li>
      </ul>
    </div>

    <div class="menu-Toggle menu-Open">
      <ul>
        <li>
          <p class="logo">bram kleiweg</p>
        </li>
        <li>
          <p class="logo">menu toggle</p>
        </li>
        <ul class="header-Filter">
          <li>
            <p>Projects</p>
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
        <li>
          <p>COUNTER</p>
        </li>
      </ul>
    </div>
  </section>
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

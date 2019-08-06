<template>
  <section class="theSlide" :class="[{slider: slider}, {peek: peek}, {menu: menu}]">
    <!-- Landing text -->
    <div
      v-if="slider"
      @click="toggleSliderStore"
      @mouseover="toTruePeekStore"
      @mouseleave="toFalsePeekStore"
    >
      <h1 class="logo">bram kleiweg</h1>
    </div>

    <!-- Collapsed -->
    <div class="theSlide-Collapsed">
      <div class="menu-Toggle">
        <ul>
          <li v-if="!slider && !menu">
            <img class="icon icon-Close" src="@/assets/images/hamburger.svg" />
          </li>
        </ul>
      </div>

      <div
        v-if="!slider"
        @click="toggleSliderStore"
        v-on:click.once="menu = false"
        @mouseover="menu = true"
        class="menu-Logo"
      >
        <ul>
          <li>
            <h3 class="logo">bram kleiweg</h3>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="!menu && !slider" class="menu-Slider menu-Clickarea" @mouseover="menu = true"></div>

    <!-- Menu -->
    <div v-if="menu" class="theSlide-Menu" @mouseleave="menu = false">
      <ul>
        <nuxt-link tag="li" to="/" v-bind:class="{active: !selectedCategory}">
          <a>All Projects</a>
        </nuxt-link>
        <li
          v-for="category in categories"
          v-bind:class="{active: selectedCategory == category.id}"
          v-bind:key="category.id"
        >
          <router-link tag="a" :to="'/category/' + category.id">{{ category.name }}</router-link>
        </li>
        <nuxt-link tag="li" to="/about">
          <a>About</a>
        </nuxt-link>
        <li></li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      menu: true
    }
  },
  computed: mapState({
    categories: state => state.categories.list,
    selectedCategory(state) {
      return this.$route.params.categoryId
    },
    slider: state => state.slider.slider,
    peek: state => state.slider.peek
  }),
  methods: mapMutations({
    toggleSliderStore: 'slider/toggleSlider',
    toTruePeekStore: 'slider/peekToTrue',
    toFalsePeekStore: 'slider/peekToFalse'
  })
}
</script>

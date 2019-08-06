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

    <!-- Toggle -->
    <div class="menu-Slider menu-Toggle">
      <ul>
        <transition name="menuFade">
          <li v-if="!slider && !menu">
            <img class="icon icon-Close" src="@/assets/images/hamburger.svg" />
          </li>
        </transition>
      </ul>
    </div>

    <div v-if="!menu && !slider" class="menu-Slider menu-Clickarea" @mouseover="menu = true"></div>

    <!-- Menu -->
    <transition name="menuFade">
      <div v-if="menu" class="menu-Slider menu-Open" @mouseleave="menu = false">
        <ul>
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
          <nuxt-link class="header-About header-Item" tag="li" to="/about">
            <p>About</p>
          </nuxt-link>
          <li></li>
        </ul>
      </div>
    </transition>

    <!-- Logo -->
    <transition name="menuFade">
      <div
        v-if="!slider"
        @click="toggleSliderStore"
        v-on:click.once="menu = false"
        @mouseover="menu = true"
        class="menu-Slider menu-Logo"
      >
        <ul>
          <li>
            <p class="logo">bram kleiweg</p>
          </li>
        </ul>
      </div>
    </transition>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      menu: false
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

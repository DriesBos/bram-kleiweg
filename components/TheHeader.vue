<template>
  <header>
    <ul class="header-Horizontal">
      <nuxt-link v-if="this.$route.name === 'blog'" class="header-Logo" tag="li" to="/">
        <p class="logo">Bram Kleiweg</p>
      </nuxt-link>
      <nuxt-link v-if="this.$route.name === 'blog'" class="header-Item" tag="li" to="/about">
        <p>About</p>
      </nuxt-link>
      <nuxt-link v-if="this.$route.name === 'blog'" class="header-Item" tag="li" to="/abouttwo">
        <p>About</p>
      </nuxt-link>
      <li v-if="this.$route.name === 'blog-postId' || this.$route.name === 'about'">
        <p>&nbsp;</p>
      </li>
    </ul>
    <ul class="header-Vertical">
      <nuxt-link
        v-if="this.$route.name === 'blog-postId' || this.$route.name === 'about'"
        class="header-Item"
        tag="li"
        to="/blog"
      >
        <img class="icon-Close" src="@/assets/images/close.svg">
      </nuxt-link>
      <nuxt-link v-if="this.$route.name === 'abouttwo'" class="header-Item" tag="li" to="/blog">
        <img class="icon-Close" src="@/assets/images/close-white.svg">
      </nuxt-link>
    </ul>
  </header>
</template>

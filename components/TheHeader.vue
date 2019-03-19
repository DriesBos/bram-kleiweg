<template>
  <header>
    <ul class="header-Horizontal">
      <nuxt-link v-if="this.$route.name === 'blog'" class="header-Logo" tag="li" to="/">
        <p>bram kleiweg</p>
      </nuxt-link>
      <nuxt-link v-if="this.$route.name === 'blog'" class="header-Item" tag="li" to="/about">
        <p>about</p>
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
        <img src="@/assets/images/arrow.svg">
        <p>back</p>
      </nuxt-link>
    </ul>
  </header>
</template>

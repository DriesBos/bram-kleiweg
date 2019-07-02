<template>
  <header>
    <ul v-if="this.$route.name === 'blog'" class="header-Horizontal">
      <nuxt-link v-if="this.$route.name === 'blog'" class="header-Logo header-Item" tag="li" to="/">
        <p class="logo">bram kleiweg</p>
      </nuxt-link>
      <li class="header-Filter">
        <nuxt-link v-if="this.$route.name === 'blog'" class="header-Item" tag="a" to="/">
          <p>Work</p>
        </nuxt-link>
      </li>
      <nuxt-link
        v-if="this.$route.name === 'blog'"
        class="header-About header-Item"
        tag="li"
        to="/about"
      >
        <p>About</p>
      </nuxt-link>

      <li v-if="this.$route.name === 'blog-postId' || this.$route.name === 'about'">
        <p>&nbsp;</p>
      </li>
    </ul>
    <ul
      v-if="this.$route.name === 'blog-postId' || this.$route.name === 'about'"
      class="header-Vertical"
    >
      <nuxt-link class="header-Item" tag="li" to="/blog">
        <img class="icon-Close" src="@/assets/images/close.svg" />
      </nuxt-link>
      <nuxt-link v-if="this.$route.name === 'abouttwo'" class="header-Item" tag="li" to="/blog">
        <img class="icon-Close" src="@/assets/images/close-white.svg" />
      </nuxt-link>
    </ul>
  </header>
</template>

/* eslint-disable */

String.prototype.replaceAll = function(search, replacement) {
  const target = this
  return target.replace(new RegExp(search, 'g'), replacement)
}

export default {
  actions: {
    async nuxtServerInit({ commit, dispatch }, { app }) {
      const getPosts = await app.$storyapi.get('cdn/stories', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'blog/'
      })

      const posts = getPosts.data.stories.map(bp => {
        return {
          id: bp.slug,
          thumbnail: bp.content.thumbnail,
          title: bp.content.title,
          content: bp.content.content,
          tag_list: bp.tag_list
        }
      })

      commit('projects/update', posts)

      const getTags = await app.$storyapi.get('cdn/tags', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })

      const tags = getTags.data.tags.map(tag => {
        tag.id = tag.name.replaceAll(' ', '-').toLowerCase()
        return tag
      })

      commit('categories/update', tags)
    }
  }
}

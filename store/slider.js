export const state = () => ({
  slider: true,
  peek: false
})

export const mutations = {
  toggleSlider(state) {
    state.slider = !state.slider
    state.peek = false
  },
  peekToTrue(state) {
    state.peek = true
  },
  peekToFalse(state) {
    state.peek = false
  }
}

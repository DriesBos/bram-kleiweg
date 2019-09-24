export const state = () => ({
  slider: true
})

export const mutations = {
  toggleSlider(state) {
    state.slider = !state.slider
  }
}

/**
 * @name CursorModule
 *
 * This module handles all the different looks of the cursor
 *
 * @state cursorEnlarged - contains whether the cursor is enlarged or not
 * @state cursorNegative - contains whether the cursor has negative filter applied or not
 *
 * @mutation makeCursorEnlarged - enlarges cursor
 * @mutation makeCursorNegative - applies negative filter to the cursor
 * @mutation makeCursorNormal - returns the cursor to its default state
 */

export const state = () => ({
  cursorEnlarged: false,
  cursorNegative: false,
})

export const mutations = {
  makeCursorEnlarged: (state) => {
    state.cursorEnlarged = true
  },
  makeCursorNegative: (state) => {
    state.cursorNegative = true
  },
  makeCursorNormal: (state) => {
    state.cursorEnlarged = false
    state.cursorNegative = false
  },
}

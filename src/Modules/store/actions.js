import {
  TOGGLE_SIDEBAR,
  HOVER_SIDEBAR
} from './constants'

export function toggleSidebar(payload) {
  return {
    type: TOGGLE_SIDEBAR,
    payload
  }
}

export function hoverSidebar(payload) {
  return {
    type: HOVER_SIDEBAR,
    payload
  }
}

import { REQUEST } from 'Stores'
import {
  LOAD_COURSES,
  LOAD_ORDER_COURSE,
  UPDATE_ORDER_COURSE,
  LOAD_COURSE,
  CREATE_COURSE,
  EDIT_COURSE,
  DELETE_COURSES
} from './constants'

export function loadCourses(payload) {
  return {
    type: REQUEST(LOAD_COURSES),
    payload
  }
}

export function loadOrderCourse(payload) {
  return {
    type: REQUEST(LOAD_ORDER_COURSE),
    payload
  }
}

export function updateOrderCourse(payload) {
  return {
    type: REQUEST(UPDATE_ORDER_COURSE),
    payload
  }
}

export function createCourse(payload) {
  return {
    type: REQUEST(CREATE_COURSE),
    payload
  }
}

export function editCourse(payload) {
  return {
    type: REQUEST(EDIT_COURSE),
    payload
  }
}

export function loadCourse(payload) {
  return {
    type: REQUEST(LOAD_COURSE),
    payload
  }
}

export function deleteCourses(payload) {
  return {
    type: REQUEST(DELETE_COURSES),
    payload
  }
}

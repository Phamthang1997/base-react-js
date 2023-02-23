import { LOCATION_CHANGE } from 'connected-react-router'

import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from 'Stores'
import {
  LOAD_COURSES,
  LOAD_ORDER_COURSE,
  UPDATE_ORDER_COURSE,
  CREATE_COURSE,
  LOAD_COURSE,
  EDIT_COURSE,
  DELETE_COURSES
} from './constants'

export const initialState = {
  isLoading: false,
  error: null,
  courses: [],
  course: {},
  pagination: {},
  filter: {},
  order: [],
  isSubmitting: false
}

function loadCourses(state) {
  return updateObject(state, {
    isLoading: true
  })
}

function coursesLoaded(state, { payload }) {
  const { courses, pagination, filter } = payload
  return updateObject(state, {
    isLoading: false,
    courses,
    pagination,
    filter
  })
}

function coursesLoadingError(state, { error }) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

function loadOrderCourse(state) {
  return updateObject(state, {
    isLoading: true
  })
}

function orderCourseLoaded(state, { payload }) {
  const { order } = payload
  return updateObject(state, {
    isLoading: false,
    order
  })
}

function orderCourseLoadingError(state, { error }) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

function editOrderCourse(state) {
  return updateObject(state, {
    error: null,
    isSubmitting: true
  })
}

function editOrderCourseSuccess(state) {
  return updateObject(state, {
    isSubmitting: false
  })
}

function editOrderCourseError(state, { error }) {
  return updateObject(state, { error })
}

function loadCourse(state) {
  return updateObject(state, {
    isLoading: true
  })
}

function courseLoaded(state, { payload }) {
  const { course } = payload
  return updateObject(state, {
    isLoading: false,
    course
  })
}

function courseLoadingError(state, { error }) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

function createCourse(state) {
  return updateObject(state, {
    error: null,
    isSubmitting: true
  })
}

function createCourseSuccess(state) {
  return updateObject(state, {
    isSubmitting: false
  })
}

function createCourseError(state, { error }) {
  return updateObject(state, { error })
}

function editCourse(state) {
  return updateObject(state, {
    error: null,
    isSubmitting: true
  })
}

function editCourseSuccess(state) {
  return updateObject(state, {
    isSubmitting: false
  })
}

function editCourseError(state, { error }) {
  return updateObject(state, { error })
}

function deleteCourses(state) {
  return updateObject(state, {
    error: null,
    isSubmitting: true
  })
}

function deleteCoursesSuccess(state) {
  return updateObject(state, {
    isSubmitting: false
  })
}

function deleteCoursesError(state, { error }) {
  return updateObject(state, { error })
}

function resetState(state) {
  return updateObject(state, { ...initialState })
}

// Slice reducer
export default createReducer(initialState, {
  [REQUEST(LOAD_COURSES)]: loadCourses,
  [SUCCESS(LOAD_COURSES)]: coursesLoaded,
  [FAILURE(LOAD_COURSES)]: coursesLoadingError,

  [REQUEST(LOAD_ORDER_COURSE)]: loadOrderCourse,
  [SUCCESS(LOAD_ORDER_COURSE)]: orderCourseLoaded,
  [FAILURE(LOAD_ORDER_COURSE)]: orderCourseLoadingError,

  [REQUEST(UPDATE_ORDER_COURSE)]: editOrderCourse,
  [SUCCESS(UPDATE_ORDER_COURSE)]: editOrderCourseSuccess,
  [FAILURE(UPDATE_ORDER_COURSE)]: editOrderCourseError,

  [REQUEST(LOAD_COURSE)]: loadCourse,
  [SUCCESS(LOAD_COURSE)]: courseLoaded,
  [FAILURE(LOAD_COURSE)]: courseLoadingError,

  [REQUEST(CREATE_COURSE)]: createCourse,
  [SUCCESS(CREATE_COURSE)]: createCourseSuccess,
  [FAILURE(CREATE_COURSE)]: createCourseError,

  [REQUEST(EDIT_COURSE)]: editCourse,
  [SUCCESS(EDIT_COURSE)]: editCourseSuccess,
  [FAILURE(EDIT_COURSE)]: editCourseError,

  [REQUEST(DELETE_COURSES)]: deleteCourses,
  [SUCCESS(DELETE_COURSES)]: deleteCoursesSuccess,
  [FAILURE(DELETE_COURSES)]: deleteCoursesError,

  [LOCATION_CHANGE]: resetState
})

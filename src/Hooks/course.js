/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux'

import saga from 'Modules/course/registration_course/store/saga'
import reducer from 'Modules/course/registration_course/store/reducer'
import {
  makeSelectOrderCourse,
  makeSelectRegistrationCourses
} from 'Modules/course/registration_course/store/selectors'
import {
  loadCourses,
  loadOrderCourse,
  updateOrderCourse,
  loadCourse,
  createCourse,
  editCourse,
  deleteCourses
} from 'Modules/course/registration_course/store/actions'
import { useInjectSaga, useInjectReducer } from 'Stores'

export const useRegistrationCourses = () => {
  useInjectSaga({ key: 'registrationCourses', saga })
  useInjectReducer({ key: 'registrationCourses', reducer })

  const { courses, pagination, filter, isLoading, error } = useSelector(makeSelectRegistrationCourses())

  const dispatch = useDispatch()
  const loadCoursesAction = (payload) => dispatch(loadCourses(payload))
  const loadOrderCourseAction = (payload) => dispatch(loadOrderCourse(payload))
  const updateOrderCourseAction = (payload) => dispatch(updateOrderCourse(payload))
  const deleteCoursesAction = (payload) => dispatch(deleteCourses(payload))

  return {
    courses,
    pagination,
    filter,
    isLoading,
    error,
    loadCoursesAction,
    loadOrderCourseAction,
    updateOrderCourseAction,
    deleteCoursesAction
  }
}

export const useSortCourses = () => {
  const { isLoading, error } = useSelector(makeSelectRegistrationCourses())
  const order = useSelector(makeSelectOrderCourse())

  const dispatch = useDispatch()
  const updateOrderCourseAction = (payload) => dispatch(updateOrderCourse(payload))

  return {
    order,
    isLoading,
    error,
    updateOrderCourseAction
  }
}

export const useCreateCourse = () => {
  useInjectSaga({ key: 'registrationCourses', saga })
  useInjectReducer({ key: 'registrationCourses', reducer })

  const { isSubmitting, error } = useSelector(makeSelectRegistrationCourses())

  const dispatch = useDispatch()
  const createCourseAction = (payload) => dispatch(createCourse(payload))

  return {
    isSubmitting,
    error,
    createCourseAction
  }
}

export const useUpdateCourse = () => {
  useInjectSaga({ key: 'registrationCourses', saga })
  useInjectReducer({ key: 'registrationCourses', reducer })

  const { course, isSubmitting, error } = useSelector(makeSelectRegistrationCourses())

  const dispatch = useDispatch()
  const loadCourseAction = (payload) => dispatch(loadCourse(payload))
  const editCourseAction = (payload) => dispatch(editCourse(payload))

  return {
    course,
    isSubmitting,
    error,
    loadCourseAction,
    editCourseAction
  }
}

export const useLoadCourse = () => {
  useInjectSaga({ key: 'registrationCourses', saga })
  useInjectReducer({ key: 'registrationCourses', reducer })

  const { course } = useSelector(makeSelectRegistrationCourses())

  const dispatch = useDispatch()
  const loadCourseAction = (payload) => dispatch(loadCourse(payload))

  return {
    course,
    loadCourseAction
  }
}

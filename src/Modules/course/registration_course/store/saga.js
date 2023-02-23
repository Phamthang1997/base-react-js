import {
  put, takeLatest, select
} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { notification } from 'antd'
import i18next from 'I18n'

import { REQUEST, SUCCESS, FAILURE } from 'Stores'
import {
  getCourses,
  getOrderCourse,
  updateOrderCourse,
  createCourse,
  editCourse,
  getCourse,
  deleteCourse
} from 'APIs'

import { RoutesName } from 'Modules/course/routes'
import {
  LOAD_COURSES,
  LOAD_ORDER_COURSE,
  UPDATE_ORDER_COURSE,
  LOAD_COURSE,
  CREATE_COURSE,
  EDIT_COURSE,
  DELETE_COURSES
} from './constants'
import { makeSelectRegistrationCourses } from './selectors'

i18next.loadNamespaces(['common'])

export function* loadCoursesSaga({ payload }) {
  try {
    const { data } = yield getCourses(payload)
    const { result: courses, ...pagination } = data
    yield put({
      type: SUCCESS(LOAD_COURSES),
      payload: {
        courses,
        pagination,
        filter: payload?.params?.filter
      }
    })
  } catch (error) {
    yield put({
      type: FAILURE(LOAD_COURSES),
      error
    })
  }
}

export function* loadOrderCourseSaga({ payload }) {
  try {
    const { data } = yield getOrderCourse(payload)
    yield put({
      type: SUCCESS(LOAD_ORDER_COURSE),
      payload: {
        order: data
      }
    })
  } catch (error) {
    yield put({
      type: FAILURE(LOAD_ORDER_COURSE),
      error
    })
  }
}

export function* updateOrderCourseSaga({ payload }) {
  const { pageSize, currentPage } = payload
  try {
    const { code } = yield updateOrderCourse(payload)
    if (code === 200) {
      yield put({
        type: SUCCESS(UPDATE_ORDER_COURSE)
      })
      yield put({
        type: REQUEST(LOAD_ORDER_COURSE)
      })
      yield put({
        type: REQUEST(LOAD_COURSES),
        payload: {
          userId: '1', // get from auth store
          params: {
            page: currentPage,
            limit: pageSize
          }
        }
      })
      notification.success({
        message: i18next.t('success'),
        description: i18next.t('common:message.sort_success'),
        duration: 2
      })
    }
  } catch (error) {
    yield put({
      type: FAILURE(UPDATE_ORDER_COURSE),
      error
    })
  }
}

export function* createCourseSaga({ payload }) {
  try {
    const { code } = yield createCourse(payload)
    if (code === 200) {
      yield put({
        type: SUCCESS(CREATE_COURSE)
      })
      yield put({
        type: REQUEST(LOAD_ORDER_COURSE)
      })
      yield put({
        type: REQUEST(LOAD_COURSES),
        payload: {
          userId: '1' // get from auth store
        }
      })
      notification.success({
        message: i18next.t('success'),
        description: i18next.t('common:message.create_success'),
        duration: 2
      })
      yield put(push(RoutesName.REGISTRATION_COURSE))
    }
  } catch (error) {
    yield put({
      type: FAILURE(CREATE_COURSE),
      error
    })
  }
}

export function* editCourseSaga({ payload }) {
  try {
    const { code } = yield editCourse(payload)
    if (code === 200) {
      yield put({
        type: SUCCESS(EDIT_COURSE)
      })
      yield put({
        type: REQUEST(LOAD_ORDER_COURSE)
      })
      yield put({
        type: REQUEST(LOAD_COURSES),
        payload: {
          userId: '1' // get from auth store
        }
      })
      notification.success({
        message: i18next.t('success'),
        description: i18next.t('common:message.update_success'),
        duration: 2
      })
      yield put(push(RoutesName.REGISTRATION_COURSE))
    }
  } catch (error) {
    yield put({
      type: FAILURE(EDIT_COURSE),
      error
    })
  }
}

export function* loadCourseSaga({ payload }) {
  try {
    const { data: course } = yield getCourse(payload)
    yield put({
      type: SUCCESS(LOAD_COURSE),
      payload: { course }
    })
  } catch (error) {
    yield put({
      type: FAILURE(LOAD_COURSE),
      error
    })
  }
}

export function* deleteCoursesSaga({ payload }) {
  const { callback, pageSize, currentPage } = payload
  try {
    const { code } = yield deleteCourse(payload)
    if (code === 200) {
      yield put({
        type: SUCCESS(DELETE_COURSES)
      })
      yield put({
        type: REQUEST(LOAD_ORDER_COURSE)
      })

      const { filter } = yield select(makeSelectRegistrationCourses())
      yield put({
        type: REQUEST(LOAD_COURSES),
        payload: {
          params: {
            page: currentPage,
            limit: pageSize,
            filter
          }
        }
      })
      notification.success({
        message: i18next.t('success'),
        description: i18next.t('common:message.delete_success'),
        duration: 2
      })
      callback.done()
    }
  } catch (error) {
    yield put({
      type: FAILURE(DELETE_COURSES),
      error
    })
  }
}

export default function* registrationCoursesSaga() {
  yield takeLatest(REQUEST(LOAD_COURSES), loadCoursesSaga)
  yield takeLatest(REQUEST(LOAD_ORDER_COURSE), loadOrderCourseSaga)
  yield takeLatest(REQUEST(UPDATE_ORDER_COURSE), updateOrderCourseSaga)
  yield takeLatest(REQUEST(CREATE_COURSE), createCourseSaga)
  yield takeLatest(REQUEST(LOAD_COURSE), loadCourseSaga)
  yield takeLatest(REQUEST(EDIT_COURSE), editCourseSaga)
  yield takeLatest(REQUEST(DELETE_COURSES), deleteCoursesSaga)
}

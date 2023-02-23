import { parseFilter } from 'Utils'
import AxiosClient from './api'
import END_POINT from './constants'

function getCourses({ params }) {
  params = parseFilter(params)
  return AxiosClient.get(END_POINT.COURSE_LIST, '', { params })
    .then((res) => res.data)
}

function getOrderCourse() {
  return AxiosClient.get(END_POINT.GET_ORDER_COURSE)
    .then((res) => res.data)
}

function updateOrderCourse({ data }) {
  return AxiosClient.put(END_POINT.ORDER_COURSE, data)
    .then((res) => res.data)
}

function getCourse({ courseId }) {
  return AxiosClient.get(`${END_POINT.COURSE}${courseId}`)
    .then((res) => res.data)
}

function createCourse({ data }) {
  return AxiosClient.post(END_POINT.COURSE, data)
    .then((res) => res.data)
}

function editCourse({ courseId, data }) {
  return AxiosClient.put(`${END_POINT.COURSE}${courseId}`, data)
    .then((res) => res.data)
}

function deleteCourse({ data }) {
  return AxiosClient.delete(END_POINT.DELETE_COURSES, data)
    .then((res) => res.data)
}

export {
  getCourses,
  getOrderCourse,
  updateOrderCourse,
  getCourse,
  createCourse,
  editCourse,
  deleteCourse
}

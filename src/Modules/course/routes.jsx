import React from 'react'
import { Switch } from 'react-router-dom'

import PublicRoute from 'Components/route/publicRoute'

import { USER_ROLE } from 'Constants/auth'
import RegistrationCourseScreen from './registration_course'
import CreateCourseScreen from './registration_course/create_course'
import EditCourseScreen from './registration_course/edit_course'

export const RoutesName = {
  REGISTRATION_COURSE: '/course-management/lesson-course',
  CREATE_COURSE: '/course-management/lesson/create',
  EDIT_COURSE: '/course-management/lesson/edit'
}

export const ROUTES = [
  {
    path: RoutesName.REGISTRATION_COURSE,
    component: RegistrationCourseScreen,
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    path: RoutesName.CREATE_COURSE,
    component: CreateCourseScreen,
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    path: `${RoutesName.EDIT_COURSE}/:id`,
    component: EditCourseScreen,
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  }
]

export default function CourseRoutes() {
  return (
    <Switch>
      {ROUTES.map((routeConfig, index) => (
        <PublicRoute key={index} exact {...routeConfig} />
      ))}
    </Switch>
  )
}
